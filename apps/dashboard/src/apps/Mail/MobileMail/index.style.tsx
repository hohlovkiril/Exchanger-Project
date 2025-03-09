import { styled } from "@mui/material";
import { Card } from "../../../components/ui/Surfaces";

export const MobileMailCard = styled(Card)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  background: theme.palette.mode === 'light'
    ? 'rgb(233, 237, 240)'
    : 'rgb(59, 59, 61)',

  '& .MuiCardHeader-root': {
    padding: '10px',
  },
  '& .MuiCardContent-root': {
    flex: 1,
    margin: '1em',
    padding: 0,
    paddingBottom: '0!important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: '16px',
    background: theme.palette.background.paper,
  }
}))