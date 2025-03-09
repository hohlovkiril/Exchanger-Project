import { Box, Stack, styled } from "@mui/material";

export const DropzoneContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '1em',
}))

export const UploadContainer = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '3em',
  alignItems: 'center',
  outline: 'none',
  padding: '40px 8px',
  border: '1px dashed rgb(140, 140, 140)',
  borderRadius: '4px',

  '&:hover': {
    opacity: '.7',
    cursor: 'pointer'
  }
}))

