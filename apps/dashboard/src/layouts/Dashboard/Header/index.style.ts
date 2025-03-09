import { alpha, AppBar, styled } from "@mui/material";
import { CLOSED_MIXIN, OPENED_MIXIN } from "../index.style";
import { DRAWER_CLOSED_WIDTH, DRAWER_OPEN_WIDTH } from "../../../common/constants";

export const DesktopHeaderContainer = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ theme }) => ({
  ...CLOSED_MIXIN(theme),
  zIndex: theme.zIndex.drawer - 1,
  background: alpha(theme.palette.background.paper, .25),
  backdropFilter: 'blur(4px)',
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...OPENED_MIXIN(theme),
        marginLeft: DRAWER_OPEN_WIDTH,
        width: `calc(100% - ${DRAWER_OPEN_WIDTH}px)`,
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...CLOSED_MIXIN(theme),
        marginLeft: DRAWER_CLOSED_WIDTH,
        width: `calc(100% - ${DRAWER_CLOSED_WIDTH}px)`,
      },
    },
  ],
  boxShadow: 'none',
  borderBottom: '1px solid',
  borderColor: theme.palette.mode === 'light'
   ? 'rgba(0, 0, 0, 0.12)'
   : 'rgba(255, 255, 255, .12)'
}))

export const MobileHeaderContainer = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer - 1,
  background: alpha(theme.palette.background.paper, .25),
  backdropFilter: 'blur(10px)',
}))