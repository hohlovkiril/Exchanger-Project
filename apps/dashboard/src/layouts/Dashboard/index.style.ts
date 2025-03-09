import { Theme, CSSObject, styled, Box } from "@mui/material";
import { DRAWER_CLOSED_WIDTH, DRAWER_OPEN_WIDTH } from "../../common/constants";

export const OPENED_MIXIN = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

export const CLOSED_MIXIN = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
});

export const LayoutContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  backgroundColor: theme.palette.background.paper,
  // backgroundImage: 'url("https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?cs=srgb&dl=pexels-eberhardgross-691668.jpg&fm=jpg")',
  // backgroundSize: 'cover',
  '& .MuiTypography-root.page__title': {
    fontSize: 'clamp(22px, 2vw, 28px)',
  }
}))

export const DesktopPageContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open'
})<{ open: boolean }>(({ theme, open }) => ({
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  background: 'transperent',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  marginTop: 64,
  height: 'calc(100vh - 64px)',
  width: `calc(100vw - ${open ? DRAWER_OPEN_WIDTH : DRAWER_CLOSED_WIDTH}px)`,
  boxSizing: 'border-box',

  '& .MuiContainer-root': {
    paddingTop: '1em',
    paddingBottom: '1em',
  }
}))

export const MobilePageContainer = styled(Box)(({ theme }) => ({
  // background: theme.palette.background.default,
  background: 'transperent',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1em',
  overflowY: 'auto',
  marginTop: 64,
  height: 'calc(100vh - 64px)',
  width: '100vw',
  boxSizing: 'border-box',

  '@media screen and (max-width: 600px)': {
    marginTop: 56,
    height: 'calc(100vh - 56px)',
  }
}))