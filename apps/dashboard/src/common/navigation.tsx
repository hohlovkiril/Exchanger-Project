import HomeIcon from '@mui/icons-material/Home';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PeopleIcon from '@mui/icons-material/People';
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
    title: 'Currencies',
    url: '/currencies',
    icon: <CurrencyBitcoinIcon />,
  },
  {
    kind: 'link',
    title: 'Rates',
    url: '/rates',
    icon: <PriceChangeIcon />,
  },
  {
    kind: 'link',
    title: 'Orders',
    url: '/orders',
    icon: <ReceiptIcon />,
  },
  {
    kind: 'link',
    title: 'Users',
    url: '/users',
    icon: <PeopleIcon />,
  },
]

export const SETTINGS_NAVIGATION: NavigationItemType[] = [
  {
    kind: 'link',
    title: 'General Settings',
    url: '/settings',
    icon: <SettingsIcon />
  }
]