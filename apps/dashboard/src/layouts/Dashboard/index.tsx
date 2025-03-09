import React, { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/material";

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import {
  StorageService,
} from '../../services'
import { LayoutContainer, DesktopPageContainer, MobilePageContainer } from "./index.style";
import { DesktopHeader, MobileHeader } from "./Header";
import { DesktopNavigation, MobileNavigation } from "./Navigation";
import { MEDIA_QUERIES } from "../../common/constants";
import { useLayoutApi } from "../../providers/layout.provider";
import {
  Breadcrumbs
} from '../../components/ui/Navigation'
import {
  CircularProgress
} from "../../components/ui/Feedback";
import {
  Box,
  Stack,
  Container
} from '../../components/ui/Surfaces'
import { Typography } from "../../components/ui/DataDisplay";

interface IProps {
  children?: React.ReactNode;
}

export const DashboardLayout: React.FC<IProps> = ({ children }) => {
  /** Context */

  const { t } = useTranslation();
  const { pathname } = useLocation();
  const layoutApi = useLayoutApi();
  const isMobileResolution = useMediaQuery(`(max-width: ${MEDIA_QUERIES.tablet})`);

  /** States */

  const [pageLoaded, setPageLoaded] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(
    !layoutApi.layoutDrawer
      ? false
      : StorageService.checkItem('drawer_open')
      ? StorageService.getItem('drawer_open') : true
  );
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  /** Handlers */

  const handleOpen = () => {
    StorageService.setItem('drawer_open', true);
    setOpen(true);
  }

  const handleClose = () => {
    StorageService.setItem('drawer_open', false);
    setOpen(false);
  }

  useLayoutEffect(() => {
    const timer = setTimeout(() => setPageLoaded(true), 250);

    return () => {
      clearTimeout(timer);
      setPageLoaded(false);
    }
  }, [pathname])

  return (
    <>
      {/** Meta configuration */}

      <LayoutContainer>
        {isMobileResolution ? (
          <>
            {/** Mobile header */}
            <MobileHeader
              // enableSearch
              enableThemeToggle
              // enableLanguage
              enableNotification
              enableMessage
              enableProfile
              onClick={() => setMobileOpen(true)}
            />
            
            {/** Mobile navigation */}
            <MobileNavigation
              open={mobileOpen} onClose={() => setMobileOpen(false)}
              headerUrl="/"
            />
          </>
        ) : (
          <>
            {/** Desktop header */}
            <DesktopHeader
              enableDrawer={layoutApi.layoutDrawer ? { open, onClick: open ? handleClose : handleOpen } : undefined}
              // enableSearch
              enableThemeToggle
              enableLanguage
              enableNotification
              enableMessage
              enableProfile
            />
            {/** Desktop navigation */}
            <DesktopNavigation
              enableDrawer={layoutApi.layoutDrawer ? { open } : undefined}
              headerUrl="/"
            />
          </>
        )}

        {isMobileResolution && (
          <MobilePageContainer>
            {pageLoaded ? (
              <>
                {layoutApi.pageTitleStatus && (
                  <Container maxWidth='xl'>
                    {/** Page Title */}
                    {layoutApi.pageTitle !== undefined && (layoutApi.pageTitlePlacement === undefined || layoutApi.pageTitlePlacement === 'top') && (
                      <Typography
                        className="page__title"
                      >
                        {t(`page_title_by_path_${pathname}`, { defaultValue: layoutApi.pageTitle })}
                      </Typography>
                    )}
                  </Container>
                )}

                <Container maxWidth='xl'>
                  <Stack
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                  >
                    {/** Breadcrumbs */}
                    {layoutApi.isBreadcrumbsEnable && (
                      <Breadcrumbs
                        separator={<NavigateNextIcon />}
                        sx={{ marginRight: 'auto' }}
                      >
                        {layoutApi.getBreadcrumbs.map((_, key) => (
                          <React.Fragment key={key}>{_}</React.Fragment>
                        ))}
                      </Breadcrumbs>
                    )}

                    {/** Page Header Actions */}
                    {layoutApi.pageActions && layoutApi.pageActions.length > 0 && (
                      <Stack
                        className="page__header_actions"
                        direction='row'
                        justifyContent='flex-end'
                        gap={1}
                        sx={{ marginLeft: 'auto' }}
                      >
                        {layoutApi.pageActions && layoutApi.pageActions.map((component, key) => (
                          <React.Fragment key={key}>
                            {component}
                          </React.Fragment>
                        ))}
                      </Stack>
                    )}
                  </Stack>
                </Container>
                
                {children}
              </>
            ) : (
              <>
                {/** Page loader */}
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <CircularProgress
                  />
                </Box>
              </>
            )}
          </MobilePageContainer>
        )}

        {!isMobileResolution && (
          <DesktopPageContainer open={open}>
            {pageLoaded ? (
              <>
                {layoutApi.pageTitleStatus && (
                  <Container maxWidth='xl'>
                    {/** Page Title */}
                    {layoutApi.pageTitle !== undefined && (layoutApi.pageTitlePlacement === undefined || layoutApi.pageTitlePlacement === 'top') && (
                      <Typography
                        className="page__title"
                      >
                        {t(`page_title_by_path_${pathname}`, { defaultValue: layoutApi.pageTitle })}
                      </Typography>
                    )}
                  </Container>
                )}

                <Container maxWidth='xl'>
                  <Stack
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                  >
                    {/** Breadcrumbs */}
                    {layoutApi.isBreadcrumbsEnable && (
                      <Breadcrumbs
                        separator={<NavigateNextIcon />}
                        sx={{ marginRight: 'auto' }}
                      >
                        {layoutApi.getBreadcrumbs.map((_, key) => (
                          <React.Fragment key={key}>{_}</React.Fragment>
                        ))}
                      </Breadcrumbs>
                    )}

                    {/** Page Header Actions */}
                    {layoutApi.pageActions && layoutApi.pageActions.length > 0 && (
                      <Stack
                        className="page__header_actions"
                        direction='row'
                        justifyContent='flex-end'
                        gap={1}
                        sx={{ marginLeft: 'auto' }}
                      >
                        {layoutApi.pageActions && layoutApi.pageActions.map((component, key) => (
                          <React.Fragment key={key}>
                            {component}
                          </React.Fragment>
                        ))}
                      </Stack>
                    )}
                  </Stack>
                </Container>
                
                {children}
              </>
            ) : (
              <>
                {/** Page loader */}
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <CircularProgress
                  />
                </Box>
              </>
            )}
          </DesktopPageContainer>
        )}

      </LayoutContainer>
    </>
  )
}