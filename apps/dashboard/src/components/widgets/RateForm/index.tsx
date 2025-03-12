import { useState, useEffect } from 'react';
import { MenuItem } from "@mui/material";
import { CurrencyDataType } from "../../../common/types";
import { Typography } from "../../ui/DataDisplay";
import { Select, TextField } from "../../ui/Inputs";
import { Card, CardContent, CardHeader, Container, Stack } from "../../ui/Surfaces";
import { useAuth } from '../../../providers/auth.provider';
import { CurrencyApi } from '../../../services/api';
import { useSnackbar } from 'notistack';

export type RateFormType = {
  symbol?: string;
  status?: boolean;
  price?: number;
  autoUpdatePrice?: boolean;
  clientCurrencyBuyId?: number;
  clientCurrencySellId?: number;
}

export type RateFormValidation = {
  clientCurrencyBuy?: boolean;
  clientCurrencySell?: boolean;
  price?: boolean;
}

export interface IRateFormProps {
  form: RateFormType;
  formValidation: RateFormValidation;
  onChange: (payload: RateFormType) => void;
  edit?: true;
}

export default function RateForm({
  form,
  formValidation,
  onChange,
  edit,
}: IRateFormProps) {

  /** Context */

  const { enqueueSnackbar } = useSnackbar();
  const { token } = useAuth();

  /** States */

  const [currencyList, setCurrencyList] = useState<CurrencyDataType[]>([]);

  /** Effects */

  useEffect(() => {
    if (!token) return;
    
    CurrencyApi.getMany(token)
    .then((data) => setCurrencyList(data))
    .catch((err) => enqueueSnackbar(err.message, { variant: 'warning' }))
  }, [
    token,
    enqueueSnackbar,
  ])

  return (
    <>
      <Container maxWidth='xl'>
        <Card>
          <CardContent>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='flex-start'
              gap={3}
              sx={{
                '& .MuiStack-root': {
                  flexBasis: '250px',
                }
              }}
            >
              <Stack
                flex={1}
                direction='column'
                justifyContent='flex-start'
                gap={3}
              >
                <Card>
                  <CardHeader
                    title={(
                      <Typography>
                        Rate Status
                      </Typography>
                    )}
                  />
                  <CardContent>
                    <Select
                      size='small'
                      value={form.status ? Number(form.status) : 0}
                      onChange={(evt) => onChange({ ...form, status: Boolean(Number(evt.target.value)) })}
                    >
                      <MenuItem value={1}>Active</MenuItem>
                      <MenuItem value={0}>Disabled</MenuItem>
                    </Select>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader
                    title={(
                      <Typography>
                        Rate Price
                      </Typography>
                    )}
                  />
                  <CardContent>
                    <TextField
                      variant='outlined'
                      type='number'
                      size='small'
                      value={form.price || 0}
                      onChange={(evt) => {
                        if (evt.currentTarget.value === '<empty string>') return;

                        if (Number(evt.currentTarget.value) <= 0) return;

                        onChange({ ...form, price: Number(evt.currentTarget.value)})
                      }}
                      error={formValidation.price === false ? true : false}
                      fullWidth
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader
                    title={(
                      <Typography>
                        Rate Auto Update Price
                      </Typography>
                    )}
                  />
                  <CardContent>
                    <Select
                      size='small'
                      value={form.autoUpdatePrice ? Number(form.autoUpdatePrice) : 0}
                      onChange={(evt) => onChange({ ...form, autoUpdatePrice: Boolean(Number(evt.target.value))})}
                    >
                      <MenuItem value={1}>Active</MenuItem>
                      <MenuItem value={0}>Disabled</MenuItem>
                    </Select>
                  </CardContent>
                </Card>
              </Stack>
              {!edit && (
                <Stack
                  flex={1}
                  direction='column'
                  justifyContent='flex-start'
                  gap={3}
                >
                  <Card>
                    <CardHeader
                      title={(
                        <Typography>
                          Rate Client Currency Buy
                        </Typography>
                      )}
                    />
                    <CardContent>
                      {currencyList && (
                        <Select
                          value={form.clientCurrencyBuyId || undefined}
                          onChange={(evt) => {
                            const currency = currencyList.find((value) => value.id === Number(evt.target.value));

                            if (currency) {
                              onChange({ ...form, clientCurrencyBuyId: currency.id });
                            }
                          }}
                          disabled={edit || false}
                          error={formValidation.clientCurrencyBuy === false ? true : false}
                          fullWidth
                        >
                          {currencyList.map((row, key) => (
                            <MenuItem key={key} value={row.id}>{`${row.label} - ${row.symbol}`}</MenuItem>
                          ))}
                        </Select>
                      )}
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader
                      title={(
                        <Typography>
                          Rate Client Currency Sell
                        </Typography>
                      )}
                    />
                    <CardContent>
                      {currencyList && (
                        <Select
                          value={form.clientCurrencySellId || undefined}
                          onChange={(evt) => {
                            const currency = currencyList.find((value) => value.id === Number(evt.target.value));

                            if (currency) {
                              onChange({ ...form, clientCurrencySellId: currency.id });
                            }
                          }}
                          disabled={(edit) || (form.clientCurrencyBuyId !== undefined ? false : true)}
                          error={formValidation.clientCurrencySell === false ? true : false}
                          fullWidth
                        >
                          {currencyList.filter((currency) => {
                            const buyCurrency = currencyList.find((_) => _.id === form.clientCurrencyBuyId)

                            if (buyCurrency) {
                              const notAllowedIds = [
                                buyCurrency.id,
                                ...buyCurrency.buyRates.map((_) => _.clientCurrencySell.id),
                              ];

                              if (!notAllowedIds.includes(currency.id)) return currency;
                            }

                            return null;
                          }).map((row, key) => (
                            <MenuItem key={key} value={row.id}>{`${row.label} - ${row.symbol}`}</MenuItem>
                          ))}
                        </Select>
                      )}
                    </CardContent>
                  </Card>
                </Stack>
              )}
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}