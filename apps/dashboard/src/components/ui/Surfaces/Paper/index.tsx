import { PaperProps } from "@mui/material";
import { MuiPaper } from "./index.style";

export interface IPaperProps {}

export default function Paper(props: IPaperProps & PaperProps) {
  return (
    <MuiPaper
      {...props}
    >
      {props.children}
    </MuiPaper>
  )
}