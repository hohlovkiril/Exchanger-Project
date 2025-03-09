import { DividerProps } from "@mui/material";
import { MuIDivider } from "./index.style";

export interface IDividerProps {

}

export default function Divider(props: IDividerProps & DividerProps) {
  return (
    <MuIDivider
      {...props}
    >
      {props.children}
    </MuIDivider>
  )
}