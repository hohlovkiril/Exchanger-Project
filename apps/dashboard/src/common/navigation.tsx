import HomeIcon from '@mui/icons-material/Home';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SettingsIcon from '@mui/icons-material/Settings';

import { NavigationItemType } from "./types";

export const DASHBOARD_NAVIGATION: NavigationItemType[] = [
  {
    kind: 'header',
    label: 'Dashboard',
  },
  {
    kind: 'link',
    title: 'Home',
    url: '/',
    icon: <HomeIcon />
  },
  {
    kind: 'separator',
  },
  {
    kind: 'link',
    title: 'Currency',
    url: '/currency',
    icon: <CurrencyBitcoinIcon />,
  },
  {
    kind: 'link',
    title: 'Rate',
    url: '/rate',
    icon: <CurrencyExchangeIcon />,
  }
]

export const SETTINGS_NAVIGATION: NavigationItemType[] = [
  {
    kind: 'link',
    title: 'General Settings',
    url: '/settings',
    icon: <SettingsIcon />
  }
]