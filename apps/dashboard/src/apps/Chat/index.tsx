import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

import { ChatContainer } from "./index.style";
import ChatHeader from "./ChatHeader";
import ChatDrawer from "./ChatDrawer";
import ChatMain from "./ChatMain";
import { MEDIA_QUERIES } from "../../common/constants";
import { ChatProvider } from "./provider";

export default function ChatApp() {

  /** Context */

  const isMobileResolution = useMediaQuery(`(max-width: ${MEDIA_QUERIES.smallLaptop})`);

  /** States */

  const [drawerOpen, setDrawerOpen] = useState<boolean>(
    isMobileResolution ? false : true
  );

  /** Handlers */

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  }

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  }

  /** Effects */

  useEffect(() => {
    if (isMobileResolution) {
      setDrawerOpen(false);
    }
  }, [isMobileResolution])

  return (
    <>
      <ChatProvider>
        <ChatContainer>

          <ChatHeader
            drawerOpen={drawerOpen}
            onDrawerToggle={() => drawerOpen ? handleCloseDrawer() : handleOpenDrawer()}
          />

          <ChatDrawer
            open={drawerOpen}
            onClose={() => handleCloseDrawer()}
          />

          <ChatMain
            drawerOpen={drawerOpen}
          />

        </ChatContainer>
      </ChatProvider>
    </>
  )
}