import { BoxProps } from "@mui/material";
import { MuiBox } from "./index.style";

export interface IBoxProps {}

export default function Box(props: IBoxProps & BoxProps) {
  return (
    <MuiBox
      {...props}
    >
      {props.children}
    </MuiBox>
  )
}