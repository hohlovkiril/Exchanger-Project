import { useState } from "react";

import CloseIcon from '@mui/icons-material/Close';

import { FormContainer } from "./index.styled";
import {
  Button,
  IconButton,
} from "../../components/ui/Inputs";
import {
  TextField,
} from '../../components/ui/Inputs';
import {
  Typography,
} from "../../components/ui/DataDisplay";
import {
  Stack,
} from '../../components/ui/Surfaces';

interface IProps {
  onCreate: (title: string) => void;
  onClose: () => void;
}

export default function ColumnForm({
  onCreate,
  onClose,
}: IProps) {

  /** States */

  const [title, setTitle] = useState<string>('');
  const [errMessage, setErrMessage] = useState<string | null>(null);

  /** Handlers */

  const handleOnClick = () => {
    if (title.length === 0) {
      return setErrMessage('Column title is required!');
    } else {
      setTitle('');
      setErrMessage(null);
      onCreate(title);
      onClose();
    }
  }
  
  return (
    <>
      <FormContainer>
        
        <TextField
          variant='standard'
          value={title}
          fullWidth
          onChange={(evt) => setTitle(evt.target.value)}
        />

        {errMessage && (
          <Typography
            variant='caption'
            color='error'
          >
            {errMessage}
          </Typography>
        )}

        <Stack
          direction='row'
          justifyContent='flex-start'
          gap={1}
        >
          <Button
            variant='contained'
            color='primary'
            onClick={handleOnClick}
          >
            Add
          </Button>
          <IconButton
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </Stack>

      </FormContainer>
    </>
  )
}