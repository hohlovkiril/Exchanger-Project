import { TooltipProps } from "@mui/material";
import { MuiTooltip } from "./index.style";

interface IProps {

}

export default function Tooltip(props: IProps & TooltipProps) {
  return (
    <>
      <MuiTooltip
        {...props}
      >
        <div style={{ width: 'auto' }}>
          {props.children}
        </div>
      </MuiTooltip>
    </>
  )
}