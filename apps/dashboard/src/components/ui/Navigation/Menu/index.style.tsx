import { Menu, Paper, styled } from "@mui/material";

export const MuiMenu = styled(Menu, {
  shouldForwardProp: (prop) => prop !== 'menuHeader'
    && prop !== 'paperProps'
})<{
  menuHeader?: any;
  paperProps?: any;
}>(({ theme }) => ({
  '& .MuiMenu-list': {
    padding: '0'
  },
  '& .MuiMenuItem-root': {
    borderRadius: '4px',
  },
}))

export const MuiMenuPaper = styled(Paper)(({ theme }) => ({
  
}))