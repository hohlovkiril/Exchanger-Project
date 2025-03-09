import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import MailLockIcon from '@mui/icons-material/MailLock';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SecurityIcon from '@mui/icons-material/Security';
import ShareIcon from '@mui/icons-material/Share';

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

import { Stack, Card, CardContent, CardHeader } from "../../../components/ui/Surfaces";
import { Avatar, List, ListItem, Typography, Divider, } from "../../../components/ui/DataDisplay";
import { Button, Switch } from '../../../components/ui/Inputs';
import { MEDIA_QUERIES } from '../../../common/constants';

interface IProps {
  showEmailSettings?: true;
  showSecuritySettings?: true;
  showNotificationSettings?: true;
  showSocialSettings?: true;
}

export default function SettingsPanel({
  showEmailSettings,
  showSecuritySettings,
  showNotificationSettings,
  showSocialSettings
}: IProps) {

  /** Context */

  const { t } = useTranslation();

  /** States */

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [socialOauth, setSocialOauth] = useState<{
    google: boolean;
    facebook: boolean;
  }>({
    google: false,
    facebook: false,
  })

  return (
    <>
      <Stack
        direction='row'
        justifyContent='space-between'
        gap={3}
        sx={{
          [`@media screen and (max-width: ${MEDIA_QUERIES.smallLaptop})`]: {
            flexDirection: 'column'
          }
        }}
      >
        <Stack
          flex={1}
          direction='column'
          justifyContent='flex-start'
          gap={3}
        >
          {showEmailSettings && (
            <Card>
              <CardHeader
                avatar={(
                  <Avatar>
                    <MailLockIcon />
                  </Avatar>
                )}
                title={(
                  <Typography>
                    {t('page__profile_card_settings_email_settings_title', { defaultValue: 'Email Settings' })}
                  </Typography>
                )}
              />

              <Divider />

              <CardContent>
                <List
                  sx={{
                    '& .MuiListItem-root': {
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      '& .MuiTypography-root': {
                        color: 'rgba(125, 125, 125, 1)'
                      }
                    }
                  }}
                >
                  <ListItem>
                    <Typography>
                      {t('page__profile_card_settings_email_settings_enable_notification', { defaultValue: 'Email Notification' })}
                    </Typography>
                    <Switch
                      
                    />
                  </ListItem>
                  <ListItem>
                    <Typography>
                      {t('page__profile_card_settings_email_settings_send_copy_to_email', { defaultValue: 'Send Copy To Personal Email' })}
                    </Typography>
                    <Switch
                      
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          )}

          {showSecuritySettings && (
            <Card>
              <CardHeader
                avatar={(
                  <Avatar>
                    <SecurityIcon />
                  </Avatar>
                )}
                title={(
                  <Typography>
                    {t('page__profile_card_settings_security_title', { defaultValue: 'Security Settings' })}
                  </Typography>
                )}
              />

              <Divider />

              <CardContent>
                <List
                  sx={{
                    '& .MuiListItem-root': {
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      '& .MuiTypography-root': {
                        color: 'rgba(125, 125, 125, 1)'
                      }
                    }
                  }}
                >
                  <ListItem>
                    <Typography>
                      {t('page__profile_card_settings_security_settings_login_email_confirm', { defaultValue: 'Login confirmation by email' })}
                    </Typography>
                    <Switch
                      
                    />
                  </ListItem>
                  <ListItem>
                    <Typography>
                      {t('page__profile_card_settings_security_settings_password_change_email_confirm', { defaultValue: 'Password change confirmation by email' })}
                    </Typography>
                    <Switch
                      
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          )}
        </Stack> 
        <Stack
          flex={1}
          direction='column'
          justifyContent='flex-start'
          gap={3}
        >
          {showNotificationSettings && (
            <Card>
              <CardHeader
                avatar={(
                  <Avatar>
                    <CircleNotificationsIcon />
                  </Avatar>
                )}
                title={(
                  <Typography>
                    {t('page__profile_card_settings_notification_title', { defaultValue: 'Notification Settings' })}
                  </Typography>
                )}
              />

              <Divider />

              <CardContent>
                <List
                  sx={{
                    '& .MuiListItem-root': {
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      '& .MuiTypography-root': {
                        color: 'rgba(125, 125, 125, 1)'
                      }
                    }
                  }}
                >
                  <ListItem>
                    <Typography>
                      {t('page__profile_card_settings_notification_login_notification', { defaultValue: 'Login notification' })}
                    </Typography>
                    <Switch
                      
                    />
                  </ListItem>
                  <ListItem>
                    <Typography>
                      {t('page__profile_card_settings_notification_new_message', { defaultValue: 'Notification of new messages' })}
                    </Typography>
                    <Switch
                      
                    />
                  </ListItem>
                  <ListItem>
                    <Typography>
                      {t('page__profile_card_settings_notification_new_events', { defaultValue: 'Notification of new events' })}
                    </Typography>
                    <Switch
                      
                    />
                  </ListItem>
                  <ListItem>
                    <Typography>
                      {t('page__profile_card_settings_notification_tasks', { defaultValue: 'Notifications about tasks and deadlines' })}
                    </Typography>
                    <Switch
                      
                    />
                  </ListItem>
                  <ListItem>
                    <Typography>
                      {t('page__profile_card_settings_notification_system', { defaultValue: 'System notifications' })}
                    </Typography>
                    <Switch
                      
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          )}

          {showSocialSettings && (
            <Card>
              <CardHeader
                avatar={(
                  <Avatar>
                    <ShareIcon />
                  </Avatar>
                )}
                title={(
                  <Typography>
                    {t('page__profile_card_settings_social_title', { defaultValue: 'Social Network Settings' })}
                  </Typography>
                )}
              />

              <Divider />

              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  gap: '1em',
                }}
              >
                <Stack
                  direction='row'
                  justifyContent='space-between'
                  alignItems='center'
                >
                  <Button
                    color='primary'
                    startIcon={<GoogleIcon />}
                  >
                    Google
                  </Button>

                  {socialOauth.google ? (
                    <Button
                      color='error'
                      variant='text'
                    >
                      {t('page__profile_card_settings_social_btn_disconnect', { defaultValue: 'Disconnect' })}
                    </Button>
                  ) : (
                    <Button
                      color='primary'
                      variant='text'
                    >
                      {t('page__profile_card_settings_social_btn_connect', { defaultValue: 'Connect' })}
                    </Button>
                  )}
                </Stack>

                <Stack
                  direction='row'
                  justifyContent='space-between'
                  alignItems='center'
                >
                  <Button
                    color='primary'
                    startIcon={<FacebookIcon />}
                  >
                    Facebook
                  </Button>

                  {socialOauth.facebook ? (
                    <Button
                      color='error'
                      variant='text'
                    >
                      {t('page__profile_card_settings_social_btn_disconnect', { defaultValue: 'Disconnect' })}
                    </Button>
                  ) : (
                    <Button
                      color='primary'
                      variant='text'
                    >
                      {t('page__profile_card_settings_social_btn_connect', { defaultValue: 'Connect' })}
                    </Button>
                  )}
                </Stack>
              </CardContent>
            </Card>
          )}
        </Stack> 
      </Stack>

      <CardContent>
          <Stack
            direction='row'
            justifyContent='flex-end'
            gap={1}
          >
            <Button
              color='inherit'
              variant='outlined'
            >
              {t('page__profile_card_btn_cancel', { defaultValue: 'Cancel' })}
            </Button>
            <Button
              color='primary'
              variant='contained'
            >
              {t('page__profile_card_btn_update', { defaultValue: 'Update' })}
            </Button>
          </Stack>
        </CardContent>
    </>
  )
}