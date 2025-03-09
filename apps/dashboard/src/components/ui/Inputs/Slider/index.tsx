import { SliderProps } from "@mui/material";
import { MuiSlider } from "./index.style";

interface IProps {

}

export default function Slider(props: IProps & SliderProps) {
  return (
    <>
      <MuiSlider
        {...props}
      />
    </>
  )
}