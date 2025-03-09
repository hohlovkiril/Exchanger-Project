import { styled } from "@mui/material";
import { ListItemButton } from "../../../components/ui/DataDisplay";
import { Card } from "../../../components/ui/Surfaces";

export const StyledMailInbox = styled(Card)(({ theme }) => ({
  flex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  borderRadius: '16px',
  background: theme.palette.background.paper,
  padding: '1em',
  maxHeight: '500px',
  overflowY: 'auto',

  '& .mail__inbox_placeholder': {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '.25em',

    '& img': {
      marginBottom: '1em',
      width: '25%',
    },
  }
}))

export const StyledMailConversation = styled(ListItemButton)(({ theme }) => ({
  borderRadius: '16px',
  
  '& .conversation__last_date': {
    textAlign: 'end',

    '& .MuiListItemText-primary': {
      color: 'rgb(125, 125, 125)',
      fontSize: '14px',
    }
  }
}))