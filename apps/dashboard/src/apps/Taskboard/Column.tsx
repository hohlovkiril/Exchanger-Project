import { useState } from "react";
import { MenuItem, MenuList } from "@mui/material";

import EditIcon from '@mui/icons-material/Edit';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import {
  Button,
  IconButton,
  TextField,
} from '../../components/ui/Inputs';
import {
  ListItemIcon,
  ListItemText,
  Typography,
} from "../../components/ui/DataDisplay";
import {
  Card,
  CardHeader,
  CardContent,
  Stack,
} from '../../components/ui/Surfaces';
import {
  Menu
} from "../../components/ui/Navigation";
import { ColumnData } from "./types";
import ColumnForm from "./ColumnForm";
import Task from "./Task";
import { useTaskApi } from "./provider/index.provider";

interface IProps {
  data: ColumnData;
  isFirst?: true;
  isLast?: true;
}

export default function Column({
  data,
  isFirst,
  isLast,
}: IProps) {

  /** Context */

  const { onColumnMove, onColumnEdit, onColumnDelete, onTaskCreate } = useTaskApi();

  /** States */

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [mode, setMode] = useState<'edit' | 'view'>('view');
  const [newTitle, setNewTitle] = useState<string>(data.title);
  const [formActive, setFormActive] = useState<boolean>(false);

  /** Handlers */
  
  const handleOpen = (evt: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(evt.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  /** Column drag */

  return (
    <Card
      sx={{
        minWidth: '280px',
      }}
    >
      <CardHeader
        title={(
          <>
            {mode === 'view' ? (
              <Typography>
                {data.title}
              </Typography>
            ) : (
              <TextField
                variant='standard'
                value={newTitle}
                onChange={(evt) => setNewTitle(evt.target.value)}
              />
            )}
          </>
        )}
        action={(
          <>
            {mode === 'view' ? (
              <>
                <IconButton
                  onClick={handleOpen}
                >
                  <MoreVertIcon />
                </IconButton>

                <Menu
                  id={`menu-toolbar-column-${data.viewIndex}`}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  paperProps={{
                    sx: {
                      minWidth: '100px',
                    }
                  }}
                >
                  <MenuList sx={{ padding: '4px' }}>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        setMode('edit')
                      }}
                    >
                      <ListItemIcon>
                        <EditIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary='Edit'
                      />
                    </MenuItem>
                    <MenuItem
                      disabled={isFirst}
                      onClick={() => {
                        onColumnMove('left', data.viewIndex);
                        handleClose();
                      }}
                    >
                      <ListItemIcon>
                        <KeyboardDoubleArrowLeftIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary='Move - Left'
                      />
                    </MenuItem>
                    <MenuItem
                      disabled={isLast}
                      onClick={() => {
                        onColumnMove('right', data.viewIndex);
                        handleClose();
                      }}
                    >
                      <ListItemIcon>
                        <KeyboardDoubleArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary='Move - Right'
                      />
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        onColumnDelete(data.viewIndex);
                        handleClose();
                      }}
                    >
                      <ListItemIcon>
                        <DeleteIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary='Delete'
                      />
                    </MenuItem>
                  </MenuList>
                </Menu>
              </>
            ) : (
              <>
                <Stack
                  direction='row'
                  justifyContent='flex-end'
                  gap={1}
                >
                  <IconButton
                    size='small'
                    color='primary'
                    onClick={() => {
                      setMode('view');
                      onColumnEdit(data.viewIndex, newTitle);
                    }}
                  >
                    <SaveIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size='small'
                    color='error'
                    onClick={() => {
                      setMode('view');
                      setNewTitle(data.title);
                    }}
                  >
                    <CloseIcon fontSize='small' />
                  </IconButton>
                </Stack>
              </>
            )}
          </>
        )}
      />        

      {data.tasks.length > 0 && (
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1em'
          }}
        >
          {data.tasks.map((task, key) => (
            <Task
              key={key}
              data={task}
            />
          ))}
        </CardContent>
      )}

      {formActive ? (
        <CardContent>
          <ColumnForm
            onCreate={(title: string) => onTaskCreate(title, data.viewIndex)}
            onClose={() => setFormActive(false)}
          />
        </CardContent>
      ) : (
        <CardContent>
          <Button
            variant='outlined'
            color='inherit'
            sx={{
              borderStyle: 'dashed'
            }}
            fullWidth
            onClick={() => setFormActive(true)}
          >
            Add Task
          </Button>
        </CardContent>
      )}

    </Card>
  )
}