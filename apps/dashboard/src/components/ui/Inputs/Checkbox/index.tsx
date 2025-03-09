import { CheckboxProps } from "@mui/material";
import { MuiCheckbox } from "./index.style";

interface IProps {

}

export default function Checkbox(props: IProps & CheckboxProps) {
  return (
    <>
      <MuiCheckbox
        {...props}
      />
    </>
  )
}