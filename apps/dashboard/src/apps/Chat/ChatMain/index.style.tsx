import { styled, alpha } from '@mui/material';

import {
  Box,
  Stack,
} from '../../../components/ui/Surfaces';
import {
  OPENED_MIXIN,
  CLOSED_MIXIN,
} from '../index.style';
import {
  CHAT_APP_DRAWER_WIDTH,
} from '../common/constants';

export const ChatMainContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !=='drawerOpen'
    && prop !== 'selectedChat'
    && prop !== 'messages'
})<{
  drawerOpen?: boolean;
  selectedChat?: any;
  messages?: any;
}>(({ theme }) => ({
  variants: [
    {
      props: { drawerOpen: true },
      style: {
        ...OPENED_MIXIN(theme),
        width: `calc(100% - ${CHAT_APP_DRAWER_WIDTH})`,
        marginLeft: CHAT_APP_DRAWER_WIDTH,
      }
    }, {
      props: { drawerOpen: false },
      style: {
        ...CLOSED_MIXIN(theme),
        width: '100%',
        marginLeft: '0'
      }
    }
  ],
  display: 'flex',
  flexDirection: 'column',
  marginTop: '64px',
  height: 'calc(100% - 64px)',
}))

export const ChatContentContainer = styled(Box)(({ theme }) => ({
  flex: 3,
  overflowY: 'auto',
  backgroundColor: alpha(theme.palette.background.paper, .25),
  maxHeight: 'calc(100vh - 200px)'
}))

export const ChatMessageListContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '2em',
}))

export const ChatFormContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: '18px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1em',
  background: alpha(theme.palette.background.paper, .75),
  border: `1px solid ${alpha(theme.palette.mode === 'light' 
    ? theme.palette.common.black
    : theme.palette.common.white, .1)}`,
  borderLeft: 'none',
  borderRight: 'none',
  borderBottom: 'none',
  maxHeight: '200px',
}))