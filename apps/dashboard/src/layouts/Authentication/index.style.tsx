import { Box, styled } from "@mui/material";

export const LayoutContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  background: theme.palette.background.default,
}))