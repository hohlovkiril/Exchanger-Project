import { Button, Menu, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const NavigationLinkContainer = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
}))

export const NavigationButtonContainer = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isActive' && prop !== 'withIcon',
})<{
  open: boolean;
  isActive?: true;
  withIcon?: true;
}>(({ theme, open, isActive, withIcon }) => ({
  variants: [
    {
      props: { open: true },
      style: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: '1em',
        fontSize: 'clamp(10px, 4vw, 12px)'
      },
    },
    {
      props: { open: true, isActive: undefined },
      style: {
        backgroundColor: theme.palette.action.disabledOpacity,
      },
    },
    {
      props: { open: true, isActive: true },
      style: {
        color: theme.palette.mode === 'light'
          ? theme.palette.common.black
          : theme.palette.common.white,
        backgroundColor: theme.palette.action.focus,
      },
    },
    {
      props: { open: false },
      style: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 'none',
        fontSize: 'clamp(8px, 2vw, 10px)'
      },
    },
    {
      props: { open: false, isActive: undefined },
      style: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        // backgroundColor: theme.palette.mode === 'light'
        //   ? 'rgba(245, 245, 245, .5)'
        //   : theme.palette.action.focus,
      },
    },
    {
      props: { open: false, isActive: true },
      style: {
        color: theme.palette.mode === 'light'
          ? theme.palette.common.white
          : theme.palette.common.black,
        backgroundColor: `${theme.palette.action.active}!important`
      }
    },
  ],

  display: 'flex',
  width: '100%',
  backdropFilter: !open ? 'blur(10px)' : 'none',
  textTransform: 'none',
  color: theme.palette.text.secondary,

  '& span': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: !open ? '150%' : 'auto',
  },

  '& .MuiButton-icon.MuiButton-endIcon': {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    right: open ? '5%' : '-10%',
  },

}))

export const NavigationMenuContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{
  open: boolean;
  isActive?: true;
}>(({ theme, open, isActive }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '.5em',
  paddingLeft: open ? '1em' : '',
  marginTop: isActive ? '1em' : '',
  marginBottom: isActive ? '1em' : '',
}))

export const NavigationPopUpMenuContainer = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    marginLeft: '.5em',
    minWidth: '200px',

    '& .MuiButtonBase-root.MuiMenuItem-root': {
      marginLeft: '.25em',
      marginRight: '.25em',
      borderRadius: '6px'
    }
  }
}))