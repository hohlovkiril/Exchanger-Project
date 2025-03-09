import React, { useContext, createContext, useEffect, useState,} from 'react'
import { useTranslation } from 'react-i18next';

import {
  StorageService
} from '../services';
import { defaultLocalization } from '../common/data';
import { useLocation } from 'react-router-dom';

interface IContext {
  currentLanguage: string;
  changeLanguage: (language: string) => void;
}

interface IProvider {
  children?: React.ReactNode;
}

export const LanguageContext = createContext<IContext | undefined>(undefined);

export const LanguageProvider: React.FC<IProvider> = ({
  children
}) => {

  /** Context */

  const { i18n } = useTranslation();
  const location = useLocation();

  /** States */

  const [currentLanguage, setCurrentLanguage] = useState<string>(
    StorageService.checkItem('current_language')
      ? StorageService.getItem('current_language') : 'en',
  )

  /** Handlers */
  
  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
    StorageService.setItem('current_language', language);
  }

  /** Effects */

  useEffect(() => {
    Object.keys(defaultLocalization).forEach((langCode) => {
      i18n.addResourceBundle(langCode, 'translation', defaultLocalization[langCode].translation);

      if (langCode === 'en') {
        i18n.changeLanguage('en');
      }
    })
  }, [
    i18n,
  ])

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [
    i18n,
    currentLanguage,
    location,
  ])

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        changeLanguage: handleChangeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguageApi = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguageApi must be wrapped in LanguageProvider');
  }

  return context;
}