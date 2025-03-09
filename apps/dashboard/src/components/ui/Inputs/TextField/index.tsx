import { TextFieldProps } from "@mui/material";
import { MuiTextField } from "./index.style";

interface IProps {

}

export default function TextField(props: IProps & TextFieldProps) {
  return (
    <>
      <MuiTextField
        {...props}
      />
    </>
  )
}