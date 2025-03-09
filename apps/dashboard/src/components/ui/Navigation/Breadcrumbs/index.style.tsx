import { Box, Breadcrumbs, styled } from "@mui/material";

export const BreadcrumbsContainer = styled(Box)(({ theme }) => ({
  '& .MuiTypography-root.page__title': {
    marginTop: '.5em',
    marginBottom: '1em',
    fontSize: 'clamp(22px, 2vw, 28px)',
  }
}))

export const MuiBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({

}))