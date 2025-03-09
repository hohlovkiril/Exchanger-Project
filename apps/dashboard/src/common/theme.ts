import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    info: {
      light: 'rgb(53, 211, 209)',
      main: 'rgb(44, 178, 176)',
      dark: 'rgb(36, 155, 153)',
    },
    primary: {
      light: 'rgb(75, 150, 225)',
      main: 'rgb(50, 125, 200)',
      dark: 'rgb(25, 100, 175)',
    },
    background: {
      default: 'rgba(240, 240, 240, 1)',
      paper: 'rgba(255, 255, 255, 1)'
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          variants: [
            {
              style: {
                color: 'rgb(10, 10, 10)'
              }
            },
            {
              props: { color: 'error' },
              style: {
                color: 'rgb(175, 15, 15)',
              }
            }
          ]
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: '0px 0px 6px rgba(0, 0, 0, .5)',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              style: {
                textTransform: 'none',
              }
            },
            {
              props: { color: 'inherit' },
              style: {
                color: 'rgb(0, 0, 0)',
              },
            },
            {
              props: { color: 'inherit', variant: 'contained' },
              style: {
                color: 'rgb(230, 230, 230)',
                background: 'rgba(0, 0, 0, .75)'
              }
            },
          ]
        }
      }
    }
  }
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    info: {
      light: 'rgb(53, 211, 209)',
      main: 'rgb(44, 178, 176)',
      dark: 'rgb(36, 155, 153)',
    },
    primary: {
      light: 'rgb(100, 175, 250)',
      main: 'rgb(75, 150, 225)',
      dark: 'rgb(50, 125, 200)',
    },
    background: {
      default: 'rgba(55, 55, 55, 1)',
      paper: 'rgba(25, 25, 25, 1)',
    },
    text: {
      primary: 'rgb(255, 255, 255)',
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          variants: [
            {
              style: {
                color: 'rgb(245, 245, 245)'
              }
            },
            {
              props: { color: 'error' },
              style: {
                color: 'rgb(175, 15, 15)',
              }
            }
          ]
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              style: {
                textTransform: 'none',
              }
            },
            {
              props: { color: 'inherit' },
              style: {
                color: 'rgb(255, 255, 255)',
              },
            },
            {
              props: { color: 'inherit', variant: 'contained' },
              style: {
                color: 'rgb(25, 25, 25)',
                background: 'rgb(255, 255, 255)'
              }
            },
          ]
        }
      }
    }
  }
})