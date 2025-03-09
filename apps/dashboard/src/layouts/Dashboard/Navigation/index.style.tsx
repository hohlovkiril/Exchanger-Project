import { alpha, Drawer, styled } from "@mui/material";
import { CLOSED_MIXIN, OPENED_MIXIN } from "./../index.style";
import { DRAWER_CLOSED_WIDTH, DRAWER_OPEN_WIDTH } from "../../../common/constants";

export const NavigationContainer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ theme }) => ({
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...OPENED_MIXIN(theme),
        width: DRAWER_OPEN_WIDTH,
        "& .MuiDrawer-paper": {
          ...OPENED_MIXIN(theme),
          width: DRAWER_OPEN_WIDTH,
        },
        "& .MuiListSubheader-root": {
          opacity: 1,
          display: "block",
        },
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...CLOSED_MIXIN(theme),
        width: DRAWER_CLOSED_WIDTH,
        "& .MuiDrawer-paper": {
          ...CLOSED_MIXIN(theme),
          width: DRAWER_CLOSED_WIDTH,
        },
        "& .MuiListSubheader-root": {
          opacity: 0,
          display: "none",
        },
      },
    },
  ],

  flex: 1,
  overflowY: 'auto',
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  "& .MuiDrawer-paper": {
    background: alpha(theme.palette.background.paper, .25),
    backdropFilter: 'blur(4px)',
  },
  "& .MuiStack-root": {
    padding: '.5em',
  },
  "& .navigation__separator": {
    marginTop: '.25em',
    marginBottom: '.25em'
  }
}))

export const NavigationHeaderContainer = styled('div', {
  shouldForwardProp: (props) => props !== 'open'
})<{
  open: boolean
}>(({ theme, open }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: open ? 'flex-start' : 'center',
  gap: '.5em',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,

  '& .MuiTypography-root': {
    fontSize: 'clamp(16px, 4vw, 20px)',
    fontWeight: '500'
  }
}))