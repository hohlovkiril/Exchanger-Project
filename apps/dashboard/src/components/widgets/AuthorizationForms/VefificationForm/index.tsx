import { useState } from 'react';

import {
  Box,
  Stack,
  Paper,
} from '../../../ui/Surfaces';
import {
  Typography,
} from '../../../ui/DataDisplay'
import {
  Button,
  TextField,
} from '../../../ui/Inputs'

interface IAuthVerificationFormProps {
  email: string;
  onResendCode?: () => void;
  onChange?: (payload: any) => void;
}

export default function VefificationCodeForm({
  email,
  onResendCode,
  onChange,
}: IAuthVerificationFormProps) {

  /** States */

  const [code, setCode] = useState<{
    '1'?: number,
    '2'?: number,
    '3'?: number,
    '4'?: number,
  }>({})

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
      <Typography
        variant='h5'
      >
        Enter Verification Code
      </Typography>
      
      <Typography
        variant='caption'
        color='textDisabled'
      >
        We send you on mail.
      </Typography>

      <Typography
        variant='caption'
      >
        {`We\`ve send you code on ${email}`}
      </Typography>

      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        gap={1}
        sx={{
          '& .MuiTextField-root': {
            maxWidth: '75px',
            '& input': {
              textAlign: 'center',
            }
          }
        }}
      >
        <TextField
          id="firstInputVerificationCode"
          variant='outlined'
          type='tel'
          inputMode='numeric'
          value={code['1'] ? code['1'] : undefined}
          onChange={(evt) => {
            const value = evt.currentTarget.value;

            if (value !== '<empty string>' && value.length > 1) return;

            if (value === '<empty string>') {
              setCode({ ...code, '1': undefined })
            } else {
              setCode({ ...code, '1': Number(evt.currentTarget.value) });
            }

            const el = window.document.getElementById('seconddInputVerificationCode');

            if (el && value !== '<empty string>') {
              el.focus();
            }
          }}
        />
        <TextField
          id="seconddInputVerificationCode"
          variant='outlined'
          type='tel'
          inputMode='numeric'
          value={code['2'] ? code['2'] : undefined}
          onChange={(evt) => {
            const value = evt.currentTarget.value;

            if (value !== '<empty string>' && value.length > 1) return;

            if (value === '<empty string>') {
              setCode({ ...code, '2': undefined })
            } else {
              setCode({ ...code, '2': Number(evt.currentTarget.value) });
            }

            const el = window.document.getElementById('theirdInputVerificationCode');

            if (el && value !== '<empty string>') {
              el.focus();
            }
          }}
        />
        <TextField
          id="theirdInputVerificationCode"
          variant='outlined'
          type='tel'
          inputMode='numeric'
          value={code['3'] ? code['3'] : undefined}
          onChange={(evt) => {
            const value = evt.currentTarget.value;

            if (value !== '<empty string>' && value.length > 1) return;

            if (value === '<empty string>') {
              setCode({ ...code, '3': undefined })
            } else {
              setCode({ ...code, '3': Number(evt.currentTarget.value) });
            }

            const el = window.document.getElementById('fourthInputVerificationCode');

            if (el && value !== '<empty string>') {
              el.focus();
            }
          }}
        />
        <TextField
          id="fourthInputVerificationCode"
          variant='outlined'
          type='tel'
          inputMode='numeric'
          value={code['4'] ? code['4'] : undefined}
          onChange={(evt) => {
            const value = evt.currentTarget.value;

            if (value !== '<empty string>' && value.length > 1) return;

            if (value === '<empty string>') {
              setCode({ ...code, '4': undefined })
            } else {
              setCode({ ...code, '4': Number(evt.currentTarget.value) });
            }
          }}
        />
      </Stack>

      <Button
        variant='contained'
        color='primary'
        fullWidth
        onClick={() => onChange && onChange({ code: Object.values(code).join('') })}
      >
        Continue
      </Button>

      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        gap={1}
      >
        <Typography
          variant='caption'
          sx={{
            fontSize: 'clamp(10px, 2vw, 12px)'
          }}
        >
          Did not receive the email? Check your spam filter, or
        </Typography>
        <Button
          variant='text'
          color='primary'
        >
          Resend Code
        </Button>
      </Stack>
    </Box>
  )
}