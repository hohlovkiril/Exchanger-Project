import React from 'react';
import { Box, BoxProps, Divider, MenuProps, PaperProps } from "@mui/material";
import { MuiMenu, MuiMenuPaper } from "./index.style";

interface IProps {
  menuHeader?: {
    content: React.ReactNode;
    boxProps?: BoxProps;
  };
  paperProps?: PaperProps;
}

export default function Menu(props: IProps & MenuProps) {
  return (
    <>
      <MuiMenu
        {...props}      
      >
        <MuiMenuPaper
          {...props.paperProps}
        >
          
          {props.menuHeader && (
            <>
              <Box
                {...props.menuHeader.boxProps}
              >
                {props.menuHeader.content}
              </Box>

              <Divider />
            </>
          )}

          {props.children}
        
        </MuiMenuPaper>
      </MuiMenu>
    </>
  )
}