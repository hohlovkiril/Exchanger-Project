import { Avatar, styled } from "@mui/material";

export const MuiAvatar = styled(Avatar, {
  shouldForwardProp: (prop) => prop !== 'type'
    && prop !== 'color'
    && prop !== 'enableTooltip'
    && prop !== 'enableBadge'
})<{
  type?: 'filled' | 'outlined';
  color?: 'default' | 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  enableTooltip?: any;
  enableBadge?: any;
}>(({ theme }) => ({
  variants: [
    {
      props: { type: 'filled', color: 'default' },
      style: {
        color: theme.palette.mode === 'light'
          ? theme.palette.common.black
          : theme.palette.common.white,
        background: theme.palette.background.default,
      },
    },
    {
      props: { type: 'filled', color: 'inherit' },
      style: {
        color: theme.palette.mode === 'light'
          ? theme.palette.common.white
          : theme.palette.common.black,
        background: theme.palette.mode === 'light'
          ? 'rgb(125, 125, 125)'
          : 'rgb(225, 225, 225)'
      }
    },
    {
      props: { type: 'filled', color: 'primary' },
      style: {
        color: theme.palette.common.white,
        background: theme.palette.mode === 'light'
          ? theme.palette.primary.light
          : theme.palette.primary.dark
      }
    },
    {
      props: { type: 'filled', color: 'info' },
      style: {
        color: theme.palette.common.white,
        background: theme.palette.mode === 'light'
          ? theme.palette.primary.light
          : theme.palette.primary.dark
      }
    },
    {
      props: { type: 'filled', color: 'secondary' },
      style: {
        color: theme.palette.common.white,
        background: theme.palette.mode === 'light'
          ? theme.palette.secondary.light
          : theme.palette.secondary.dark
      }
    },
    {
      props: { type: 'filled', color: 'success' },
      style: {
        color: theme.palette.common.white,
        background: theme.palette.mode === 'light'
          ? theme.palette.success.light
          : theme.palette.success.dark
      }
    },
    {
      props: { type: 'filled', color: 'warning' },
      style: {
        color: theme.palette.common.black,
        background: theme.palette.mode === 'light'
          ? theme.palette.warning.light
          : theme.palette.warning.dark
      }
    },
    {
      props: { type: 'filled', color: 'error' },
      style: {
        color: theme.palette.common.black,
        background: theme.palette.mode === 'light'
          ? theme.palette.error.light
          : theme.palette.error.dark
      }
    },
    {
      props: { type: 'outlined' },
      style: {
        background: 'transparent',
      }
    },
    {
      props: { type: 'outlined', color: 'default' },
      style: {
        color: theme.palette.mode === 'light'
          ? theme.palette.common.black
          : theme.palette.common.white,
        border: `1px solid ${theme.palette.background.default}`,
      },
    },
    {
      props: { type: 'outlined', color: 'inherit' },
      style: {
        color: theme.palette.mode === 'light'
          ? 'rgb(125, 125, 125)'
          : 'rgb(225, 225, 225)',
        border: `1px solid ${theme.palette.mode === 'light'
          ? 'rgb(125, 125, 125)'
          : 'rgb(225, 225, 225)'}`,
      }
    },
    {
      props: { type: 'outlined', color: 'primary' },
      style: {
        color: theme.palette.mode === 'light'
          ? theme.palette.primary.light
          : theme.palette.primary.dark,
        border: '1px solid',
        borderColor: theme.palette.mode === 'light'
          ? theme.palette.primary.light
          : theme.palette.primary.dark
      }
    },
    {
      props: { type: 'outlined', color: 'info' },
      style: {
        color: theme.palette.mode === 'light'
          ? theme.palette.primary.light
          : theme.palette.primary.dark,
        border: '1px solid',
        borderColor: theme.palette.mode === 'light'
          ? theme.palette.primary.light
          : theme.palette.primary.dark
      }
    },
    {
      props: { type: 'outlined', color: 'secondary' },
      style: {
        color: theme.palette.mode === 'light'
          ? theme.palette.secondary.light
          : theme.palette.secondary.dark,
        border: '1px solid',
        borderColor: theme.palette.mode === 'light'
          ? theme.palette.secondary.light
          : theme.palette.secondary.dark
      }
    },
    {
      props: { type: 'outlined', color: 'success' },
      style: {
        color: theme.palette.mode === 'light'
          ? theme.palette.success.light
          : theme.palette.success.dark,
        border: '1px solid',
        borderColor: theme.palette.mode === 'light'
          ? theme.palette.success.light
          : theme.palette.success.dark
      }
    },
    {
      props: { type: 'outlined', color: 'warning' },
      style: {
        color: theme.palette.mode === 'light'
          ? theme.palette.warning.light
          : theme.palette.warning.dark,
        border: '1px solid',
        borderColor: theme.palette.mode === 'light'
          ? theme.palette.warning.light
          : theme.palette.warning.dark
      }
    },
    {
      props: { type: 'outlined', color: 'error' },
      style: {
        color: theme.palette.mode === 'light'
          ? theme.palette.error.light
          : theme.palette.error.dark,
        border: '1px solid',
        borderColor: theme.palette.mode === 'light'
          ? theme.palette.error.light
          : theme.palette.error.dark
      }
    },
  ],
}))