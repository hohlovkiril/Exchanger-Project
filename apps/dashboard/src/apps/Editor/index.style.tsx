import { Box, styled } from "@mui/material";

export const EditorContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'variant'
})<{
  variant?: 'material' | 'unstyled',
}>(({ theme }) => ({
  variants: [
    {
      props: { variant: 'material' },
      style: {

      }
    },
    {
      props: { variant: 'unstyled' },
      style: {
        '& .MuiInputBase-root': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          textAlign: 'center',
          paddingLeft: '10px',
          height: '100%',
        },
        '& .toolpanel__item__block_type': {
          // border: 'none',
          maxHeight: '32px',
          background: theme.palette.mode === 'light'
            ? 'rgb(235, 235, 235)'
            : 'rgb(55, 55, 55)',
          borderColor: theme.palette.mode === 'light'
            ? 'rgb(245, 245, 245)'
            : 'rgb(75, 75, 75)',
          color: theme.palette.mode === 'light'
            ? theme.palette.common.black
            : theme.palette.common.white,
          borderRadius: '0px',
          
          '& .MuiSelect-select': {
            paddingTop: '',
            border: 'none',
          }
        },
        
        '& .toolpanel__item': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '32px',
          height: '32px',
          background: theme.palette.mode === 'light'
            ? 'rgb(235, 235, 235)'
            : 'rgb(55, 55, 55)',
          borderColor: theme.palette.mode === 'light'
            ? 'rgb(245, 245, 245)'
            : 'rgb(75, 75, 75)',
          color: theme.palette.mode === 'light'
            ? theme.palette.common.black
            : theme.palette.common.white,
          '&:disabled': {
            opacity: '.5'
          },
          '&.active': {
            boxShadow: '1px 1px 1px black inset',
          },
          '& svg': {
            fontSize: '16px',
          }
        }
      }
    }
  ],

  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid',
  borderColor: theme.palette.mode === 'light'
    ? 'rgb(210, 210, 210)'
    : 'rgb(75, 75, 75)',
  borderRadius: '10px',
  overflow: 'hidden',

  '& .DraftEditor-root': {
    padding: '1em',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.mode === 'light'
      ? 'rgb(250, 250, 250)'
      : 'rgb(60, 60, 60)'
  },
  '& .public-DraftEditorPlaceholder-root': {
    position: 'absolute',
    color: 'rgb(125, 125, 125)'
  },
  '& .DraftEditor-editorContainer': {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  '& .public-DraftEditor-content': {
    flex: 1,
    minHeight: '140px',
  }
}))