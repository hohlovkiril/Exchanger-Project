import { useState } from "react";

import { CredentialsConfig, OAuthProviderConfig } from "../../../../common/types";
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

export interface ISigninFormProps {
  credentials: CredentialsConfig;
  providers?: OAuthProviderConfig[];
  errorMessage?: string;
  loginPageUrl?: string;
  onChange?: (payload: any) => void;
}

export default function SigninForm({
  providers,
  credentials,
  errorMessage,
  loginPageUrl,
  onChange,
}: ISigninFormProps) {

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
          Sign in
        </Typography>
        {loginPageUrl && (
          <Button
            variant='text'
            color='primary'
          >
            Already have an account?
          </Button>
        )}
      </Stack>

      <Typography
        variant='caption'
        sx={{
          textAlign: 'center'
        }}
      >
        Welcome, please sign in to continue
      </Typography>

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
            form={{}}
            setForm={(value: any) => setForm({ ...form, [field.formKey]: value })}
            fieldConfig={field}
          />
        ))}
      </Stack>

      <Button
        variant='contained'
        color='primary'
        onClick={() => onChange ? onChange(form) : null}
      >
        Sign in
      </Button>

    </Box>
  )
}