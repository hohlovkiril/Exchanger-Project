import { ContainerProps } from "@mui/material";
import { MuiContainer } from "./index.style";

export interface IContainerProps {}

export default function Container(props: IContainerProps & ContainerProps) {
  return (
    <MuiContainer
      {...props}
    >
      {props.children}
    </MuiContainer>
  )
}