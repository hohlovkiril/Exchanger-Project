import { SelectProps } from "@mui/material";
import { MuiSelect } from "./index.style";

interface IProps {

}

export default function Select(props: IProps & SelectProps) {
  return (
    <>
      <MuiSelect
        {...props}
      >
        {props.children}
      </MuiSelect> 
    </>
  )
}