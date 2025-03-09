import { useState } from "react";

import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

import { Fade, Input, Modal } from "@mui/material";
import {
  Button,
  IconButton,
} from "../../../components/ui/Inputs";
import {
  CardContent,
  CardHeader,
  Stack,
} from "../../../components/ui/Surfaces";
import {
  Typography,
  Divider,
} from "../../../components/ui/DataDisplay";
import EditorApp from "../../Editor";
import { StyledCard } from "./index.style";
import { useMailApi } from "../provider";

interface IProps {
  type: 'modal' | 'floating';
  onChangeViewType: () => void;
  onClose: () => void;
}

export function NewMailContainer() {

  /** Context */

  const {
    newMailFormOpen,
    setNewMailForm,
    setNewMailFormOpen
  } = useMailApi();

  /** States */

  const [formType, setFormType] = useState<'modal' | 'floating'>('floating');

  /** Handlers */

  const handleClose = () => {
    setFormType('floating');
    setNewMailForm({});
    setNewMailFormOpen(false);
  }

  return (
    <>
      {formType === 'floating' && (
        <Fade
          in={newMailFormOpen}
        >
          <div>
            <NewMailForm
              type='floating'
              onChangeViewType={() => setFormType('modal')}
              onClose={handleClose}
            />
          </div>
        </Fade>
      )}

      {formType === 'modal' && (
        <Modal
          open={newMailFormOpen}
          onClose={handleClose}
        >
          <Fade
            in={newMailFormOpen}
          >
            <div>
              <NewMailForm
                type='modal'
                onChangeViewType={() => setFormType('floating')}
                onClose={handleClose}
              />
            </div>
          </Fade>
        </Modal>
      )}
    </>
  )
}

export function NewMailForm({
  type,
  onChangeViewType,
  onClose,
}: IProps) {
  return (
    <>
      <StyledCard
        type={type}
        rounded
        sx={{
        }}
      >
        <CardHeader
          title={(
            <Typography
              component='h1'
              sx={{
                fontSize: 'clamp(14px, 4vw, 18px)',
              }}
            >
              New message
            </Typography>
          )}
          action={(
            <Stack
              direction='row'
              justifyContent='flex-end'
              alignItems='center'
              gap={1}
            >
              <IconButton
                onClick={onChangeViewType}
              >
                {type === 'modal' ? (
                  <ZoomInMapIcon fontSize='small' />
                ) : (
                  <ZoomOutMapIcon fontSize='small' />
                )}
              </IconButton>
              <IconButton
                onClick={onClose}
              >
                <CloseIcon fontSize='small' />
              </IconButton>
            </Stack>
          )}
        />

        <Input
          className="new__mail_to"
          placeholder="To"
          fullWidth
        />
        
        <Divider />

        <Input
          className="new__mail_subject"
          placeholder="Subject"
          fullWidth
        />

        <Divider />

        <CardContent>
          <EditorApp
            
          />
          <Stack
            direction='row'
            justifyContent='space-between'
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
        </CardContent>
      </StyledCard>
    </>
  )
}