import { styled } from "@mui/material";
import { MaterialDesignContent } from "notistack";

export const StyledMaterialSnackbarContent = styled(MaterialDesignContent)(({ theme }) => ({
  '&.notistack-MuiContent-default': {
    background: theme.palette.background.paper,
    color: theme.palette.mode === 'light'
      ? theme.palette.common.black
      : theme.palette.common.white
  }
}))