import { alpha, styled } from "@mui/material";
import { ListItemButton } from "../../../components/ui/DataDisplay";

export const StyledCategoryButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active'
})<{
  active: boolean;
}>(({ theme }) => ({
  variants: [
    {
      props: { active: true },
      style: {
        '& span': {
          color: theme.palette.mode === 'light'
            ? theme.palette.common.black
            : theme.palette.common.white,
        }
      }
    },
    {
      props: { active: false },
      style: {
        '& span': {
          color: theme.palette.mode === 'light'
            ? alpha(theme.palette.common.black, .5)
            : alpha(theme.palette.common.white, .5),
        }
      }
    }
  ],
  flexGrow: 0,
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  gap: '1em',
}))