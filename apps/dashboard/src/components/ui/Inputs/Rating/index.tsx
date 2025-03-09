import { RatingProps } from "@mui/material";
import { MuiRating } from "./index.style";

interface IProps {

}

export default function Rating(props: IProps & RatingProps) {
  return (
    <>
      <MuiRating
        {...props}
      />
    </>
  )
}