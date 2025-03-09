import { styled, Autocomplete } from "@mui/material";

export const SearchContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
  },
  '& .MuiAutocomplete-endAdornment': {
    display: 'none',
  },
}))

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const SearchInput = styled(Autocomplete)(({ theme }) => ({
  width: '100%',
  '& .MuiFormControl-root': {
    width: 'calc(100% - 3.25em)',
    paddingLeft: '3.25em',
    '& .MuiFormLabel-root ': {
      display: 'none'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiInputBase-root': {
      padding: 0,
    },
    '& input': {
      width: '100%',
      paddingRight: '3em',
    }
  },
  "& .auto-search-hidden--clear-indicator": {
      display: "none", // Скрывает крестик
    },
}));