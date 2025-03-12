import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";

import { InputAdornment } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import { useAuth } from "../../../providers/auth.provider";
import { OrderDataType } from "../../../common/types";
import { IDataViewColumnsConfig } from "../../../components/widgets/DataView/common";
import { Box, Container, Stack } from "../../../components/ui/Surfaces";
import { DataView } from "../../../components/widgets";
import { Button, IconButton, TextField } from "../../../components/ui/Inputs";
import { OrderApi } from "../../../services";
import { Chip } from "../../../components/ui/DataDisplay";
import { OrderStatus } from "@shared/enums";

export default function OrderListPage() {

  /** Context */

  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { token } = useAuth();

  /** States */

  const [query, setQuery] = useState<string>('');
  const [data, setData] = useState<OrderDataType[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  /** Effects */

  useEffect(() => {
    if (!token) return;

    if (loaded) return;

    const timer = setTimeout(() => {
      OrderApi.getMany(token)
        .then((data) => setData(data))
        .catch((err) => enqueueSnackbar(err.message, { variant: 'warning' }))
        .finally(() => setLoaded(true));
    }, 250);

    return () => clearTimeout(timer);
  }, [
    token,
    loaded,
    enqueueSnackbar,
  ])

  /** Vars */

  const cols: IDataViewColumnsConfig<OrderDataType>[] = [
    {
      id: 'id',
      label: '#',
      align: 'center',
    },
    {
      id: 'uuid',
      label: 'Order ID',
      align: 'center',
      renderCell: (row) => (
        <Chip
          label={row.uuid}
        />
      )
    },
    {
      id: 'status',
      label: 'Status',
      align: 'center',
      renderCell: (row) => (
        <Chip
          label={OrderStatus[row.status].replaceAll('_', ' ')}
        />
      )
    },
    {
      id: 'clientBuy',
      label: 'Buy',
      align: 'center',
      renderCell: (row) => {
        const symbol = JSON.parse(row.rateCacheData)
          .clientCurrencyBuy.symbol;

        return (
          <Chip
            label={`${row.clientBuy} ${symbol}`}
          />
        )
      }
    },
    {
      id: 'clientSell',
      label: 'Sell',
      align: 'center',
      renderCell: (row) => {
        const symbol = JSON.parse(row.rateCacheData)
          .clientCurrencySell.symbol;

        return (
          <Chip
            label={`${row.clientSell} ${symbol}`}
          />
        )
      }
    },
    {
      id: 'id',
      label: 'Actions',
      align: 'center',
      disableOrder: true,
      renderCell: (row) => (
        <Link to={`/orders/edit/${row.id}`}>
          <IconButton>
            <RemoveRedEyeIcon />
          </IconButton>
        </Link>
      ),
    }
  ];

  const rows = data;

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >

        {data && (
          <DataView
            columns={cols}
            rows={rows}
            toolbar={(
              <Box
                sx={{
                  padding: '1em',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  boxSizing: 'border-box'
                }}
              >
                
                {/** Search */}
                <TextField
                  variant='outlined'
                  placeholder={`Search ${data.length} records...`}
                  size='small'
                  value={query}
                  onChange={(evt) => setQuery(evt.currentTarget.value)}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      )
                    }
                  }}
                />

                {/** Actions */}
                <Stack
                  direction='row'
                  justifyContent='flex-end'
                  alignItems='center'
                  gap={1}
                >
                  <Link to="/order/create">
                    <Button
                      variant='contained'
                      color='primary'
                      startIcon={<AddIcon />}
                    >
                      {t('page__currency_list_btn_add', { defaultValue: 'Add Currency' })}
                    </Button>
                  </Link>
                  <Button
                    variant='contained'
                    color='primary'
                    startIcon={<RestartAltIcon />}
                    onClick={() => setLoaded(false)}
                  >
                    {t('page__currency_list_btn_refresh', { defaultValue: 'Refresh' })}
                  </Button>
                </Stack>

              </Box>
            )}
            selected
            loading={!loaded}
          />
        )}

      </Container>
    </>
  )
}