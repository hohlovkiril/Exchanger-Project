import { ButtonGroupProps } from "@mui/material";
import { MuiButtonGroup } from "./index.style";

interface IProps {

}

export default function ButtonGroup(props: IProps & ButtonGroupProps) {
  return (
    <MuiButtonGroup
      variant={props.variant || 'contained'}
      color={props.color || 'inherit'}
      {...props}
    >
      {props.children}
    </MuiButtonGroup>
  )
}