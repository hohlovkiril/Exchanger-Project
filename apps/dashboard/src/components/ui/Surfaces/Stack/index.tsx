import { StackProps } from "@mui/material";
import { MuiStack } from "./index.style";

export interface IStackProps {}

export default function Stack(props: IStackProps & StackProps) {
  return (
    <MuiStack
      {...props}
    >
      {props.children}
    </MuiStack>
  )
}