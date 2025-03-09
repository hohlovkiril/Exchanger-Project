import { createContext, useContext, useState } from "react";
import { PaletteMode, ThemeProvider as MuiThemeProvider } from "@mui/material";

import {
  StorageService,
} from '../services'
import { darkTheme, lightTheme } from "../common/theme";

interface IThemeContext {
  theme: PaletteMode,
  handleToggle: (save?: true) => void;
}

interface IThemeProvider {
  children?: React.ReactNode;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);;

export const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {

  /** States */

  const [theme, setTheme] = useState<PaletteMode>(
    StorageService.checkItem('active_theme') === true
      ? StorageService.getItem('active_theme') as PaletteMode
      : 'dark'
  );

  /** Handlers */
  
  const handleToggle = (save?: true) => {

    if (save) {
      StorageService.setItem('active_theme', theme === 'light' ? 'dark' : 'light');
    }

    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, handleToggle }}>
        <MuiThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          {children}
        </MuiThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('Hook useTheme must be wrapped in ThemeProvider');
  }

  return context;
}