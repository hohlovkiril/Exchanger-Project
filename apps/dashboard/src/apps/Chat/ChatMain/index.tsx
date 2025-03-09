import { BoxProps, Stack } from "@mui/material";

import TagFacesIcon from '@mui/icons-material/TagFaces';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ImageIcon from '@mui/icons-material/Image';
import SendIcon from '@mui/icons-material/Send';

import {
  ChatMainContainer,
  ChatContentContainer,
  ChatMessageListContainer,
  ChatFormContainer
} from "./index.style";
import {
  IconButton,
  TextField
} from "../../../components/ui/Inputs";

interface IProps {
  drawerOpen?: boolean;
}

export default function ChatMain(props: IProps & BoxProps) {
  return (
    <ChatMainContainer {...props}>
      <ChatContentContainer>
        <ChatMessageListContainer>
          {/* {props.selectedChat?.messages && props.selectedChat.messages.map((msg, key) => (
            <ChatMessage
              key={key}
              message={msg}
            />
          ))} */}
        </ChatMessageListContainer>
      </ChatContentContainer>
      <ChatFormContainer>
        <TextField
          variant='standard'
          rows={4}
          disabled={true}
          fullWidth
          multiline
        />
        <Stack
          direction='row'
          justifyContent='space-between'
        >
          <Stack
            direction='row'
            justifyContent='space-between'
            gap={1}
          >
            <IconButton
              disabled={true}
            >
              <TagFacesIcon />
            </IconButton>
            <IconButton
              disabled={true}
            >
              <AttachFileIcon />
            </IconButton>
            <IconButton
              disabled={true}
            >
              <ImageIcon />
            </IconButton>
          </Stack>

          <IconButton
            disabled={true}
            color='primary'
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </ChatFormContainer>
    </ChatMainContainer>
  )
}