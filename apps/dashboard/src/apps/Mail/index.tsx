import { useMediaQuery } from "@mui/material";
import { NewMailContainer } from "./NewMailForm";
import { MailProvider } from "./provider";
import { MEDIA_QUERIES } from "../../common/constants";
import MobileMail from "./MobileMail";
import DesktopMail from "./DesktopMail";

export default function MailApp() {

  /** Context */

  const isMobileResolution = useMediaQuery(`(max-width: ${MEDIA_QUERIES.smallLaptop})`);

  return (
    <>
      <MailProvider>

        {isMobileResolution ? (
          <MobileMail />
        ) : (
          <DesktopMail />
        )}

        <NewMailContainer />

      </MailProvider>
    </>
  )
}