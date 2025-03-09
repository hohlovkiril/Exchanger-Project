import { alpha, styled, Typography } from "@mui/material";

export const MuiTypography = styled(Typography)(({ theme }) => ({
  variants: [
    {
      props: { color: undefined },
      style: {
        color: theme.palette.mode === 'light'
          ? theme.palette.common.black
          : theme.palette.common.white
      },
    },
    {
      props: { color: 'primary' },
      style: {
        color: theme.palette.mode === 'light'
          ? theme.palette.primary.dark
          : theme.palette.primary.light
      }
    },
    {
      props: { color: 'info' },
      style: {
        color: theme.palette.mode === 'light'
          ? theme.palette.info.dark
          : theme.palette.info.light
      }
    },
    {
      props: { color: 'secondary' },
      style: {
        color: theme.palette.mode === 'light'
          ? theme.palette.secondary.dark
          : theme.palette.secondary.light
      }
    },
    {
      props: { color: 'success' },
      style: {
        color: theme.palette.mode === 'light'
          ? theme.palette.success.dark
          : theme.palette.success.light
      }
    },
    {
      props: { color: 'warning' },
      style: {
        color: theme.palette.mode === 'light'
          ? theme.palette.warning.dark
          : theme.palette.warning.light
      }
    },
    {
      props: { color: 'error' },
      style: {
        color: theme.palette.mode === 'light'
          ? theme.palette.error.dark
          : theme.palette.error.light
      }
    },
    {
      props: { color: 'textDisabled' },
      style: {
        color: 'rgb(125, 125, 125)'
      }
    },
    {
      props: { color: 'textPrimary' },
      style: {
        color: 'blue'
      }
    },
    {
      props: { color: 'textSecondary' },
      style: {
        color: theme.palette.mode === 'light'
          ? alpha(theme.palette.common.black, .75)
          : alpha(theme.palette.common.white, .75)
      }
    },
  ]
}))