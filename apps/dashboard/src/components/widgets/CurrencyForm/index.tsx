import {
  Stack,
  Card,
  CardHeader,
  CardContent,
  Container,
} from '../../../components/ui/Surfaces'
import {
  Select,
  TextField,
} from '../../../components/ui/Inputs';
import {
  Typography,
} from '../../../components/ui/DataDisplay';
import { CurrencyType } from '@shared/enums';
import { MenuItem } from '@mui/material';

export type CurrencyFormType = {
  label?: string;
  symbol?: string;
  apiSymbol?: string;
  precision?: number;
  scale?: number;
  regex?: string;
  type?: CurrencyType;
  minimal?: number;
  reserve?: number;
}

export type CurrencyFormValidation = {
  label?: boolean;
  symbol?: boolean;
  precision?: boolean;
  scale?: boolean;
  minimal?: boolean;
  reserve?: boolean;
}

export interface ICurrencyFormProps {
  form: CurrencyFormType;
  formValidation: CurrencyFormValidation;
  onChange: (payload: CurrencyFormType) => void;
}

export default function CurrencyForm({
  form,
  formValidation,
  onChange,
}: ICurrencyFormProps) {

  /** States */

  return (
    <>
      <Container maxWidth='xl'>
        <Card>
          <CardContent>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='flex-start'
              flexWrap='wrap'
              gap={3}
              sx={{
                '& .MuiStack-root': {
                  flexBasis: '250px'
                }
              }}
            >
              <Stack
                direction='column'
                justifyContent='flex-start'
                gap={3}
                sx={{ flex: 1, }}
              >
                <Card>
                  <CardHeader
                    title={(
                      <Typography>
                        Currency Label
                      </Typography>
                    )}
                  />
                  <CardContent>
                    <TextField
                      variant='outlined'
                      size='small'
                      value={form.label || ''}
                      onChange={(evt) => onChange({ ...form, label: evt.currentTarget.value })}
                      placeholder="Currency Label"
                      error={formValidation.label === false ? true : false}
                      fullWidth
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader
                    title={(
                      <Typography>
                        Currency Symbol
                      </Typography>
                    )}
                  />
                  <CardContent>
                    <TextField
                      variant='outlined'
                      size='small'
                      value={form.symbol || ''}
                      onChange={(evt) => onChange({ ...form, symbol: evt.currentTarget.value })}
                      placeholder="Currency Symbol"
                      error={formValidation.symbol === false ? true : false}
                      fullWidth
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader
                    title={(
                      <Typography>
                        Currency API Symbol
                      </Typography>
                    )}
                  />
                  <CardContent>
                    <TextField
                      variant='outlined'
                      size='small'
                      value={form.apiSymbol || ''}
                      onChange={(evt) => onChange({ ...form, apiSymbol: evt.currentTarget.value })}
                      placeholder="Currency API Symbol"
                      fullWidth
                    />
                  </CardContent>
                </Card>
              </Stack>

              <Stack
                direction='column'
                justifyContent='flex-start'
                gap={3}
                sx={{ flex: 1, }}
              >
                <Card>
                  <CardHeader
                    title={(
                      <Typography>
                        Currency Precision
                      </Typography>
                    )}
                  />
                  <CardContent>
                    <TextField
                      variant='outlined'
                      type='number'
                      size='small'
                      value={form.precision || 0}
                      onChange={(evt) => {
                        if (evt.currentTarget.value === '<empty string>') return;

                        if (Number(evt.currentTarget.value) <= 0) return;

                        onChange({ ...form, precision: Number(evt.currentTarget.value)})
                      }}
                      fullWidth
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader
                    title={(
                      <Typography>
                        Currency Scale
                      </Typography>
                    )}
                  />
                  <CardContent>
                    <TextField
                      variant='outlined'
                      type='number'
                      size='small'
                      value={form.scale || 0}
                      onChange={(evt) => {
                        if (evt.currentTarget.value === '<empty string>') return;

                        if (Number(evt.currentTarget.value) <= 0) return;

                        onChange({ ...form, scale: Number(evt.currentTarget.value)})
                      }}
                      fullWidth
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader
                    title={(
                      <Typography>
                        Currency Wallet Regex
                      </Typography>
                    )}
                  />
                  <CardContent>
                    <TextField
                      variant='outlined'
                      size='small'
                      value={form.type !== CurrencyType.FIAT ? form.regex : ''}
                      onChange={(evt) => onChange({ ...form, regex: evt.currentTarget.value })}
                      placeholder='Address Regex Validation'
                      disabled={form.type !== CurrencyType.CRYPTO}
                      fullWidth
                    />
                  </CardContent>
                </Card>
              </Stack>
              <Stack
                direction='column'
                justifyContent='flex-start'
                gap={3}
                sx={{ flex: 1, }}
              >
                <Card>
                  <CardHeader
                    title={(
                      <Typography>
                        Currency Type
                      </Typography>
                    )}
                  />
                  <CardContent>
                    <Select
                      value={Number(form.type)}
                      size='small'
                      fullWidth
                      onChange={(evt) => onChange({ ...form, type: evt.target.value as CurrencyType })}
                    >
                      <MenuItem value={Number(CurrencyType.CRYPTO)}>{CurrencyType[0]}</MenuItem>
                      <MenuItem value={Number(CurrencyType.FIAT)}>{CurrencyType[1]}</MenuItem>
                    </Select>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader
                    title={(
                      <Typography>
                        Currency Exchange Minimal
                      </Typography>
                    )}
                  />
                  <CardContent>
                    <TextField
                      variant='outlined'
                      type='number'
                      size='small'
                      value={form.minimal || 0}
                      onChange={(evt) => {
                        if (evt.currentTarget.value === '<empty string>') return;

                        if (Number(evt.currentTarget.value) < 0) return;

                        onChange({ ...form, minimal: Number(evt.currentTarget.value)})
                      }}
                      placeholder="Exchange Minimal: 0.001"
                      fullWidth
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader
                    title={(
                      <Typography>
                        Currency Exchange Reserve
                      </Typography>
                    )}
                  />
                  <CardContent>
                    <TextField
                      variant='outlined'
                      type='number'
                      size='small'
                      value={form.reserve || 0}
                      onChange={(evt) => {
                        if (evt.currentTarget.value === '<empty string>') return;

                        if (Number(evt.currentTarget.value) < 0) return;

                        onChange({ ...form, reserve: Number(evt.currentTarget.value)})
                      }}
                      placeholder="Exchange Reserve: 13.244"
                      fullWidth
                    />
                  </CardContent>
                </Card>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}