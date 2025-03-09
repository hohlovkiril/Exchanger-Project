import { useState } from "react";

import MailIcon from '@mui/icons-material/Mail';
import AllInboxIcon from '@mui/icons-material/AllInbox';

import { MobileMailCard } from "./index.style";
import { MobileMailCategoryList } from "../MailCategoryList";
import { MobileMailInboxList } from "../MailInboxList";
import {
  CardContent,
  CardHeader,
  Stack,
} from "../../../components/ui/Surfaces";
import {
  IconButton,
} from "../../../components/ui/Inputs";
import MailConversation from "../MailConversation";

export default function MobileMail() {

  /** States */

  const [categoryOpen, setCategoryOpen] = useState<boolean>(false);
  const [inboxOpen, setInboxOpen] = useState<boolean>(false);

  /** Handlers */

  const handleOpenCategory = () => {
    setCategoryOpen(true);
  }

  const handleCloseCategory = () => {
    setCategoryOpen(false);
  }

  const handleOpenInbox = () => {
    setInboxOpen(true);
  }

  const handleCloseInbox = () => {
    setInboxOpen(false);
  }

  return (
    <>
      <MobileMailCard
        rounded
      >
        <CardHeader
          title={(
            <Stack
              direction='row'
              justifyContent='flex-start'
              gap={1}
            >
              <IconButton
                size='small'
                onClick={handleOpenCategory}
              >
                <MailIcon fontSize='small' />
              </IconButton>
              <IconButton
                size='small'
                onClick={handleOpenInbox}
              >
                <AllInboxIcon fontSize='small' />
              </IconButton>
            </Stack>
          )}
        />
        <CardContent>
          <MailConversation />
        </CardContent>
      </MobileMailCard>

      <MobileMailCategoryList
        drawerOpen={categoryOpen}
        onCloseDrawer={handleCloseCategory}
      />

      <MobileMailInboxList
        title="Inbox"
        drawerOpen={inboxOpen}
        onCloseDrawer={handleCloseInbox}
      />
    </>
  )
}