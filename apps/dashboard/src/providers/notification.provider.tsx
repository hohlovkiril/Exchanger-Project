import { createContext, useContext, useEffect, useState } from "react";
import { Socket, io } from 'socket.io-client'
import { useAuth } from "./auth.provider";
import { NotificationType } from "../common/types";
import { useSnackbar } from "notistack";
import { NotificationVariants } from "@shared/enums";
import { WS_SERVER_NOTIFICATION_URI } from "../common/constants";

interface INotificationContext {
  notifications: NotificationType[];
}

interface INotificationProvider {
  children?: React.ReactNode;
}

export const NotificationContext = createContext<INotificationContext | undefined>(undefined);

export const NotificationProvider: React.FC<INotificationProvider> = ({ children }) => {

  /** Context */

  const { enqueueSnackbar } = useSnackbar();
  const { token } = useAuth();

  /** States */

  const [socket, setSocket] = useState<Socket | null>(null);
  const [data, setData] = useState<NotificationType[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {

    if (!token) return;

    if (!socket) {

      setSocket(io(WS_SERVER_NOTIFICATION_URI, {
        extraHeaders: {
          authorization: token,
        }
      }));
    } else {
      if (!socket.connected) {
        socket.connect();
      }

      if (!loaded) {
        socket.emit('get.notifications', {});
      }

      socket.on('notifications', (evt) => {
        console.info('[NotificationProvider] - [NewEvent] - notifications');
        setData([...evt.data]);
        setLoaded(true);
      })

      socket.on('newNotification', (evt) => {
        console.info('[NotificationProvider] - [NewEvent] - newNotification');
        enqueueSnackbar(evt.text, {
          variant: evt.variant === NotificationVariants.Success ? 'success'
            : evt.variant === NotificationVariants.Warning ? 'warning'
            : evt.variant === NotificationVariants.Error ? 'error'
            : 'info',
          autoHideDuration: 5000,
        });
        setData([evt, ...data]);
      })
    }

    return () => {
      socket?.off('notifications');
      socket?.off('newNotification');
      socket?.disconnect();
    }
  }, [
    token,
    socket,
    data,
    loaded,
    enqueueSnackbar,
  ])

  return (
    <NotificationContext.Provider
      value={{
        notifications: data,
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotificationApi = () => {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error('useNotificationApi must be wrapped in NotificationProvider');
  }

  return context;
}