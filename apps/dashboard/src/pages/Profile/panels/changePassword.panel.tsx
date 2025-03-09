import { useState } from "react";
import { useTranslation } from "react-i18next";

import { FormControl, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";

import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import DoneIcon from '@mui/icons-material/Done';

import { Card, Stack, CardContent, CardHeader } from "../../../components/ui/Surfaces";
import { MEDIA_QUERIES } from "../../../common/constants";
import { Avatar, List, ListItem, ListItemIcon, ListItemText, Typography, Divider } from "../../../components/ui/DataDisplay";
import { Button, IconButton } from "../../../components/ui/Inputs";

export default function ChangePasswordPanel() {

  /** Context */

  const { t } = useTranslation();

  /** States */

  const [password, setPassword] = useState<{
    old: string, new: string, confirm: string,
  }>({
    old: '',
    new: '',
    confirm: '',
  });
  const [showPassword, setShowPassword] = useState<{
    old: boolean, new: boolean, confirm: boolean,
  }>({
    old: false,
    new: false,
    confirm: false,
  });

  /** Vars */

  const testMinimumLength = password.new.length >= 8;
  const testLowerCharacter = /[a-z]/.test(password.new);
  const testUpperCharacter = /[A-Z]/.test(password.new);
  const testNumberCharacter = /[0-9]/.test(password.new);

  const btnUpdateDisabled: boolean = (password.new.length === 0 && password.confirm.length === 0)
    || (password.old.length < 8)
    || (password.new !== password.confirm)
    || !testMinimumLength
    || !testLowerCharacter
    || !testUpperCharacter
    || !testNumberCharacter
    ? true : false;

  return (
    <Card>
      <CardHeader
        avatar={(
          <Avatar>
            <VpnKeyIcon />
          </Avatar>
        )}
        title={(
          <Typography>
            {t('page__profile_card_change_password_title', { defaultValue: 'Change Password' })}
          </Typography>
        )}
      />

      <Divider />

      <CardContent>
        <Stack
          sx={{
            padding: '1em',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: '5em',

            [`@media screen and (max-width: ${MEDIA_QUERIES.smallLaptop})`]: {
              flexDirection: 'column',
              gap: '1em',
            }
          }}
        >
          <Stack
            flex={1}
            direction='column'
            gap={1}
          >
            <Typography variant='caption'>
              {t('page__profile_card_change_password_old_password', { defaultValue: 'Old Password' })}
            </Typography>

            <FormControl
              variant='outlined'
              fullWidth
              sx={{
                mb: '1em'
              }}
            >
              <InputLabel
                htmlFor="change_password__old_password"
              >
                {t('page__profile_card_change_password_old_password', { defaultValue: 'Old Password' })}
              </InputLabel>
              <OutlinedInput
                id="change_password__old_password"
                type={showPassword.old ? 'text' : 'password'}
                label={t('page__profile_card_change_password_old_password', { defaultValue: 'Old Password' })}
                value={password.old}
                onChange={(evt) => setPassword({ ...password, old: evt.currentTarget.value })}
                fullWidth
                endAdornment={(
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={() => setShowPassword({ ...showPassword, old: !showPassword.old })}
                    >
                      {showPassword.old ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )}
              />
            </FormControl>

            <Typography variant='caption'>
            {t('page__profile_card_change_password_new_password', { defaultValue: 'New Password' })}
            </Typography>

            <FormControl
              variant='outlined'
              fullWidth
              sx={{
                mb: '1em'
              }}
            >
              <InputLabel
                htmlFor="change_password__new_password"
              >
                {t('page__profile_card_change_password_new_password', { defaultValue: 'New Password' })}
              </InputLabel>
              <OutlinedInput
                id="change_password__new_password"
                type={showPassword.new ? 'text' : 'password'}
                label={t('page__profile_card_change_password_new_password', { defaultValue: 'New Password' })}
                value={password.new}
                onChange={(evt) => setPassword({ ...password, new: evt.currentTarget.value })}
                fullWidth
                endAdornment={(
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={() => setShowPassword({ ...showPassword, new: !showPassword.new })}
                    >
                      {showPassword.new ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )}
              />
            </FormControl>

            <Typography variant='caption'>
              {t('page__profile_card_change_password_confirm_password', { defaultValue: 'Confirm Password' })}
            </Typography>

            <FormControl
              variant='outlined'
              fullWidth
            >
              <InputLabel
                htmlFor="change_password__confirm_password"
              >
                {t('page__profile_card_change_password_confirm_password', { defaultValue: 'Confirm Password' })}
              </InputLabel>
              <OutlinedInput
                id="change_password__confirm_password"
                type={showPassword.confirm ? 'text' : 'password'}
                label={t('page__profile_card_change_password_confirm_password', { defaultValue: 'Confirm Password' })}
                value={password.confirm}
                onChange={(evt) => setPassword({ ...password, confirm: evt.currentTarget.value })}
                fullWidth
                endAdornment={(
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={() => setShowPassword({ ...showPassword, confirm: !showPassword.confirm })}
                    >
                      {showPassword.confirm ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )}
              />
            </FormControl>
          </Stack>

          <Stack
            flex={1}
            direction='column'
            gap={1}
          >
            <Typography
              sx={{
                fontWeight: '600'
              }}
            >
              {t('page__profile_card_change_password_rule_title', { defaultValue: 'New Password must contain' })}:
            </Typography>

            <List
              sx={{
                '& .MuiListItem-root': {
                  borderBottom: '1px solid',
                  borderColor: 'rgba(125, 125, 125, .25)',
                  '&:last-child': {
                    borderBottom: 'none',
                  }
                },
                '& .MuiListItemText-primary': {
                  fontSize: 'clamp(10px, 2vw, 14px)',
                  fontWeight: '300'
                }
              }}
            >
              <ListItem>
                <ListItemIcon>
                  {password.new.length > 8 ? <DoneIcon color='success' /> : <HorizontalRuleIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={`${t('page__profile_card_change_password_rule_length', { defaultValue: "At least 8 characters" })}`}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  {/[a-z]/.test(password.new) ? <DoneIcon color='success' /> : <HorizontalRuleIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={`${t('page__profile_card_change_password_rule_lower', { defaultValue: 'At least 1 lower letter' })} (a - z)`}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  {/[A-Z]/.test(password.new) ? <DoneIcon color='success' /> : <HorizontalRuleIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={`${t('page__profile_card_change_password_rule_upper', { defaultValue: 'At least 1 uppercase letter' })} (A - Z)`}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  {/[0-9]/.test(password.new) ? <DoneIcon color='success' /> : <HorizontalRuleIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={`${t('page__profile_card_chage_password_rule_number', { defaultValue: 'At least 1 number' })} (0-9)`}
                />
              </ListItem>
            </List>
          </Stack>

        </Stack>
      </CardContent>

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
            disabled={btnUpdateDisabled}
          >
            {t('page__profile_card_btn_update', { defaultValue: 'Update' })}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}