import { useState } from "react";
import { FormControl, InputLabel, MenuItem, MenuList, OutlinedInput } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { TaskContainer, TaskDrawerContainer } from "./index.styled";
import { TaskData } from "./types";
import {
  Button,
  IconButton,
} from '../../components/ui/Inputs';
import {
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from '../../components/ui/DataDisplay'
import {
  Box,
  CardHeader,
  Stack,
} from '../../components/ui/Surfaces';
import {
  Menu,
} from "../../components/ui/Navigation";
import { useTaskApi } from "./provider/index.provider";

interface IProps {
  data: TaskData
}

export default function Task({
  data
}: IProps) {

  /** Context */

  const { onTaskEdit, onTaskDelete } = useTaskApi();

  /** States */
  
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [mode, setMode] = useState<'view' | 'edit'>('view');
  const [editForm, setEditForm] = useState<TaskData>(data);

  /** Handlers */
  
  const handleOpen = (evt: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(evt.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }
  
  return (
    <>
      <TaskContainer
        draggable
      >
        <CardHeader
          title={(
            <Typography
              className="taskboard__task_title"
              variant='body1'
              onClick={() => setMode('edit')}
            >
              {data.title}
            </Typography>
          )}
          action={(
            <>
              <IconButton
                size='small'
                onClick={handleOpen}
              >
                <MoreVertIcon fontSize='small' />
              </IconButton>

              <Menu
                id={`menu-toolbar-task-${data.viewIndex}`}
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
                    minWidth: '140px',
                  }
                }}
              >
                <MenuList sx={{ padding: '4px' }}>
                  <MenuItem
                    onClick={() => {
                      setMode('edit');
                      handleClose();
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
                    onClick={() => {
                      onTaskDelete(data.viewIndex, data.columnId);
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
          )}
        />
      </TaskContainer>

      {mode === 'edit' && (
        <>
          <TaskDrawerContainer
            anchor='right'
            open={true}
            onClose={() => setMode('view')}
          >
            {/** Drawer header */}
            <Box
              className="taskboard_task__drawer_edit_header"
            >
              <Typography
                className="taskboard_task__drawer_edit_title"
              >
                {data.title}
              </Typography>
              <Box
                className="taskboard_task__drawer_edit_header_actions"
              >
                <IconButton
                  color='error'
                  size='small'
                >
                  <DeleteIcon
                    fontSize='small'
                  />
                </IconButton>
                <IconButton
                  size='small'
                  onClick={() => {
                    setMode('view');
                    setEditForm(data);
                  }}
                >
                  <CloseIcon
                    fontSize='small'
                  />
                </IconButton>
              </Box>
            </Box>

            <Divider />

            <Stack
              direction='column'
              justifyContent='flex-start'
              gap={2}
              sx={{
                padding: '1em'
              }}
            >

              <FormControl>
                <InputLabel
                  htmlFor='task__title'
                >
                  Title
                </InputLabel>
                <OutlinedInput
                  id="task__title"
                  value={editForm.title}
                  onChange={(evt) => setEditForm({ ...editForm, title: evt.target.value })}
                  label="Title"
                />
              </FormControl>

              <FormControl>
                <InputLabel
                  htmlFor='task__description'
                >
                  Description
                </InputLabel>
                <OutlinedInput
                  id="task__description"
                  value={editForm.description}
                  onChange={(evt) => setEditForm({ ...editForm, description: evt.target.value })}
                  label="Description"
                  rows={5}
                  multiline
                />
              </FormControl>

              <Button
                variant='contained'
                color='primary'
                fullWidth
                onClick={() => {
                  onTaskEdit(data.columnId, data.viewIndex, editForm);
                  setMode('view');
                }}
              >
                Save
              </Button>

            </Stack>

          </TaskDrawerContainer>
        </>
      )}
    </>
  )
}