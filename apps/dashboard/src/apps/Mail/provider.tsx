import React, { useState, useContext, createContext, useEffect } from 'react'
import { NewMailFormType } from '../../common/types';


interface IMailApi {

  newMailForm: NewMailFormType;
  newMailFormOpen: boolean;
  setNewMailForm: (payload: NewMailFormType) => void;
  setNewMailFormOpen: (open: boolean) => void;
}

interface IProviderProps {
  children: React.ReactNode;
}

export const MailContext = createContext<IMailApi | undefined>(undefined);

export const MailProvider: React.FC<IProviderProps> = ({
  children
}) => {

  /** States */

  const [newMailForm, setNewMailForm] = useState<NewMailFormType>({});
  const [newMailFormOpen, setNewMailFormOpen] = useState<boolean>(false);

  /** Handlers */


  return (
    <MailContext.Provider
      value={{
        newMailForm,
        newMailFormOpen,
        setNewMailForm: (payload: NewMailFormType) => setNewMailForm(payload),
        setNewMailFormOpen,
      }}
    >
      {children}
    </MailContext.Provider>
  )
}

export const useMailApi = (): IMailApi => {
  const context = useContext(MailContext);

  if (!context) {
    throw new Error('useMailApi must be wrapped in MailProvider');
  }

  return context;
}