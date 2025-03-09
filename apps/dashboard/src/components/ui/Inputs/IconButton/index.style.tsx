import { styled, IconButton } from "@mui/material";

export const MuiIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'variant'
    && prop !== 'enableTooltip'
    && prop !== 'enableBadge'
    && prop !== 'hoverColor'
})<{
  variant?: 'contained' | 'outlined';
  enableTooltip?: any;
  enableBadge?: any;
  hoverColor?: string;
}>(({ theme }) => ({
  fontSize: '10em',

  variants: [
    {
      props: { variant: 'contained', color: 'default' },
      style: {
        color: theme.palette.text.primary,
        background: theme.palette.action.focus,
        '&:hover': {
          background: theme.palette.action.disabled,
        }
      }
    },
    {
      props: { variant: 'contained', color: 'inherit' },
      style: {
        color: theme.palette.text.primary,
        background: theme.palette.action.focus,
        '&:hover': {
          background: theme.palette.action.disabled,
        }
      }
    },
    {
      props: { variant: 'contained', color: 'info' },
      style: {
        color: theme.palette.background.paper,
        background: theme.palette.info.main,
        '&:hover': {
          background: theme.palette.info.dark,
        }
      }
    },
    {
      props: { variant: 'contained', color: 'primary' },
      style: {
        color: theme.palette.background.paper,
        background: theme.palette.primary.main,
        '&:hover': {
          background: theme.palette.primary.dark,
        }
      }
    },
    {
      props: { variant: 'contained', color: 'secondary' },
      style: {
        color: theme.palette.background.paper,
        background: theme.palette.secondary.main,
        '&:hover': {
          background: theme.palette.secondary.dark,
        }
      }
    },
    {
      props: { variant: 'contained', color: 'success' },
      style: {
        color: theme.palette.background.paper,
        background: theme.palette.success.main,
        '&:hover': {
          background: theme.palette.success.dark,
        }
      }
    },
    {
      props: { variant: 'contained', color: 'warning' },
      style: {
        color: theme.palette.background.paper,
        background: theme.palette.warning.main,
        '&:hover': {
          background: theme.palette.warning.dark,
        }
      }
    },
    {
      props: { variant: 'contained', color: 'error' },
      style: {
        color: theme.palette.background.paper,
        background: theme.palette.error.main,
        '&:hover': {
          background: theme.palette.error.dark,
        }
      }
    },
  ]
}))