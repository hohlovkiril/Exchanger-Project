import { RadioGroupProps, RadioProps } from "@mui/material";
import { MuiRadioGroup, MuiRadio } from "./index.style";

interface IRadioGroupProps {

}

interface IRadioProps {
}

export function RadioGroup(props: IRadioGroupProps & RadioGroupProps) {
  return (
    <>
      <MuiRadioGroup
        {...props}
      >
        {props.children}
      </MuiRadioGroup>
    </>
  )
}

export function Radio(props: IRadioProps & RadioProps) {
  return (
    <>
      <MuiRadio
        size={props.size || 'medium'}
        {...props}
      />
    </>
  )
}