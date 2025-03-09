import { alpha, Card, CardContent, CardHeader, styled } from "@mui/material";

export const MuiCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'rounded'
})<{
  rounded?: true
}>(({ theme }) => ({
  variants: [
    {
      props: { rounded: undefined },
      style: {
        borderRadius: '6px',
      }
    },
    {
      props: { rounded: true },
      style: {
        borderRadius: '16px',
      }
    }
  ],
  border: '1px solid',
  borderColor: 'rgba(125, 125, 125, .25)',
  background: alpha(theme.palette.background.paper, .75),
  boxShadow: '1px 1px 6px rgba(125, 125, 125, .25)',
}))

export const MuiCardHeader = styled(CardHeader, {
})<{

}>(({ theme }) => ({

}))

export const MuiCardContent = styled(CardContent, {
})<{

}>(({ theme }) => ({
}))