import { BadgeProps } from "@mui/material";
import { MuiBadge } from "./index.style";

interface IProps {

}

export default function Badge(props: IProps & BadgeProps) {
  return (
    <>
      <MuiBadge
        {...props}
      >
        {props.children}
      </MuiBadge>
    </>
  )
}