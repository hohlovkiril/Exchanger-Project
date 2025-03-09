import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Divider, OutlinedInput, Stack } from "@mui/material";

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import { Avatar, Typography } from "../../../components/ui/DataDisplay";
import { Card, CardContent, CardHeader } from "../../../components/ui/Surfaces";
import { Button } from "../../../components/ui/Inputs";
import { useAuth } from "../../../providers/auth.provider";

export default function AccountPanel() {

  /** Context */

  const { t } = useTranslation();
  const { user } = useAuth();

  /** States */

  const [form, setForm] = useState<{
    username: string;
    email: string;
    firstName: string;
    lastName: string;
  }>({
    username: user?.username || '',
    email: user?.email || '',
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
  })

  return (
    <>
      <Card>
        <CardHeader
          avatar={(
            <Avatar>
              <ManageAccountsIcon />
            </Avatar>
          )}
          title={(
            <Typography>
              {t('page__profile_card_my_account_general_settings_title', { defaultValue: 'General Settings' })}
            </Typography>
          )}
        />

        <Divider />

        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1em'
          }}
        >
          <Stack
            direction='row'
            justifyContent='space-between'
            flexWrap="wrap"
            gap={3}
          >
            <Stack
              flex={1}
              direction='column'
              justifyContent='flex-start'
              alignItems='flex-start'
              gap={1}
            >
              <Typography
                variant='caption'
              >
                Account Username
              </Typography>
              <OutlinedInput
                placeholder="Account Username"
                value={form.username}
                onChange={(evt) => setForm({ ...form, username: evt.currentTarget.value })}
                fullWidth
              />
            </Stack>
            <Stack
              flex={1}
              direction='column'
              justifyContent='flex-start'
              alignItems='flex-start'
              gap={1}
            >
              <Typography
                variant='caption'
              >
                Account Email
              </Typography>
              <OutlinedInput
                placeholder="Account Email"
                value={form.email}
                onChange={(evt) => setForm({ ...form, email: evt.currentTarget.value })}
                fullWidth
              />
            </Stack>
          </Stack>

          <Stack
            direction='row'
            justifyContent='space-between'
            flexWrap="wrap"
            gap={3}
          >
            <Stack
              flex={1}
              direction='column'
              justifyContent='flex-start'
              alignItems='flex-start'
              gap={1}
            >
              <Typography
                variant='caption'
              >
                First Name
              </Typography>
              <OutlinedInput
                placeholder="First Name"
                value={form.firstName}
                onChange={(evt) => setForm({ ...form, firstName: evt.currentTarget.value })}
                fullWidth
              />
            </Stack>
            <Stack
              flex={1}
              direction='column'
              justifyContent='flex-start'
              alignItems='flex-start'
              gap={1}
            >
              <Typography
                variant='caption'
              >
                Last Name
              </Typography>
              <OutlinedInput
                placeholder="Last Name"
                value={form.lastName}
                onChange={(evt) => setForm({ ...form, lastName: evt.currentTarget.value })}
                fullWidth
              />
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
          >
            {t('page__profile_card_btn_update', { defaultValue: 'Update' })}
          </Button>
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}