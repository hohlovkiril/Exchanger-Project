import { BreadcrumbsProps } from "@mui/material";
import { BreadcrumbsContainer, MuiBreadcrumbs } from "./index.style";

interface IProps {
}

export default function Breadcrumbs(props: IProps & BreadcrumbsProps) {
  return (
    <>
      <BreadcrumbsContainer>
        <MuiBreadcrumbs
          {...props}
        >
          {props.children}
        </MuiBreadcrumbs>
      </BreadcrumbsContainer>
    </>
  )
}