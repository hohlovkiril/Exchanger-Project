import { Box, styled, Tab, Tabs } from "@mui/material";

export const MuiTabs = styled(Tabs)(({ theme }) => ({
  '& .Mui-disabled': {
    display: 'none',
  }
}))

export const MuiTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
}))

export const MuiTabPanel = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'tabIndex'
    && prop !== 'tabValue'
})<{
  tabIndex: number;
  tabValue: number;
}>(({ theme, tabIndex, tabValue }) => ({
  variants: [
    {
      props: { tabValue: tabIndex === tabValue },
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: '.5em',
      }
    },
    {
      props: { tabValue: tabIndex !== tabValue },
      style: {
        display: 'none',
      }
    }
  ],
  flex: 1,
  boxSizing: 'border-box',
  overflowY: 'auto',
  padding: '1em',
  color: theme.palette.text.primary,
}))