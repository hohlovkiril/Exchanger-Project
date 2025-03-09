import { Drawer } from "@mui/material";

import { StyledMailConversation, StyledMailInbox } from "./index.style";
import {
  Avatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from "../../../components/ui/DataDisplay";
import {
  Box,
  Stack,
} from '../../../components/ui/Surfaces';

interface IPlaceholderProps {
  folderName: string;
}

interface IDesktopProps {

}

interface IMobileProps {
  title: string;
  drawerOpen: boolean;
  onCloseDrawer: () => void;
}

const MailInboxPlaceholder = ({
  folderName
}: IPlaceholderProps) => {
  return (
    <Box
      className="mail__inbox_placeholder"
    >
      <img
        src="/static/images/empty-mail-conversation-list.svg"
        alt=""
      />
      <Typography
        color='textDisabled'
        sx={{
          fontWeight: '500',
          fontSize: "18px"
        }}
      >
        Nothing in {folderName}
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

// eslint-disable-next-line no-empty-pattern
export default function DesktopMailInboxList({

}: IDesktopProps) {

  /** Vars */

  const conversations = new Array(3).fill(null);

  return (
    <StyledMailInbox>
      {true ? (
        <>
          <MailInboxPlaceholder
            folderName="All"
          />
        </>
      ) : (
        <>
          <Stack
            direction='column'
            justifyContent='flex-start'
            gap={1}
          >
            {conversations.map((_, key) => (
              <StyledMailConversation
                key={key}
              >
                <ListItemIcon>
                  <Avatar alt="TEST" src="" />
                </ListItemIcon>
                <ListItemText
                  primary="Sender Name"
                  secondary="last email text"
                />
                <ListItemText
                  className="conversation__last_date"
                  primary='a day'
                />
              </StyledMailConversation>
            ))}
          </Stack>
        </>
      )}
    </StyledMailInbox>
  )
}

export function MobileMailInboxList({
  title,
  drawerOpen,
  onCloseDrawer
}: IMobileProps) {

  /** Vars */

  const conversations = new Array(3).fill(null);

  return (
    <>
      <Drawer
        open={drawerOpen}
        onClose={onCloseDrawer}
      >
        <Box
          sx={{
            padding: '1em',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: '1em',
            width: '40vw'
          }}
        >

          <Typography
            variant='h6'
            sx={{
              fontWeight: '600'
            }}
          >
            {title}
          </Typography>

          {conversations.map((_, key) => (
              <StyledMailConversation
                key={key}
              >
                <ListItemIcon>
                  <Avatar alt="TEST" src="" />
                </ListItemIcon>
                <ListItemText
                  primary="Sender Name"
                  secondary="last email text"
                />
                <ListItemText
                  className="conversation__last_date"
                  primary='a day'
                />
              </StyledMailConversation>
            ))}

        </Box>
      </Drawer>
    </>
  )
}