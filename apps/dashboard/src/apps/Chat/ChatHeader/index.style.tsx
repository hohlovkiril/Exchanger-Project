import { alpha, AppBar, styled } from "@mui/material";
import {
  OPENED_MIXIN,
  CLOSED_MIXIN,
} from '../index.style';
import { CHAT_APP_DRAWER_WIDTH } from "../common/constants";
import { MEDIA_QUERIES } from "../../../common/constants";

export const ChatHeaderBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'drawerOpen'
    && prop !== 'onDrawerToggle'
})<{
  drawerOpen: boolean;
}>(({ theme }) => ({
  variants: [
    {
      props: { drawerOpen: true },
      style: {
        ...OPENED_MIXIN,
        width: `calc(100% - ${CHAT_APP_DRAWER_WIDTH})`,
        marginLeft: CHAT_APP_DRAWER_WIDTH,
        [`@media screen and (max-width: ${MEDIA_QUERIES.smallLaptop})`]: {
          width: '100%',
          marginLeft: 0,
        }
      },
    },
    {
      props: { drawerOpen: false },
      style: {
        ...CLOSED_MIXIN,
        width: '100%',
        marginLeft: 0,
      }
    }
  ],
    boxShadow: 'none',
    border: `1px solid ${alpha(theme.palette.mode === 'light' 
      ? theme.palette.common.black
      : theme.palette.common.white, .1)}`,
    borderTop: 'none',
    borderRight: 'none',
    background: alpha(theme.palette.background.paper, .75),
    position: 'absolute'
}))