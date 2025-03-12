import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import {
  Button,
  IconButton,
  TextField,
} from '../../../components/ui/Inputs';
import {
  Box,
  Stack,
  Container,
} from '../../../components/ui/Surfaces';
import { RateDataType } from "../../../common/types";
import { useAuth } from "../../../providers/auth.provider";
import { DataView } from "../../../components/widgets";
import { IDataViewColumnsConfig } from "../../../components/widgets/DataView/common";
import { InputAdornment } from "@mui/material";
import { Chip } from "../../../components/ui/DataDisplay";
import { RateApi } from '../../../services/api';
import { useTranslation } from 'react-i18next';

export default function RateListPage() {

  /** Context */
  
  const { t } = useTranslation();
  const { token } = useAuth();

  /** States */

  const [query, setQuery] = useState<string>('');
  const [data, setData] = useState<RateDataType[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  /** Effects */

  useEffect(() => {
    if (!token) return;

    if (loaded) return;

    const timer = setTimeout(() => {
      RateApi.getMany(token)
        .then((data) => setData(data))
        .finally(() => setLoaded(true));
    }, 250)

    return () => clearTimeout(timer);
  }, [token, loaded])

  /** Vars */

  const cols: IDataViewColumnsConfig<RateDataType>[] = [
    {
      id: 'id',
      label: '#',
      align: 'center',
    },
    {
      id: 'id',
      label: 'Rate info',
      align: 'center',
      renderCell: (row) => (
        <Chip
          label={`${row.symbol}`}
        />
      )
    },
    {
      id: 'price',
      label: 'Price',
      align: 'center',
      renderCell: (row) => (
        <Chip
          label={`${row.price} ${row.clientCurrencySell.symbol}`}
        />
      )
    },
    {
      id: 'status',
      label: 'Status',
      align: 'center',
      renderCell: (row) => (
        <Chip
          color={row.status ? 'success' : 'error'}
          label={row.status ? 'Active' : 'Disabled'}
        />
      )
    },
    {
      id: 'autoUpdatePrice',
      label: 'API Auto Update Price',
      align: 'center',
      renderCell: (row) => (
        <Chip
          color={row.autoUpdatePrice ? 'success' : 'error'}
          label={row.autoUpdatePrice ? 'Active' : 'Disabled'}
        />
      )
    },
    {
      id: 'id',
      label: 'Actions',
      align: 'center',
      disableOrder: true,
      renderCell: (row) => (
        <Link to={`/rates/edit/${row.id}`}>
          <IconButton>
            <RemoveRedEyeIcon />
          </IconButton>
        </Link>
      ),
    }
  ]

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
                  <Link to="/rates/create">
                    <Button
                      variant='contained'
                      color='primary'
                      startIcon={<AddIcon />}
                    >
                      {t('page__rate_list_btn_add', { defaultValue: 'Add Rate' })}
                    </Button>
                  </Link>
                  <Button
                    variant='contained'
                    color='primary'
                    startIcon={<RestartAltIcon />}
                    onClick={() => setLoaded(false)}
                  >
                    {t('page__rate_list_btn_refresh', { defaultValue: 'Refresh' })}
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