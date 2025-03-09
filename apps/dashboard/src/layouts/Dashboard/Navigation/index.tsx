import React from "react";
import { useNavigate } from "react-router-dom";
import { Drawer } from "@mui/material";

import { NavigationContainer, NavigationHeaderContainer } from "./index.style";
import { DASHBOARD_NAVIGATION, SETTINGS_NAVIGATION } from "../../../common/navigation";
import { MobileNavigationItem, NavigationItem } from "./NavigationItem";
import {
  List,
  Typography
} from '../../../components/ui/DataDisplay'
import {
  Box,
  Stack,
} from '../../../components/ui/Surfaces'

interface IHeaderProps {
  open: boolean;
  logo: React.ReactNode | string;
  title: string;
  url?: string;
}

interface IDesktopProps {
  headerUrl?: string;
  enableDrawer?: {
    open: boolean;
  }
}

interface IMobileProps {
  headerUrl?: string;
  open: boolean;
  onClose: () => void;
}

const NavigationHeader: React.FC<IHeaderProps> = ({
  open,
  logo,
  title,
  url
}) => {

  /** Context */

  const navigate = useNavigate();

  return (
    <NavigationHeaderContainer
      open={open}
      sx={{
        cursor: url ? 'pointer' : 'default',
      }}
      onClick={() => url ? navigate(url) : null}
    >
      
      {typeof logo === 'string' ? (
        <img alt="LOGOTYPE" src="https://www.freeiconspng.com/thumbs/logo-design/rainbow-logo-design-transparent-0.png" height={36} />
      ) : logo}
      
      {open && (
        <Typography>
          {title}
        </Typography>
      )}

    </NavigationHeaderContainer>
  )
}

export const DesktopNavigation: React.FC<IDesktopProps> = ({
  enableDrawer,
  headerUrl
}) => {
  return (
    <>
      <NavigationContainer
        variant='permanent'
        open={enableDrawer !== undefined ? enableDrawer.open : true}
      >
        <NavigationHeader
          open={enableDrawer ? enableDrawer.open : true}
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWZ_IVJqoEqdL1luLXoO0d2VZQN2M-eVSZw&s"
          title='Template'
          url={headerUrl}
        />

        <Stack
          direction='column'
          justifyContent='space-between'
          gap={1}
          sx={{ height: '100%' }}
        >
          {/** Dashboard navigation */}
          <Stack
            direction='column'
            justifyContent='flex-start'
            gap={1}
          >
            {DASHBOARD_NAVIGATION.map((nav, key) => (
              <React.Fragment key={key}>
                <NavigationItem
                  open={enableDrawer !== undefined ? enableDrawer.open : true}
                  item={nav}
                />
              </React.Fragment>
            ))}
          </Stack>
          
          {/** System navigation */}
          <Stack
            direction='column'
            justifyContent='flex-start'
            gap={1}
          >
            {SETTINGS_NAVIGATION.map((nav, key) => (
              <React.Fragment key={key}>
                <NavigationItem
                  open={enableDrawer !== undefined ? enableDrawer.open : true}
                  item={nav}
                />
              </React.Fragment>
            ))}
          </Stack>

        </Stack>

      </NavigationContainer>
    </>
  )
}

export const MobileNavigation: React.FC<IMobileProps> = ({
  headerUrl,
  open,
  onClose
}) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
    >
      <Box
        sx={{
          minWidth: '300px',
        }}
        role='presentation'
      >
        <NavigationHeader
          open={true}
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWZ_IVJqoEqdL1luLXoO0d2VZQN2M-eVSZw&s"
          title='Template CRM'
          url={headerUrl}
        />

        <List>
          {DASHBOARD_NAVIGATION.map((nav, key) => (
            <MobileNavigationItem
              key={key}
              item={nav}
              onClose={onClose}
            />
          ))}
        </List>
      </Box>
    </Drawer>
  )
}