import { ChipProps } from "@mui/material";
import { MuiChip } from "./index.style";

interface IProps {

}

export default function Chip(props: IProps & ChipProps) {
  return (
    <>
      <MuiChip
        {...props}
      >
        {props.children}
      </MuiChip>
    </>
  )
}