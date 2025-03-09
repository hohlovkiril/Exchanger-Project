import React from "react";
import { Drawer } from "@mui/material";

import CreateIcon from '@mui/icons-material/Create';
import MailIcon from '@mui/icons-material/Mail';

// import UpcomingIcon from '@mui/icons-material/Upcoming';
// import SendIcon from '@mui/icons-material/Send';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import DeleteIcon from '@mui/icons-material/Delete';
// import ReportIcon from '@mui/icons-material/Report';
// import LabelImportantIcon from '@mui/icons-material/LabelImportant';
// import StarIcon from '@mui/icons-material/Star';

import { StyledCategoryButton } from "./index.style";
import { useMailApi } from "../provider";
import {
  Button,
} from "../../../components/ui/Inputs";
import {
  ListItemIcon,
  ListItemText,
} from "../../../components/ui/DataDisplay";
import {
  Box,
  Stack,
} from '../../../components/ui/Surfaces'

// const LABEL_ICONS: { [labelName: string]: React.ReactNode } = {
//   'INBOX': <UpcomingIcon />,
//   'SENT': <SendIcon />,
//   'DRAFT': <DraftsIcon />,
//   'STARRED': <StarIcon />,
//   'SPAM': <ReportIcon />,
//   'TRASH': <DeleteIcon />,
// }

interface IDesktopProps {

}

interface IMobileProps {
  drawerOpen: boolean;
  onCloseDrawer: () => void;
}

// eslint-disable-next-line no-empty-pattern
export default function DesktopMailCategoryList({

}: IDesktopProps) {

  /** Context */

  const {
    newMailFormOpen,
    setNewMailFormOpen,
  } = useMailApi();

  /** Handlers */

  const handleClickCompose = () => {
    setNewMailFormOpen(!newMailFormOpen);
  }

  return (
    <>
      <Stack
        flex={1}
        direction='column'
        justifyContent='flex-start'
        gap={1}
      >
        <Button
          variant='contained'
          color='inherit'
          startIcon={<CreateIcon />}
          onClick={handleClickCompose}
          sx={{
            borderRadius: '16px',
          }}
        >
          Compose
        </Button>

        <StyledCategoryButton
          active={true}
        >
          <ListItemIcon
            sx={{
              width: 'fit-content',
              minWidth: 'fit-content',
              '& svg': {
                fontSize: '20px'
              }
            }}
          >
            <MailIcon />
          </ListItemIcon>
          <ListItemText
            primary='All'
            sx={{
              '& span': {
                fontSize: '14px'
              }
            }}
          />
        </StyledCategoryButton>

        {/* {getMailCategories().map((category, key) => (
          <StyledCategoryButton
            key={key}
            active={currentMailCategory && currentMailCategory === category ? true : false}
            onClick={() => setCurrentMailCategory(category)}
          >
            <ListItemIcon 
              sx={{
                width: 'fit-content',
                minWidth: 'fit-content',
                '& svg': {
                  fontSize: '20px'
                }
              }}
            >
              {LABEL_ICONS[category.toUpperCase()] || <LabelImportantIcon />}
            </ListItemIcon>
            <ListItemText
              primary={category}
              sx={{
                '& span': {
                  fontSize: '14px'
                }
              }}
            />
          </StyledCategoryButton>
        ))} */}

      </Stack>
    </>
  )
}

export function MobileMailCategoryList({
  drawerOpen,
  onCloseDrawer
}: IMobileProps) {

  /** Context */

  const {
    newMailFormOpen,
    setNewMailFormOpen,
  } = useMailApi();

  /** Handlers */

  const handleClickCompose = () => {
    setNewMailFormOpen(!newMailFormOpen);
    onCloseDrawer();
  }

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
            gap: '.5em',
            width: '40vw'
          }}
        >
          <Button
            variant='contained'
            color='inherit'
            startIcon={<CreateIcon />}
            onClick={handleClickCompose}
            sx={{
              borderRadius: '16px',
            }}
          >
            Compose
          </Button>

          <StyledCategoryButton
            active={true}
          >
            <ListItemIcon
              sx={{
                width: 'fit-content',
                minWidth: 'fit-content',
                '& svg': {
                  fontSize: '20px'
                }
              }}
            >
              <MailIcon />
            </ListItemIcon>
            <ListItemText
              primary='All'
              sx={{
                '& span': {
                  fontSize: '14px'
                }
              }}
            />
          </StyledCategoryButton>

          {/* {getMailCategories().map((category, key) => (
            <StyledCategoryButton
              key={key}
              active={currentMailCategory && currentMailCategory === category ? true : false}
              onClick={() => setCurrentMailCategory(category)}
            >
              <ListItemIcon 
                sx={{
                  width: 'fit-content',
                  minWidth: 'fit-content',
                  '& svg': {
                    fontSize: '20px'
                  }
                }}
              >
                {LABEL_ICONS[category.toUpperCase()] || <LabelImportantIcon />}
              </ListItemIcon>
              <ListItemText
                primary={category}
                sx={{
                  '& span': {
                    fontSize: '14px'
                  }
                }}
              />
            </StyledCategoryButton>
          ))} */}

        </Box>

      </Drawer>
    </>
  )
}