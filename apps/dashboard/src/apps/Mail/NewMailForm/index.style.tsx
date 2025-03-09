import { styled } from "@mui/material";
import { Card } from "../../../components/ui/Surfaces";

export const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'type'
})<{
  type: 'modal' | 'floating';
}>(({ theme }) => ({
  variants: [
    {
      props: { type: 'modal' },
      style: {
        margin: '1em',
        width: 'calc(100vw - 2em)',
        height: 'calc(100vh - 2em)'
      }
    },
    {
      props: { type: 'floating' },
      style: {
        position: 'fixed',
        bottom: '5%',
        right: '5%',
        width: '500px',
        maxWidth: '90vw',
      }
    }
  ],
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.background.paper,
  '& .MuiCardHeader-root': {
    background: theme.palette.mode === 'light'
      ? 'rgb(220, 220, 220)'
      : 'rgb(48, 48, 48)'
  },
  '& .MuiInputBase-root.new__mail_to, .MuiInputBase-root.new__mail_subject': {
    padding: '.5em 1em .5em 1em',
    '&::before': {
      display: 'none',
    },
    '&::after': {
      display: 'none',
    }
  },
  '& .MuiCardContent-root': {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '.75em',
  }
}))