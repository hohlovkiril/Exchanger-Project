import DoneIcon from '@mui/icons-material/Done';

import {
  Box,
  Stack,
} from '../../../components/ui/Surfaces'
import {
  Avatar,
  Badge,
  Typography,
} from "../../../components/ui/DataDisplay";
import { ChatMessageContainer } from "./index.style";
import { ChatMessageType } from "../common/types"
import formatMessageDate from "../utils/formatMessageDate";
import { useAuth } from "../../../providers/auth.provider";

interface IProps {
  message: ChatMessageType;
}

export default function ChatMessage({
  message
}: IProps) {

  /** Context */

  const { user } = useAuth();

  return (
    <>
      <ChatMessageContainer
        placement={message.isSelf ? 'right' : 'left'}
      >
        <Badge
          color='success'
          badgeContent={(
            <DoneIcon
              fontSize="small"
              sx={{
                width: '8px',
                height: '8px',
              }}  
            />
          )}
          sx={{
            borderRadius: '100%'
          }}
        >
          {message.isSelf ? (
            <>
              <Avatar alt={user?.fullName} src={user?.avatar} />
            </>
          ) : (
            <>
              <Avatar alt={message.user?.fullName} src={message.user?.avatar} />
            </>
          )}
        </Badge>

        <Stack
          direction='column'
          justifyContent='center'
          sx={{ gap: '.25em' }}
        >
          <Box
            className="chat_message__text"
          >
            {message.text}
          </Box>
          <Typography
            variant='caption'
            color='textSecondary'
            className="chat_message__date"
          >
            {formatMessageDate(message.createdAt)}
          </Typography>
        </Stack>

      </ChatMessageContainer>
    </>
  )
}