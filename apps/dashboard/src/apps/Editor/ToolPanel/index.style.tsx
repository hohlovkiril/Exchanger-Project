import { Stack, styled } from "@mui/material";

export const ToolPanelContainer = styled(Stack)(({ theme }) => ({
  visibility: 'visible',
  padding: '10px 10px 0',
  paddingTop: '10px',
  paddingBottom: '10px',
  userSelect: 'none',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  gap: '4px',
  fontSize: '14px',
  background: theme.palette.mode === 'light'
    ? 'rgba(245, 245, 245)'
    : 'rgb(45, 45, 45)',
  borderWidth: 'medium medium 1px',
  borderStyle: 'none none solid',
  borderImage: 'none',
  borderRadius: '2px',
  borderColor: theme.palette.mode === 'light'
    ? 'rgb(240, 240, 240)'
    : 'rgb(15, 15, 15)',
}))