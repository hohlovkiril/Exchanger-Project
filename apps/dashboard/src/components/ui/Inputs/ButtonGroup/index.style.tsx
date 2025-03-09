import { ButtonGroup, styled } from "@mui/material";

export const MuiButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  variants: [
    {
      props: { variant: 'contained', color: undefined },
      style: {
        '& .MuiButtonGroup-firstButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black,
        },
        '& .MuiButtonGroup-middleButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black,
        },
        color: theme.palette.mode === 'light'
          ? theme.palette.common.white
          : theme.palette.common.black,
        '& .MuiTypography-root': {
          color: theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black,
        }
      }
    },
    {
      props: { variant: 'outlined' },
      style: {
        background: 'transperent'
      }
    },
    {
      props: { variant: 'contained', color: 'primary' },
      style: {
        '& .MuiButtonGroup-firstButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black,
        },
        '& .MuiButtonGroup-middleButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black,
        },
        '& .MuiButtonBase-root': {
          background: theme.palette.mode === 'light'
            ? theme.palette.primary.light
            : theme.palette.primary.dark,
          },
        color: theme.palette.mode === 'light'
          ? theme.palette.common.white
          : theme.palette.common.black,
        '& .MuiTypography-root': {
          color: theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black,
        }
      }
    },
    {
      props: { variant: 'outlined', color: 'primary' },
      style: {
        '& .MuiButtonGroup-firstButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.primary.light
            : theme.palette.primary.dark,
          color: theme.palette.mode === 'light'
              ? theme.palette.primary.light
              : theme.palette.primary.dark,
          '& .MuiTypography-root': {
            color: theme.palette.mode === 'light'
              ? theme.palette.primary.light
              : theme.palette.primary.dark,
          }
        },
        '& .MuiButtonGroup-middleButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.primary.light
            : theme.palette.primary.dark,
            color: theme.palette.mode === 'light'
                ? theme.palette.primary.light
                : theme.palette.primary.dark,
            '& .MuiTypography-root': {
              color: theme.palette.mode === 'light'
                ? theme.palette.primary.light
                : theme.palette.primary.dark,
            }
        },
        '& .MuiButtonGroup-lastButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.primary.light
            : theme.palette.primary.dark,
            color: theme.palette.mode === 'light'
                ? theme.palette.primary.light
                : theme.palette.primary.dark,
            '& .MuiTypography-root': {
              color: theme.palette.mode === 'light'
                ? theme.palette.primary.light
                : theme.palette.primary.dark,
            }
        },
      }
    },
    {
      props: { variant: 'contained', color: 'info' },
      style: {
        '& .MuiButtonGroup-firstButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black,
        },
        '& .MuiButtonGroup-middleButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black,
        },
        '& .MuiButtonBase-root': {
          background: theme.palette.mode === 'light'
            ? theme.palette.info.light
            : theme.palette.info.dark,
          },
        color: theme.palette.mode === 'light'
          ? theme.palette.common.white
          : theme.palette.common.black,
        '& .MuiTypography-root': {
          color: theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black,
        }
      }
    },
    {
      props: { variant: 'outlined', color: 'info' },
      style: {
        '& .MuiButtonGroup-firstButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.info.light
            : theme.palette.info.dark,
          color: theme.palette.mode === 'light'
              ? theme.palette.info.light
              : theme.palette.info.dark,
          '& .MuiTypography-root': {
            color: theme.palette.mode === 'light'
              ? theme.palette.info.light
              : theme.palette.info.dark,
          }
        },
        '& .MuiButtonGroup-middleButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.info.light
            : theme.palette.info.dark,
            color: theme.palette.mode === 'light'
                ? theme.palette.info.light
                : theme.palette.info.dark,
            '& .MuiTypography-root': {
              color: theme.palette.mode === 'light'
                ? theme.palette.info.light
                : theme.palette.info.dark,
            }
        },
        '& .MuiButtonGroup-lastButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.info.light
            : theme.palette.info.dark,
            color: theme.palette.mode === 'light'
                ? theme.palette.info.light
                : theme.palette.info.dark,
            '& .MuiTypography-root': {
              color: theme.palette.mode === 'light'
                ? theme.palette.info.light
                : theme.palette.info.dark,
            }
        },
      }
    },
    {
      props: { variant: 'contained', color: 'secondary' },
      style: {
        '& .MuiButtonGroup-firstButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black,
        },
        '& .MuiButtonGroup-middleButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black,
        },
        '& .MuiButtonBase-root': {
          background: theme.palette.mode === 'light'
            ? theme.palette.secondary.light
            : theme.palette.secondary.dark,
          },
        color: theme.palette.mode === 'light'
          ? theme.palette.common.white
          : theme.palette.common.black,
        '& .MuiTypography-root': {
          color: theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black,
        }
      }
    },
    {
      props: { variant: 'outlined', color: 'secondary' },
      style: {
        '& .MuiButtonGroup-firstButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.secondary.light
            : theme.palette.secondary.dark,
          color: theme.palette.mode === 'light'
              ? theme.palette.secondary.light
              : theme.palette.secondary.dark,
          '& .MuiTypography-root': {
            color: theme.palette.mode === 'light'
              ? theme.palette.secondary.light
              : theme.palette.secondary.dark,
          }
        },
        '& .MuiButtonGroup-middleButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.secondary.light
            : theme.palette.secondary.dark,
            color: theme.palette.mode === 'light'
                ? theme.palette.secondary.light
                : theme.palette.secondary.dark,
            '& .MuiTypography-root': {
              color: theme.palette.mode === 'light'
                ? theme.palette.secondary.light
                : theme.palette.secondary.dark,
            }
        },
        '& .MuiButtonGroup-lastButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.secondary.light
            : theme.palette.secondary.dark,
            color: theme.palette.mode === 'light'
                ? theme.palette.secondary.light
                : theme.palette.secondary.dark,
            '& .MuiTypography-root': {
              color: theme.palette.mode === 'light'
                ? theme.palette.secondary.light
                : theme.palette.secondary.dark,
            }
        },
      }
    },
    {
      props: { variant: 'contained', color: 'success' },
      style: {
        '& .MuiButtonGroup-firstButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black,
        },
        '& .MuiButtonGroup-middleButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black,
        },
        '& .MuiButtonBase-root': {
          background: theme.palette.mode === 'light'
            ? theme.palette.success.light
            : theme.palette.success.dark,
          },
        color: theme.palette.mode === 'light'
          ? theme.palette.common.white
          : theme.palette.common.black,
        '& .MuiTypography-root': {
          color: theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black,
        }
      }
    },
    {
      props: { variant: 'outlined', color: 'success' },
      style: {
        '& .MuiButtonGroup-firstButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.success.light
            : theme.palette.success.dark,
          color: theme.palette.mode === 'light'
              ? theme.palette.success.light
              : theme.palette.success.dark,
          '& .MuiTypography-root': {
            color: theme.palette.mode === 'light'
              ? theme.palette.success.light
              : theme.palette.success.dark,
          }
        },
        '& .MuiButtonGroup-middleButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.success.light
            : theme.palette.success.dark,
            color: theme.palette.mode === 'light'
                ? theme.palette.success.light
                : theme.palette.success.dark,
            '& .MuiTypography-root': {
              color: theme.palette.mode === 'light'
                ? theme.palette.success.light
                : theme.palette.success.dark,
            }
        },
        '& .MuiButtonGroup-lastButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.success.light
            : theme.palette.success.dark,
            color: theme.palette.mode === 'light'
                ? theme.palette.success.light
                : theme.palette.success.dark,
            '& .MuiTypography-root': {
              color: theme.palette.mode === 'light'
                ? theme.palette.success.light
                : theme.palette.success.dark,
            }
        },
      }
    },
    {
      props: { variant: 'contained', color: 'warning' },
      style: {
        '& .MuiButtonGroup-firstButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black,
        },
        '& .MuiButtonGroup-middleButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black,
        },
        '& .MuiButtonBase-root': {
          background: theme.palette.mode === 'light'
            ? theme.palette.warning.light
            : theme.palette.warning.dark,
          },
        color: theme.palette.mode === 'light'
          ? theme.palette.common.white
          : theme.palette.common.black,
        '& .MuiTypography-root': {
          color: theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black,
        }
      }
    },
    {
      props: { variant: 'outlined', color: 'warning' },
      style: {
        '& .MuiButtonGroup-firstButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.warning.light
            : theme.palette.warning.dark,
          color: theme.palette.mode === 'light'
              ? theme.palette.warning.light
              : theme.palette.warning.dark,
          '& .MuiTypography-root': {
            color: theme.palette.mode === 'light'
              ? theme.palette.warning.light
              : theme.palette.warning.dark,
          }
        },
        '& .MuiButtonGroup-middleButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.warning.light
            : theme.palette.warning.dark,
            color: theme.palette.mode === 'light'
                ? theme.palette.warning.light
                : theme.palette.warning.dark,
            '& .MuiTypography-root': {
              color: theme.palette.mode === 'light'
                ? theme.palette.warning.light
                : theme.palette.warning.dark,
            }
        },
        '& .MuiButtonGroup-lastButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.warning.light
            : theme.palette.warning.dark,
            color: theme.palette.mode === 'light'
                ? theme.palette.warning.light
                : theme.palette.warning.dark,
            '& .MuiTypography-root': {
              color: theme.palette.mode === 'light'
                ? theme.palette.warning.light
                : theme.palette.warning.dark,
            }
        },
      }
    },
    {
      props: { variant: 'contained', color: 'error' },
      style: {
        '& .MuiButtonGroup-firstButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black,
        },
        '& .MuiButtonGroup-middleButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black,
        },
        '& .MuiButtonBase-root': {
          background: theme.palette.mode === 'light'
            ? theme.palette.error.light
            : theme.palette.error.dark,
          },
        color: theme.palette.mode === 'light'
          ? theme.palette.common.white
          : theme.palette.common.black,
        '& .MuiTypography-root': {
          color: theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black,
        }
      }
    },
    {
      props: { variant: 'outlined', color: 'error' },
      style: {
        '& .MuiButtonGroup-firstButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.error.light
            : theme.palette.error.dark,
          color: theme.palette.mode === 'light'
              ? theme.palette.error.light
              : theme.palette.error.dark,
          '& .MuiTypography-root': {
            color: theme.palette.mode === 'light'
              ? theme.palette.error.light
              : theme.palette.error.dark,
          }
        },
        '& .MuiButtonGroup-middleButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.error.light
            : theme.palette.error.dark,
            color: theme.palette.mode === 'light'
                ? theme.palette.error.light
                : theme.palette.error.dark,
            '& .MuiTypography-root': {
              color: theme.palette.mode === 'light'
                ? theme.palette.error.light
                : theme.palette.error.dark,
            }
        },
        '& .MuiButtonGroup-lastButton': {
          borderColor: theme.palette.mode === 'light'
            ? theme.palette.error.light
            : theme.palette.error.dark,
            color: theme.palette.mode === 'light'
                ? theme.palette.error.light
                : theme.palette.error.dark,
            '& .MuiTypography-root': {
              color: theme.palette.mode === 'light'
                ? theme.palette.error.light
                : theme.palette.error.dark,
            }
        },
      }
    }
  ]
}))