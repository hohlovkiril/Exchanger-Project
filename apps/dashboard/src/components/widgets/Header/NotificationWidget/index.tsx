import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import NotificationsIcon from '@mui/icons-material/Notifications';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import {
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
} from '../../../ui/DataDisplay'
import {
  Button,
  IconButton,
} from "../../../ui/Inputs";
import {
  Menu,
} from '../../../ui/Navigation';
import {
  Box,
  Stack,
} from '../../../ui/Surfaces'
import { formatDate, formatPastDate } from '../utils';

export default function NotificationWidget() {

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
        {t('header__widget_notification_title', { defaultValue: 'Notification' })}
      </Typography>

      {false && (
        <IconButton
          color='success'
          enableTooltip={{
            title: 'Mark as all read'
          }}
        >
          <CheckCircleOutlineIcon />
        </IconButton>
      )}
    </Stack>
  )

  return (
    <>
      <IconButton
        enableBadge={{
          content: data.length,
          color: 'primary'
        }}
        enableTooltip={{
          title: t('header__widget_notification_tooltip', { defaultValue: 'Notification' }),
          placement: 'bottom'
        }}
        onClick={handleOpen}
      >
        <NotificationsIcon />
      </IconButton>

      <Menu
        id="menu-notification"
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

        {false ? (
          <>
            <List
              sx={{
                padding: '0',
                '& .MuiTouchRipple-root': {
                  borderRadius: '0'
                }
              }}
            >
              {Array(3).fill(null).map((noty, key) => (
                <ListItem
                  key={key}
                  disablePadding
                  secondaryAction={(
                    <Typography
                      variant='caption'
                    >
                      {formatDate(new Date('03.05.2025 12:55'))}
                    </Typography>
                  )}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <NotificationsActiveIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary='Test'
                      secondary={formatPastDate(new Date('03.05.2025 12:55'))}
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
              {t('header__widget_notification_btn_view_all', { defaultValue: 'View All' })}
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
              {t('header__widget_notification_placeholder', { defaultValue: 'You have no new notifications.' })}
            </Typography>
          </Box>
        )}

      </Menu>
    </>
  )
}