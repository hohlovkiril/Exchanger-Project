import { ButtonProps } from "@mui/material";
import { MuiButton } from "./index.style";
import { Tooltip } from "../../DataDisplay";

interface IProps {
  enableTooltip?: {
    title: string;
    placement?: "bottom" | "left" | "right" | "top" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start";
  },
}

export default function Button(props: ButtonProps & IProps) {
  return (
    <>
      {props.enableTooltip ? (
        <>
          <Tooltip
            title={props.enableTooltip.title}
            placement={props.enableTooltip.placement}
          >
            <MuiButton
              {...props}
              color={props.color || 'inherit'}
            >
              {props.children}
            </MuiButton>
          </Tooltip>
        </>
      ) : (
        <>
          <MuiButton
            {...props}
            color={props.color || 'inherit'}
          >
            {props.children}
          </MuiButton>
        </>
      )}
    </>
  )
}