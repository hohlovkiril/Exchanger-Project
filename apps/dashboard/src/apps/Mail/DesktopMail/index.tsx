import {
  CardContent
} from "../../../components/ui/Surfaces";
import DesktopMailCategoryList from "../MailCategoryList";
import MailConversation from "../MailConversation";
import DesktopMailInboxList from "../MailInboxList";
import { DesktopMailCard } from "./index.style";

export default function DesktopMail() {
  return (
    <>
      <DesktopMailCard
        rounded
      >
        <CardContent>
          <DesktopMailCategoryList />
          <DesktopMailInboxList />
          <MailConversation />
        </CardContent>
      </DesktopMailCard>
    </>
  )
}