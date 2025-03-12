import { useEffect, useState } from "react"

import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import { UserType } from "../../../common/types";
import { useAuth } from "../../../providers/auth.provider";
import { UserApi } from "../../../services";
import { IDataViewColumnsConfig } from "../../../components/widgets/DataView/common";
import { Box, Container, Stack } from "../../../components/ui/Surfaces";
import { DataView } from "../../../components/widgets";
import { Button, IconButton, TextField } from "../../../components/ui/Inputs";
import { Link } from "react-router-dom";
import { InputAdornment } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";

export default function UserListPage() {

  /** Context */

  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { token } = useAuth();

  /** States */

  const [query, setQuery] = useState<string>('');
  const [data, setData] = useState<UserType[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  /** Effects */

  useEffect(() => {
    if (!token) return;

    if (loaded) return;

    const timer = setTimeout(() => {
      UserApi.getMany(token)
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

  const cols: IDataViewColumnsConfig<UserType>[] = [
    {
      id: 'id',
      label: '#',
      align: 'center',
    },
    {
      id: 'fullName',
      label: 'User Info',
      align: 'left',
    },
    {
      id: 'username',
      label: 'Username',
      align: 'left',
    },
    {
      id: 'email',
      label: 'Email',
      align: 'left',
    },
    {
      id: 'phone',
      label: 'Phone',
      align: 'left',
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
  ]

  const rows = data;

  return (
    <Container
      maxWidth='xl'
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
          selected
          loading={!loaded}
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
                <Link to="/user/create">
                  <Button
                    variant='contained'
                    color='primary'
                    startIcon={<AddIcon />}
                  >
                    {t('page__user_list_btn_add', { defaultValue: 'Add User' })}
                  </Button>
                </Link>
                <Button
                  variant='contained'
                  color='primary'
                  startIcon={<RestartAltIcon />}
                  onClick={() => setLoaded(false)}
                >
                  {t('page__user_list_btn_refresh', { defaultValue: 'Refresh' })}
                </Button>
              </Stack>

            </Box>
          )}
        />
      )}
    </Container>
  )
}