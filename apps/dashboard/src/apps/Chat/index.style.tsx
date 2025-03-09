import { alpha, CSSObject, styled, Theme } from "@mui/material";

import {
  Box,
} from '../../components/ui/Surfaces';

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

export const ChatContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  boxSizing: 'border-box',
  position: 'relative',
  border: `1px solid ${alpha(theme.palette.mode === 'light' 
    ? theme.palette.common.black
    : theme.palette.common.white, .1)}`,
  borderRadius: '4px',
  boxShadow: theme.shadows[6],
}))

