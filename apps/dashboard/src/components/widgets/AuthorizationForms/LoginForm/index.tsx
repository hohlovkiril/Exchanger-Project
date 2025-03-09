import { useState } from "react";

import { CredentialsConfig, OAuthProviderConfig } from "../../../../common/types"
import {
  Box,
  Stack,
  Paper,
} from '../../../ui/Surfaces';
import {
  Typography,
  Divider,
} from '../../../ui/DataDisplay'
import {
  Button,
} from '../../../ui/Inputs'
import AuthFormProvider from "../Provider";
import AuthFormField from "../Field";

export interface ILoginFormProps {
  credentials: CredentialsConfig;
  providers?: OAuthProviderConfig[];
  errorMessage?: string;
  registePagerUrl?: string;
  onChange?: (payload: any) => void;
}

export default function LoginForm({
  providers,
  credentials,
  errorMessage,
  registePagerUrl,
  onChange,
}: ILoginFormProps) {

  /** States */

  const [form, setForm] = useState<Record<string, string>>({});

  return (
    <Box
      sx={{
        margin: 'auto',
        padding: '2em 3em 2em 3em',
        minWidth: '360px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '1em',
      }}
      component={Paper}
    >

      {/** Form Header */}
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Typography
          variant='h5'
        >
          Log in
        </Typography>
        {registePagerUrl && (
          <Button
            variant='text'
            color='primary'
          >
            Don`t have a account?
          </Button>
        )}
      </Stack>

      <Typography
        variant='caption'
        sx={{
          textAlign: 'center'
        }}
      >
        Welcome, please log in to continue
      </Typography>

      {errorMessage && (
        <Typography
          color='error'
        >
          {errorMessage}
        </Typography>
      )}

      {/** Form Providers */}
      {providers && (
        <>
          <Stack
            direction='column'
            justifyContent='flex-start'
            gap={1}
          >
            {providers.map((provider, key) => (
              <AuthFormProvider
                key={key}
                url={provider.url}
                icon={provider.icon}
                label={provider.label}
              />
            ))}
          </Stack>

          <Divider sx={{ marginTop: '1em', marginBottom: '1em' }}>or</Divider>
        </>
      )}

      {/** Form Credentials */}
      <Stack
        direction='column'
        justifyContent='flex-start'
        gap={1}
      >
        {credentials.fields.map((field, key) => (
          <AuthFormField
            key={key}
            form={form}
            setForm={(value: any) => setForm({ ...form, [field.formKey]: value })}
            fieldConfig={field}
          />
        ))}
      </Stack>

      <Stack
        direction='row'
        justifyContent='space-between'
      >
        <Button
          color='inherit'
          variant='text'
        >
          Forgot Password?
        </Button>
      </Stack>
      
      <Button
        variant='contained'
        color='primary'
        onClick={() => onChange ? onChange(form) : null}
      >
        Log in
      </Button>

    </Box>
  )
}