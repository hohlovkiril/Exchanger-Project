import { Toolbar } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import { DesktopHeaderContainer, MobileHeaderContainer } from "./index.style";
import {
  IconButton
} from '../../../components/ui/Inputs'
import {
  Stack,
} from '../../../components/ui/Surfaces'
import {
  LanguageWidget,
  MessageWidget,
  NotificationWidget, 
  ProfileWidget,
  SearchWidget,
  ThemeWidget
} from "../../../components/widgets/Header";

interface IDesktopProps {
  enableDrawer?: { open: boolean, onClick: () => void, };
  enableSearch?: true;
  enableThemeToggle?: true;
  enableLanguage?: true;
  enableNotification?: true;
  enableMessage?: true;
  enableProfile?: true;
}

interface IMobileProps {
  enableDrawer?: { open: boolean, onClick: () => void, };
  enableSearch?: true;
  enableThemeToggle?: true;
  enableLanguage?: true;
  enableNotification?: true;
  enableMessage?: true;
  enableProfile?: true;
  onClick: () => void;
}

export const DesktopHeader: React.FC<IDesktopProps> = ({
  enableDrawer,
  enableSearch,
  enableThemeToggle,
  enableLanguage,
  enableNotification,
  enableMessage,
  enableProfile,
}) => {
  return (
    <>
      <DesktopHeaderContainer
        position='fixed'
        open={enableDrawer !== undefined ? enableDrawer.open : true}
      >
        <Toolbar>
          <Stack direction='row' justifyContent='space-between' sx={{ width: '100%' }}>

            {/** Draw toggle drawer */}
            {enableDrawer && (
              <Stack direction='row' gap={1}>
                <IconButton onClick={enableDrawer.onClick}>
                  {enableDrawer.open ? <MenuOpenIcon /> : <MenuIcon />}
                </IconButton>
              </Stack>
            )}

            {/** Draw header components */}
            <Stack direction='row' justifyContent='flex-end' gap={1} sx={{ width: '100%' }}>
              {enableSearch && <SearchWidget />}
              {enableThemeToggle && <ThemeWidget />}
              {enableLanguage && <LanguageWidget />}
              {enableNotification && <NotificationWidget />}
              {enableMessage && <MessageWidget />}
              {enableProfile && <ProfileWidget />}
            </Stack>

          </Stack>
        </Toolbar>
      </DesktopHeaderContainer>
    </>
  )
}

export const MobileHeader: React.FC<IMobileProps> = ({
  enableDrawer,
  enableSearch,
  enableThemeToggle,
  enableLanguage,
  enableNotification,
  enableMessage,
  enableProfile,
  onClick
}) => {
  return (
    <>
      <MobileHeaderContainer position='fixed'>
        <Toolbar>
          <Stack direction='row' justifyContent='space-between' sx={{ width: '100%' }}>

            <Stack direction='row' gap={1}>
              <IconButton onClick={onClick}>
                <MenuIcon />
              </IconButton>
            </Stack>

            <Stack direction='row' justifyContent='flex-end' gap={1} sx={{ width: '100%' }}>
              {enableSearch && <SearchWidget />}
              {enableThemeToggle && <ThemeWidget />}
              {enableLanguage && <LanguageWidget />}
              {enableNotification && <NotificationWidget />}
              {enableMessage && <MessageWidget />}
              {enableProfile && <ProfileWidget />}
            </Stack>

          </Stack>
        </Toolbar>
      </MobileHeaderContainer>
    </>
  )
}