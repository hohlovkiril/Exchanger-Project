import { Drawer, Fade, Stack, styled } from "@mui/material";
import { Card } from "../../components/ui/Surfaces";

export const ColumnContainer = styled(Fade)(({ theme }) => ({

}))

export const TaskContainer = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '1em',
  background: theme.palette.mode === 'light'
    ? 'rgb(232, 232, 232)'
    : 'rgb(55, 55, 55)',
  cursor: 'grab',

  '& .taskboard__task_title': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'pre',
    maxWidth: '150px',
    fontSize: 'clamp(10px, 2vw, 12px)',

    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    }
  }
}))

export const TaskDrawerContainer = styled(Drawer)(({ theme }) => ({
  '& .MuiPaper-root.MuiDrawer-paper': {
    minWidth: '360px',

    '& .taskboard_task__drawer_edit_header': {
      padding: '1em',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& .taskboard_task__drawer_edit_title': {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'pre',
        maxWidth: '200px'
      },
      '& .taskboard_task__drawer_edit_header_actions': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '.25em',
      }
    },
  },
}))

export const FormContainer = styled(Stack)(({ theme }) => ({
  padding: '1em',
  display: 'flex',
  flexDirection: 'column',
  gap: '1em',
  background: theme.palette.mode === 'light'
    ? 'rgb(232, 232, 232)'
    : 'rgb(55, 55, 55)'
}))

