import { CardContentProps, CardHeaderProps, CardProps } from "@mui/material";
import { MuiCard, MuiCardContent, MuiCardHeader } from "./index.style";

interface ICardProps {
  rounded?: true;
}

interface ICardHeaderProps {

}

interface ICardContentProps {

}

export function Card(props: ICardProps & CardProps) {
  return (
    <>
      <MuiCard
        {...props}
      >
        {props.children}
      </MuiCard>
    </>
  )
}

export function CardHeader(props: ICardHeaderProps & CardHeaderProps) {
  return (
    <>
      <MuiCardHeader
        {...props}
      />
    </>
  )
}

export function CardContent(props: ICardContentProps & CardContentProps) {
  return (
    <>
      <MuiCardContent
        {...props}
      >
        {props.children}
      </MuiCardContent>
    </>
  )
}