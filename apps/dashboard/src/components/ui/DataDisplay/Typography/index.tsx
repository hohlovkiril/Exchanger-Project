import { TypographyProps } from "@mui/material";
import { MuiTypography } from "./index.style";

interface IProps {

}

export default function Typography(props: IProps & TypographyProps) {
  return (
    <>
      <MuiTypography
        {...props}
      >
        {props.children}
      </MuiTypography>
    </>
  )
}