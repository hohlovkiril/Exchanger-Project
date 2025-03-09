import { Button, styled } from "@mui/material";

export const MuiButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'enableTooltip'
})<{
  enableTooltip?: any;
}>(({ theme }) => ({
  variants: [
    {
      props: { variant: 'contained', color: undefined },
      style: {
        color: theme.palette.mode === 'light'
          ? theme.palette.common.white
          : theme.palette.common.black,
        '& .MuiTypography-root': {
          color: theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black,
        }
      }
    }
  ],
}))