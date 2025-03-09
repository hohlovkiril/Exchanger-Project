import { AppBarProps, Stack, Toolbar } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import {
  IconButton,
} from '../../../components/ui/Inputs'
import {
  Avatar,
  Typography,
} from "../../../components/ui/DataDisplay";
import { ChatHeaderBar } from "./index.style";
import formatLastOnlineDate from "../utils/formatLastOnlineDate";

interface IChatHeader {
  drawerOpen: boolean;
  onDrawerToggle: () => void;
}

export default function ChatHeader(props: IChatHeader & AppBarProps) {

  return (
    <>
      <ChatHeaderBar
        {...props}
      >
        <Toolbar>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            gap={1}
            sx={{ width: '100%', }}
          >

            {/** */}
            <IconButton
              onClick={props.onDrawerToggle}
            >
              {props.drawerOpen ? (
                <MenuOpenIcon />
              ) : (
                <MenuIcon />
              )}
            </IconButton>


            {/**  */}
            {false && (
              <Stack
                direction='row'
                justifyContent='flex-start'
                alignItems='center'
                gap={1}
                sx={{ marginRight: 'auto', }}
              >
                <Avatar
                  src=""
                />
                <Stack
                  direction='column'
                  justifyContent='center'
                >
                  <Typography
                    variant='subtitle1'
                  >
                    Title
                  </Typography>
                  <Typography
                    variant='subtitle2'
                    color='textDisabled'
                  >
                    {formatLastOnlineDate(new Date('02.22.2025 01:00'))}
                  </Typography>
                </Stack>
              </Stack>
            )}

            <Stack
              direction='row'
              justifyContent='flex-end'
              alignItems="center"
              gap={1}
            >
              <IconButton
                disabled
              >
                <InfoOutlinedIcon />
              </IconButton>
              <IconButton
                disabled
              >
                <MoreVertOutlinedIcon />
              </IconButton>
            </Stack>

          </Stack>
        </Toolbar>
      </ChatHeaderBar>
    </>
  )
}