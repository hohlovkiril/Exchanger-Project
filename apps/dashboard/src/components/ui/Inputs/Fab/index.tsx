import { FabProps } from "@mui/material";
import { MuiFab } from "./index.style";

export interface IFabProps {}

export default function Fab(props: IFabProps & FabProps) {
  return (
    <MuiFab
      {...props}
    >
      {props.children}
    </MuiFab>
  )
}