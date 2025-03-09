import { AvatarProps } from "@mui/material";
import { MuiAvatar } from "./index.style";
import Badge from '../Badge'
import Tooltip from "../Tooltip";

interface IProps {
  type?: 'filled' | 'outlined';
  color?: 'default' | 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  enableBadge?: {
    content: number | string | React.ReactNode;
    color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
  },
  enableTooltip?: {
    title: string;
    placement?: "bottom" | "left" | "right" | "top" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start";
  },
}

export default function Avatar(props: IProps & AvatarProps) {
  return (
    <>
      {props.enableTooltip !== undefined ? (
        <>
          <Tooltip
            title={props.enableTooltip.title}
            placement={props.enableTooltip.placement || 'top'}
          >
            <div style={{ width: 'fit-content', height: 'fit-content' }}>
              {props.enableBadge ? (
                <>
                  <Badge
                    badgeContent={props.enableBadge.content}
                    color={props.enableBadge.color}
                  >
                    <MuiAvatar type={props.type || 'filled'} color={props.color || 'default'} {...props} />
                  </Badge>
                </>
              ) : (
                <>
                  <MuiAvatar type={props.type || 'filled'} color={props.color || 'default'} {...props} />
                </>
              )}
            </div>
          </Tooltip>
        </>
      ) : (
        <>
          {props.enableBadge ? (
            <>
              <Badge
                badgeContent={props.enableBadge.content}
                color={props.enableBadge.color}
              >
                <MuiAvatar type={props.type || 'filled'} color={props.color || 'default'} {...props} />
              </Badge>
            </>
          ) : (
            <>
              <MuiAvatar type={props.type || 'filled'} color={props.color || 'default'} {...props} />
            </>
          )}
        </>
      )}
    </>
  )
}