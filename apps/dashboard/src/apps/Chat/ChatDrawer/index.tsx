import { Box, DrawerProps, Stack, useMediaQuery } from "@mui/material";

import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import {
  Typography
} from '../../../components/ui/DataDisplay'
import { IconButton } from "../../../components/ui/Inputs";
import { MEDIA_QUERIES } from "../../../common/constants";
import { ChatDrawerContainer } from "./index.style";

export default function ChatDrawer(props: DrawerProps) {

  /** Context */

  const isMobileResolution = useMediaQuery(`(max-width: ${MEDIA_QUERIES.smallLaptop})`);

  return (
    <ChatDrawerContainer
      variant='permanent'
      {...props}
      onClose={props.onClose}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1em',
          padding: '1.5em'
        }}
      >

        {/** Chat drawer header */}
        <Stack
          direction='row'
          justifyContent='space-between'
          gap={1}
        >
          <Typography
            variant='h6'
          >
            Messages
          </Typography>

          {isMobileResolution && (
            <IconButton
              onClick={(evt) => props.onClose ? props.onClose(evt, 'backdropClick') : undefined}
            >
              <MenuOpenIcon />
            </IconButton>
          )}

        </Stack>


      </Box>
    </ChatDrawerContainer>
  )
}