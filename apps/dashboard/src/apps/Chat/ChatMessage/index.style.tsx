import { styled } from '@mui/material';

import {
  Stack,
} from '../../../components/ui/Surfaces';

export const ChatMessageContainer = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'placement'
})<{
  placement: 'left' | 'right',
}>(({ theme }) => ({
  variants: [
    {
      props: { placement: 'left' },
      style: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        '& .chat_message__text': {
          color: theme.palette.mode === 'light'
            ? theme.palette.common.black
            : theme.palette.common.white,
          backgroundColor: theme.palette.mode === 'light'
            ? theme.palette.background.paper
            : theme.palette.background.paper,
          borderRadius: '4px 4px 4px 0px'
        },
        '& .chat_message__date': {
          textAlign: 'start'
        }
      }
    },
    {
      props: { placement: 'right' },
      style: {
        justifyContent: 'flex-start',
        flexDirection: 'row-reverse',
        '& .chat_message__text': {
          color: theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black,
          backgroundColor: theme.palette.mode === 'light'
            ? theme.palette.primary.light
            : theme.palette.primary.dark,
          borderRadius: '4px 4px 0px 4px'
        },
        '& .chat_message__date': {
          textAlign: 'end'
        }
      }
    }
  ],
  display: 'flex',
  gap: '1em',
  '& .chat_message__text': {
    padding: '.5em .75em .5em .75em',
    maxWidth: '175px',
  },
  '& .chat_message__date': {
    opacity: '.75'
  }
}))