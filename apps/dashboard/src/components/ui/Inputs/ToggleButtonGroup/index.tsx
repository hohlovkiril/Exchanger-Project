import { ToggleButtonGroupProps } from "@mui/material";
import { MuiToggleButtonGroup } from "./index.style";

interface IProps {

}

export default function ToggleButtonGroup(props: IProps & ToggleButtonGroupProps) {
  return (
    <MuiToggleButtonGroup
      {...props}
    >
      {props.children}
    </MuiToggleButtonGroup>
  )
}