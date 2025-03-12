import { useState } from "react";

import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import InfoIcon from '@mui/icons-material/Info';

import { useNotificationApi } from "../../providers/notification.provider"
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "../../components/ui/DataDisplay";
import { NotificationVariants } from "@shared/enums";
import { formatPastDate } from "../../components/widgets/Header/utils";
import { Button, IconButton } from "../../components/ui/Inputs";
import { Box } from "../../components/ui/Surfaces";

export default function NotificationPage() {

  /** Context */

  const { notifications } = useNotificationApi();
  const [rowsView, setRowsView] = useState<number>(5);

  /** Handlers */

  const handleOnClickViewMore = () => {
    setRowsView(rowsView + 5);
  }

  /** Vars */

  const visibleRows = [...notifications]
    .slice(0, rowsView);

  return (
    <>
      <Box
        sx={{
          flex: 1,
          padding: '1em',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <List
          sx={{
            '& .MuiListItemButton-root': {
              borderRadius: '10px',
            }
          }}
        >
          {visibleRows.map((noty, key) => (
            <ListItem
              key={key}
              secondaryAction={(
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              )}
            >
              <ListItemButton>
                <ListItemIcon>
                  {noty.variant === NotificationVariants.Success ? (
                    <CheckCircleOutlineIcon color='success' />
                  ) : noty.variant === NotificationVariants.Warning ? (
                    <WarningAmberIcon color='warning' />
                  ) : noty.variant === NotificationVariants.Error ? (
                    <ReportGmailerrorredIcon color='error' />
                  ) : (
                    <InfoIcon color='primary' />
                  )}
                </ListItemIcon>
                  <ListItemText
                    primary={noty.text}
                    secondary={formatPastDate(new Date(noty.createdAt))}
                    sx={{
                      '& .MuiListItemText-primary': {
                        fontSize: 'clamp(10px, 2vw, 12px)',
                      },
                      '& .MuiListItemText-secondary': {
                        fontSize: 'clamp(8px, 2vw, 10px)',
                      },
                    }}
                  />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {visibleRows.length < notifications.length && (
          <Button
            variant='outlined'
            fullWidth
            onClick={handleOnClickViewMore}
          >
            View More
          </Button>
        )}

      </Box>
    </>
  )
}