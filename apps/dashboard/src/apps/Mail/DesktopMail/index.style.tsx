import { styled } from "@mui/material";
import { Card } from "../../../components/ui/Surfaces";

export const DesktopMailCard = styled(Card)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.background.default,

  '& .MuiCardContent-root': {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '1em',
  }
}))