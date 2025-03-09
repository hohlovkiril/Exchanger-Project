import StarIcon from '@mui/icons-material/Star';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import ArchiveIcon from '@mui/icons-material/Archive';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';

import { StyledMailConversation } from "./index.style";
import {
  Typography,
} from "../../../components/ui/DataDisplay";
import {
  Button,
  IconButton,
} from "../../../components/ui/Inputs";
import {
  Box,
  Stack,
  CardContent,
} from "../../../components/ui/Surfaces";
import EditorApp from "../../Editor";

const MailConversationPlaceholder = () => {
  return (
    <Box
      className="mail__conversation_placeholder"
    >
      <img
        src="/static/images/empty-mail-conversation.svg"
        alt=""
      />
      <Typography
        color='textDisabled'
        sx={{
          fontWeight: '500',
          fontSize: "18px"
        }}
      >
        No conversation selected
      </Typography>
      <Typography
        color='textDisabled'
        sx={{
          fontWeight: '300',
          fontSize: "14px"
        }}
      >
        Select a conversation to read
      </Typography>
    </Box>
  )
}

export default function MailConversation() {
  return (
    <StyledMailConversation
      rounded
    >
      {true ? (
        <>
          <MailConversationPlaceholder />
        </>
      ) : (
        <>
          <Stack
            className="mail__conversation_header"
          >
            <IconButton
              size='small'
            >
              <StarIcon
                fontSize='small'
              />
            </IconButton>
            <IconButton
              size='small'
            >
              <LabelImportantIcon
                fontSize='small'
              />
            </IconButton>
            <IconButton
              size='small'
            >
              <ArchiveIcon
                fontSize='small'
              />
            </IconButton>
            <IconButton
              size='small'
            >
              <MarkEmailUnreadIcon 
                fontSize='small'
              />
            </IconButton>
            <IconButton
              size='small'
            >
              <DeleteIcon
                fontSize='small'
              />
            </IconButton>
            <IconButton
              size='small'
            >
              <MoreVertIcon
                fontSize='small'
              />
            </IconButton>
          </Stack>

          <CardContent>
            <Stack
              flex={1}
              direction='column'
              justifyContent='space-between'
            >
              <EditorApp
              />
              
              <Stack
                direction='row'
                justifyContent='space-between'
                sx={{
                  marginTop: '1em',
                }}
              >
                <Stack
                  direction='row'
                  justifyContent='flex-start'
                  gap={1}
                >

                </Stack>

                <Button
                  variant='contained'
                  color='success'
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </>
      )}
    </StyledMailConversation>
  )
}