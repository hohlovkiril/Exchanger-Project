import { alpha, Autocomplete as MuiAutocomplete, styled } from "@mui/material";

export const Autocomplete = styled(MuiAutocomplete)(({ theme }) => ({
  '& .MuiAutocomplete-tag': {
    padding: '.25em',
    paddingLeft: '.5em',
    paddingRight: '.5em',
    background: theme.palette.background.default,
    border: '1px solid',
    borderColor: theme.palette.mode === 'light'
      ? alpha(theme.palette.common.black, .25)
      : alpha(theme.palette.common.white, .25),
    borderRadius: '16px',
  }
}))