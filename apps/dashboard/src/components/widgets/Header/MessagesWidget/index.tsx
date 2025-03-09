import { useState } from "react";
import { useTranslation } from "react-i18next";

import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import {
  Button,
  IconButton,
} from "../../../ui/Inputs";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "../../../ui/DataDisplay";
import {
  Box,
  Stack,
} from '../../../ui/Surfaces';
import {
  Menu,
} from '../../../ui/Navigation';

export default function MessageWidget() {

  /** Context */
  
  const { t } = useTranslation();

  /** States */

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState<any[]>([]);

  /** Handlers */
  
  const handleOpen = (evt: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(evt.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  /** Component */

  const menuHeader = (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems="center"
    >
      <Typography>
        {t('header__widget_message_title', { defaultValue: 'Messages' })}
      </Typography>

      {false && (
        <IconButton
          color='primary'
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      )}
    </Stack>
  )

  return (
    <>
      <IconButton
        enableBadge={{
          content: 0,
          color: 'primary'
        }}
        enableTooltip={{
          title: t('header__widget_message_tooltip', { defaultValue: 'Messages' }),
          placement: 'bottom',
        }}
        onClick={handleOpen}
      >
        <MailIcon />
      </IconButton>

      <Menu
        id="menu-message"
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

        {data.length > 0 ? (
          <>
            <List
              sx={{
                padding: '0',
                '& .MuiTouchRipple-root': {
                  borderRadius: '0'
                }
              }}
            >
              {data.map((noty, key) => (
                <ListItem
                  key={key}
                  disablePadding
                  secondaryAction={(
                    <Typography
                      variant='caption'
                    >
                      3:00 AM
                    </Typography>
                  )}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <NotificationsActiveIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary='Test'
                      secondary='2m ago'
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontSize: 'clamp(10px, 2vw, 12px)',
                        },
                        '& .MuiListItemText-secondary': {
                          fontSize: 'clamp(8px, 2vw, 10px)',
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>

            <Divider />

            <Button
              variant='text'
              color='primary'
              sx={{
                padding: '1em',
                width: '100%',
              }}
            >
              {t('header__widget_message_btn_view_all', { defaultValue: 'View All' })}
            </Button>
          </>
        ) : (
          <Box
            sx={{
              padding: '1.5em',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography
              color='textDisabled'
              variant='caption'
            >
              {t('header__widget_message_placeholder', { defaultValue: 'You have no new messages.' })}
            </Typography>
          </Box>
        )}
      </Menu>
    </>
  )
}