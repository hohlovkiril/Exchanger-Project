import { useState } from "react";
import {  IconButtonProps } from "@mui/material";
import { MuiIconButton } from "./index.style";
import {
  Badge,
  Tooltip
} from '../../DataDisplay';

interface IProps {
  variant?: 'contained' | 'outlined',
  hoverColor?: 'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  enableBadge?: {
    content: number | string;
    color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
  },
  enableTooltip?: {
    title: string;
    placement?: "bottom" | "left" | "right" | "top" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start";
  },
}

export default function IconButton(props: IconButtonProps & IProps) {

  /** States  */

  const [isHover, setHover] = useState<boolean>(false);

  return (
    <>
      {props.enableTooltip ? (
        <>
          <Tooltip
            title={props.enableTooltip.title}
            placement={props.enableTooltip.placement}
          >
            <MuiIconButton
              {...props}
              color={props.hoverColor && isHover ? props.hoverColor : props.color ? props.color : 'default'}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {props.enableBadge ? (
                <Badge
                  badgeContent={props.enableBadge.content}
                  color={props.enableBadge.color}
                >
                  {props.children}
                </Badge>
              ) : props.children}
            </MuiIconButton>
          </Tooltip>
        </>
      ) : (
        <>
          <div>
            <MuiIconButton
              {...props}
              color={props.hoverColor && isHover ? props.hoverColor : props.color ? props.color : 'default'}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {props.enableBadge ? (
                <Badge
                  badgeContent={props.enableBadge.content}
                  color={props.enableBadge.color}
                >
                  {props.children}
                </Badge>
              ) : props.children}
            </MuiIconButton>
          </div>
        </>
      )}
    </>
  )
}