import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MenuItem, MenuList } from "@mui/material";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import { useAuth } from "../../../../providers/auth.provider";
import {
  IconButton,
} from "../../../ui/Inputs";
import {
  Avatar,
  ListItemIcon,
  Typography
} from '../../../ui/DataDisplay'
import {
  Menu
} from '../../../ui/Navigation';
import {
  Stack
} from '../../../ui/Surfaces'

export default function ProfileWidget() {

  /** Context */

  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user, onLogout } = useAuth();

  /** States */

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  /** Handlers */

  const handleOpen = (evt: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(evt.currentTarget);
  }

  const handleNavigateProfile = () => {
    navigate('/profile');
    handleClose();
  }

  const handleNavigateSettings = () => {
    navigate('/settings');
    handleClose();
  }

  const handleLogout = () => {
    onLogout();
    handleClose();
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  /** Components */

  const menuHeader = (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      gap={1}
    >
      {/* <Button
        variant='contained'
        fullWidth
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          gap: '1em',
        }}
      > */}
        {user?.avatar ? (
          <Avatar
            alt={user?.fullName}
            src={user?.avatar}
          />
        ) : (
          <AccountCircleIcon fontSize='large' />
        )}
        <Stack
          direction='column'
          justifyContent='center'
          alignItems='flex-start'
          textAlign='left'
          sx={{
            marginLeft: '1em',
            marginRight: 'auto'
          }}
        >
          <Typography
          >
            {user?.fullName}
          </Typography>
          <Typography
            variant="caption"
          >
            {user?.email}
          </Typography>
        </Stack>
      {/* </Button> */}
      <IconButton
        hoverColor="primary"
        onClick={handleLogout}
      >
        <Logout fontSize='medium' />
      </IconButton>
    </Stack>
  )

  return (
    <>
      <IconButton
        enableTooltip={{
          title: t('header__widget_profile_tooltip', { defaultValue: 'Profile' }),
          placement: 'bottom'
        }}
        onClick={handleOpen}
      >
        {user?.avatar ? (
          <Avatar alt={user.fullName} sx={{ width: 24, height: 24 }} src={user.avatar} /> 
        ) : (
          <AccountCircleIcon />
        )}
      </IconButton>

      <Menu
        id="menu-profile"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        menuHeader={{
          content: menuHeader,
          boxProps: {
            sx: {
              padding: '1em'
            }
          }
        }}
        paperProps={{
          sx: {
            minWidth: '300px',
          }
        }}
      >
        <MenuList
          sx={{
            padding: '4px',
            '& li': {
              fontSize: 'clamp(10px, 2vw, 14px)'
            }
          }}
        >
          <MenuItem
            onClick={handleNavigateProfile}
          >
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            {t('header__widget_profile_item_profile', { defaultValue: 'Profile' })}
          </MenuItem>
          <MenuItem onClick={handleNavigateSettings}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            {t('header__widget_profile_item_settings', { defaultValue: 'Settings' })}
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            {t('header__widget_profile_item_logout', { defaultValue: 'Logout' })}
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}