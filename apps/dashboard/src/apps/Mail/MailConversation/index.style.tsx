import { styled } from "@mui/material";
import { Card } from "../../../components/ui/Surfaces";

export const StyledMailConversation = styled(Card)(({ theme }) => ({
  flex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  background: theme.palette.background.paper,
  padding: '1em',

  '& .mail__conversation_header': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: '.25em',
  },
  
  '& .mail__conversation_placeholder': {
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