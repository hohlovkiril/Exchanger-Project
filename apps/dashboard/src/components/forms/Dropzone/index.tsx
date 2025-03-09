import React, { useRef, useState } from "react";
import { ImageList, ImageListItem } from "@mui/material";

import ImageIcon from '@mui/icons-material/Image';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

import { DropzoneContainer, UploadContainer } from "./index.style";
import {
  Button,
  IconButton,
} from '../../ui/Inputs';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '../../ui/DataDisplay'
import {
  Stack,
} from '../../ui/Surfaces'

type UploadedType = {
  files?: Array<File>;
  file?: File;
}

type AcceptFileType = 
  '.jpg' |
  '.jpeg' |
  '.png';

type AcceptUploadType = 
  'image/' |
  'audio/' | 
  'video/' |
  'application/';

interface IPlaceholderProps {
  multiple?: true;
}

interface IProps {
  type: 'file' | 'avatar';
  uploadedViewType?: 'list' | 'grid';
  accept?: AcceptFileType | AcceptFileType[] | AcceptUploadType | AcceptUploadType[];
  multiple?: true;
}

const DropzonePlaceholder: React.FC<IPlaceholderProps> = ({
  multiple
}) => {
  return (
    <>
      <img
        alt=""
        src="/static/images/upload-icon.png"
        style={{
          display: 'block',
          objectFit: 'cover',
          width: '150px',
        }}
      />
      <Stack
        direction='column'
        gap={1}
        sx={{
          textAlign: 'center'
        }}
      >
        <Typography
          variant='h6'
        >
          Drag & Drop or Select {multiple ? 'Files' : 'File'}
        </Typography>
        <Typography
          variant='caption'
          color='textSecondary'
        >
          Drop files here or click browser thorough your machine
        </Typography>
      </Stack>
    </>
  )
}

export default function Dropzone({
  type,
  uploadedViewType,
  accept,
  multiple,
}: IProps) {
  
  /** States */

  const [uploaded, setUploaded] = useState<UploadedType>({});

  /** Refs */

  const inputRef = useRef<HTMLInputElement | null>(null);

  /** Handlers */

  const handleOnClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }

  const handleOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (multiple) {
      const files = evt.currentTarget.files;

      if (files) {
        if (uploaded.files && uploaded.files.length > 0) {
          setUploaded({ files: [...uploaded.files, ...Array.from(files)]})
        } else {
          setUploaded({ files: Array.from(files) });
        }
      }
    } else {

      if (evt.currentTarget.files !== null) {
        const file = evt.currentTarget.files[0];

        setUploaded({ file: file });
      }
    }
  }

  const handleOnRemove = (inx: number) => {
    if (multiple && uploaded.files) {
      setUploaded({ files: uploaded.files.filter((_, key) => key !== inx) });
    }
  }

  const handleOnClear = () => {
    if (multiple) {
      setUploaded({ files: [] });
    } else {
      setUploaded({ file: undefined });
    }
  }

  return (
    <>
      <DropzoneContainer>
        <UploadContainer
          onClick={handleOnClick}
        >
          {type === 'file' ? (
            <>
              {multiple ? (
                <>
                  <DropzonePlaceholder
                    multiple={multiple}
                  />
                </>
              ) : (
                <>
                  {uploaded.file ? (
                    <img
                      alt={uploaded.file.name}
                      src={URL.createObjectURL(uploaded.file)}
                      style={{
                        width: 'auto',
                        height: '100%',
                        maxHeight: '300px',
                      }}
                    />
                  ) : (
                    <DropzonePlaceholder
                      multiple={multiple}
                    />
                  )}
                </>
              )}
            </>
          ) : null}
          <input
            ref={inputRef}
            type='file'
            accept={accept && typeof accept === 'object'
              ? accept.join(', ')
              : accept && typeof accept === 'string'
              ? accept
              : undefined
            }
            style={{ display: 'none', overflow: 'hidden' }}
            multiple={multiple}
            onChange={handleOnChange}
          />
        </UploadContainer>

        {multiple && uploaded.files && uploaded.files.length > 0 && (
          <>
            {uploadedViewType === 'list' ? (
              <>
                <List
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '.5em',
                  }}
                >
                  {uploaded.files.map((file, key) => (
                    <ListItem
                      key={key}
                      secondaryAction={(
                        <IconButton
                          onClick={() => handleOnRemove(key)}
                        >
                          <CloseIcon />
                        </IconButton>
                      )}
                      sx={{
                        border: '1px solid rgba(140, 140, 140, .5)',
                        borderRadius: '4px'
                      }}
                    >
                      <ListItemIcon>
                        {file.type.startsWith('image/') ? (
                          <ImageIcon />
                        ) : (file.type.startsWith('audio/') || file.type.startsWith('video/')) ? (
                          <SlideshowIcon />
                        ) : (
                          <InsertDriveFileIcon />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={file.name}
                        secondary={file.size}
                        sx={{
                          width: '100%'
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </>
            ) : (
              <>
                <ImageList
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    flexWrap: 'wrap'
                  }}
                >
                  {uploaded.files.map((file, key) => (
                    <ImageListItem
                      key={key}
                      sx={{
                        width: '80px',
                        height: '80px',
                        border: '1px solid rgb(240, 240, 240)',
                        borderRadius: '4px',
                        position: 'relative',
                      }}
                    >
                      <img
                        alt={file.name}
                        srcSet={URL.createObjectURL(file)}
                        src={URL.createObjectURL(file)}
                        loading="lazy"
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: '0',
                          right: '0'
                        }}
                      >
                        <IconButton
                          color='error'
                          variant='contained'
                          size='small'
                          sx={{
                            width: '16px',
                            height: '16px',
                          }}
                          onClick={() => handleOnRemove(key)}
                        >
                          <CloseIcon
                            sx={{
                              width: '12px',
                              height: '12px'
                            }}
                            fontSize='small'
                          />
                        </IconButton>
                      </div>
                    </ImageListItem>
                  ))}
                </ImageList>
              </>
            )}
          </>
        )}

        {((multiple && uploaded.files && uploaded.files?.length) || (!multiple && uploaded.file))  && (
          <Stack
            direction='row'
            justifyContent='flex-end'
            gap={1}
          >
            <Button
              color='primary'
              variant='contained'
              startIcon={<CloudUploadIcon />}
            >
              Upload
            </Button>
            <Button
              color='error'
              variant='contained'
              onClick={handleOnClear}
              startIcon={<DeleteIcon />}
            >
              Remove {multiple && 'All'}
            </Button>
          </Stack>
        )}
      </DropzoneContainer>
    </>
  )
}