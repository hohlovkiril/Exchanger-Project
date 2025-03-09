import { ToggleButtonProps } from "@mui/material";
import { MuiToggleButton } from "./index.style";

interface IProps {

}

export default function ToggleButton(props: IProps & ToggleButtonProps) {
  return (
    <>
      <MuiToggleButton
        {...props}
      >
        {props.children}
      </MuiToggleButton>
    </>
  )
}