import { useEffect, useState } from "react";
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
import { CurrencyDataType } from "../../../common/types";
import { useAuth } from "../../../providers/auth.provider";
import { DataView } from "../../../components/widgets";
import { IDataViewColumnsConfig } from "../../../components/widgets/DataView/common";
import { InputAdornment } from "@mui/material";
import { Avatar, Chip } from "../../../components/ui/DataDisplay";
import { CurrencyApi } from "../../../services/api";
import { CurrencyType } from "@shared/enums";
import { useTranslation } from "react-i18next";

export default function CurrencyListPage() {

  /** Context */

  const { t } = useTranslation();
  const { token } = useAuth();

  /** States */

  const [query, setQuery] = useState<string>('');
  const [data, setData] = useState<CurrencyDataType[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  /** Effects */

  useEffect(() => {
    if (!token) return;

    if (loaded) return;

    const timer = setTimeout(() => {
      CurrencyApi.getMany(token)
        .then((data) => setData(data))
        .finally(() => setLoaded(true));
    }, 250)

    return () => clearTimeout(timer);
  }, [token, loaded])

  /** Vars */

  const cols: IDataViewColumnsConfig<CurrencyDataType>[] = [
    {
      id: 'id',
      label: '#',
      align: 'center',
    },
    {
      id: 'label',
      label: 'Currency info',
      align: 'left',
      renderCell: (row) => (
        <Stack
          direction='row'
          justifyContent='flex-start'
          alignItems='center'
          gap={1}
        >
          <Avatar>{row.label.slice(0, 1)}</Avatar>
          {row.label}
          <Chip
            label={row.type === CurrencyType.CRYPTO ? 'Crypto' : 'Fiat'}
          />
        </Stack>
      )
    },
    {
      id: 'symbol',
      label: 'Symbol',
      align: 'center',
      renderCell: (row) => (
        <Chip
          label={row.symbol}
        />
      )
    },
    {
      id: 'apiSymbol',
      label: 'API Symbol',
      align: 'center',
      renderCell: (row) => (
        <Chip
          label={row.apiSymbol}
        />
      )
    },
    {
      id: 'minimal',
      label: 'Minimal',
      align: 'right',
    },
    {
      id: 'reserve',
      label: 'Reserve',
      align: 'right',
    },
    {
      id: 'id',
      label: 'Actions',
      align: 'center',
      disableOrder: true,
      renderCell: (row) => (
        <Link to={`/currency/edit/${row.id}`}>
          <IconButton>
            <RemoveRedEyeIcon />
          </IconButton>
        </Link>
      ),
    }
  ];

  const rows = query ? data.filter((value) => {
    if (value.label.toLocaleLowerCase().includes(query.toLocaleLowerCase())) {
      return value;
    } else if (value.symbol.toLocaleLowerCase().includes(query.toLocaleLowerCase())) {
      return value;
    } else {
      return null;
    }
  }) : data;

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
                  <Link to="/currency/create">
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