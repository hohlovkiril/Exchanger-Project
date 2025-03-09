import { Radio, RadioGroup, styled } from "@mui/material";

export const MuiRadioGroup = styled(RadioGroup)(({ theme }) => ({

}))

export const MuiRadio = styled(Radio)(({ theme }) => ({
  '&.size-small': {
    '& svg.MuiSvgIcon-root': {
      width: '.75em',
      height: '.75em',
    }
  },
  '&.size-medium': {
    '& svg.MuiSvgIcon-root': {
      width: '1em',
      height: '1em',
    }
  },
  '&.size-large': {
    '& svg.MuiSvgIcon-root': {
      width: '1.25em',
      height: '1.25em',
    }
  }
}))