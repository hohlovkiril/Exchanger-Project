import { styled, alpha, Drawer } from '@mui/material';
import {
  OPENED_MIXIN,
  CLOSED_MIXIN,
} from '../index.style';
import {
  CHAT_APP_DRAWER_WIDTH,
} from '../common/constants'
import { MEDIA_QUERIES } from '../../../common/constants';

export const ChatDrawerContainer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})<{
  open?: boolean
}>(({ theme }) => ({
  variants: [
    {
      props: { open: true },
      style: {
        ...OPENED_MIXIN(theme),
        width: CHAT_APP_DRAWER_WIDTH,
        display: 'block',
        '& .MuiDrawer-paper': {
          ...OPENED_MIXIN(theme),
          width: CHAT_APP_DRAWER_WIDTH,
        },

        [`@media screen and (max-width: ${MEDIA_QUERIES.smallLaptop})`]: {
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          background: 'rgba(0, 0, 0, .25)'
        }
      }
    }, {
      props: { open: false },
      style: {
        ...CLOSED_MIXIN(theme),
        width: 0,
        display: 'none',
        "& .MuiDrawer-paper": {
          ...CLOSED_MIXIN(theme),
          width: 0,
          display: 'none'
        },
      },
    }
  ],
  position: 'absolute',
  height: '100%',
  boxShadow: 'none',
  borderRight: `1px solid ${alpha(theme.palette.mode === 'light' 
    ? theme.palette.common.black
    : theme.palette.common.white, .1)}`,
  zIndex: 9999,

  "& .MuiDrawer-paper": {
    position: 'absolute',
  },

  [`@media screen and (max-width: ${MEDIA_QUERIES.smallLaptop})`]: {
    position: 'fixed',

    "& .MuiDrawer-paper": {
      position: 'fixed',
    },
  }
}))