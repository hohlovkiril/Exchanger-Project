/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react"
import { useTranslation } from "react-i18next";
import { MenuItem, MenuList } from "@mui/material";

import LanguageIcon from '@mui/icons-material/Language';

import {
  IconButton,
} from "../../../ui/Inputs";
import {
  Menu,
} from '../../../ui/Navigation';
import { useLanguageApi } from "../../../../providers/language.provider";

export default function LanguageWidget() {

  /** Context */

  const { t, i18n } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguageApi();

  /** States */

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  /** Handlers */
  
  const handleOpen = (evt: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(evt.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <>
      <IconButton
        enableTooltip={{
          title: t('header__widget_language_tooltip', { defaultValue: 'Language' }),
          placement: 'bottom'
        }}
        enableBadge={{
          content: currentLanguage,
          color: 'warning'
        }}
        onClick={handleOpen}
      >
        <LanguageIcon />
      </IconButton>

      <Menu
        id="menu-language-widget"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        paperProps={{
          sx: {
            minWidth: '180px',
          }
        }}
      >
        <MenuList
          sx={{
            padding: '4px'
          }}
        >
          <MenuItem
            onClick={() => {
              changeLanguage('ru');
              handleClose();
            }}
          >
            {t('ru')} {("(RU)")}
          </MenuItem>
          <MenuItem
            onClick={() => {
              changeLanguage('en');
              handleClose();
            }}
          >
            {t('en')} {"(EN)"}
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}