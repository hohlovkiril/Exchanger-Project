import { useLayoutEffect } from "react";

import {
  StorageService,
} from '../../services'
import { useTheme } from "../../providers/theme.provider";

interface IProps {
  children?: React.ReactNode;
}

export const AuthenticationLayout: React.FC<IProps> = ({ children }) => {

  /** Context */

  const { theme, handleToggle } = useTheme();

  /** Effects */

  useLayoutEffect(() => {
    if (theme === 'dark') handleToggle();

    return () => {
      if (StorageService.checkItem('active_theme')) {
        if (StorageService.getItem('active_theme') === 'dark') {
          handleToggle();
        }
      }
    }
  }, [theme, handleToggle])

  return (
    <>
      {children}
    </>
  )
}