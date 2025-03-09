import { useState } from "react";

import {
  Box,
  Paper,
  Stack,
} from '../../../ui/Surfaces';
import {
  Button,
} from '../../../ui/Inputs';
import {
  Typography,
} from '../../../ui/DataDisplay';
import { FormControl, TextField } from "@mui/material";

interface IAuthForgotPasswordFormProps {
  loginPageUrl?: string;
  onChange?: (payload: any) => void;
}

export default function ForgotPasswordForm({
  loginPageUrl,
  onChange,
}: IAuthForgotPasswordFormProps) {

  /** States */

  const [emailRecovery, setEmailRecovery] = useState<string>('');

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
          Forgot Password
        </Typography>
        <Button
          variant='text'
          color='primary'
        >
          Back to Login
        </Button>
      </Stack>

      <FormControl>
        <TextField
          label="Email Address"
          placeholder="Enter email address"
          type='email'
          value={emailRecovery}
          onChange={(evt) => setEmailRecovery(evt.currentTarget.value)}
          required
          focused
        />
      </FormControl>

      <Typography
        variant='caption'
      >
        Do not forgot to check SPAM box.
      </Typography>

      <Button
        variant='contained'
        color='primary'
        onClick={() => onChange && onChange({ email: emailRecovery })}
      >
        Send Password Reset Email
      </Button>
    </Box>
  )
}