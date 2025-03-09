import { SwitchProps } from "@mui/material";
import { MuiSwitch } from "./index.style";

interface IProps {

}

export default function Switch(props: IProps & SwitchProps) {
  return (
    <>
      <MuiSwitch
        {...props}
      />
    </>
  )
}