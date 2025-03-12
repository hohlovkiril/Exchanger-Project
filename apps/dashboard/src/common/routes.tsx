import { Navigate } from "react-router-dom";
import { RouteType } from "../common/types";
import LogInPage from "../pages/LogIn";
import HomePage from "../pages/Home";
import {
  CurrencyListPage,
  CurrencyCreatePage,
  CurrencyEditPage,
} from '../pages/Currency';
import {
  RateListPage,
  RateCreatePage,
  RateEditPage,
} from '../pages/Rate';
import {
  OrderListPage,
} from '../pages/Order';
import {
  UserListPage,
} from '../pages/User'
import NotificationPage from "../pages/Notification";
import ProfilePage from "../pages/Profile";
import SettingsPage from "../pages/Settings";
import NotFoundPage from "../pages/NotFound";

export const ROUTES: RouteType[] = [
  // Unauthorization
  {
    index: true,
    title: 'Login',
    segment: '/log-in',
    path: '/log-in',
    element: <LogInPage />
  },
  // Authorization
  {
    index: true,
    isPrivate: true,
    title: 'Home',
    segment: '/',
    path: '/',
    element: <HomePage />
  },
  {
    isPrivate: true,
    title: 'Currencies',
    breadcrumb: {
      label: 'Currencies'
    },
    segment: '/currencies',
    path: '/currencies',
    element: [
      {
        title: 'Currencies',
        segment: '/',
        path: '/',
        element: <CurrencyListPage />,
      },
      {
        title: 'Create New Currency',
        segment: '/create',
        path: '/create',
        element: <CurrencyCreatePage />,
      },
      {
        title: 'Edit',
        breadcrumb: {
          label: 'Edit',
        },
        segment: '/edit/:id',
        regex: /^\/currencies\/edit\/\d+$/,
        path: '/edit/:id',
        element: <CurrencyEditPage />,
      }
    ]
  },
  {
    isPrivate: true,
    title: 'Rates',
    breadcrumb: {
      label: 'Rates',
    },
    segment: '/rates',
    path: '/rates',
    element: [
      {
        title: 'Rates',
        segment: '/',
        path: '/',
        element: <RateListPage />,
      },
      {
        title: 'Create New Rate',
        segment: '/create',
        path: '/create',
        element: <RateCreatePage />,
      },
      {
        title: 'Edit',
        breadcrumb: {
          label: 'Edit',
        },
        segment: '/edit/:id',
        regex: /^\/rates\/edit\/\d+$/,
        path: '/edit/:id',
        element: <RateEditPage />,
      }
    ]
  },
  {
    isPrivate: true,
    title: 'Orders',
    segment: '/orders',
    path: '/orders',
    element: [
      {
        title: 'Orders',
        segment: '',
        path: '/',
        element: <OrderListPage />,
      },
    ]
  },
  {
    isPrivate: true,
    title: 'Users',
    segment: '/users',
    path: '/users',
    element: [
      {
        title: 'Users',
        segment: '',
        path: '/',
        element: <UserListPage />,
      },
    ]
  },
  {
    isPrivate: true,
    title: 'Notifications',
    segment: '/notifications',
    path: '/notifications',
    element: [
      {
        title: '',
        segment: '/',
        path: '/',
        element: <NotificationPage />,
      },
    ]
  },
  {
    isPrivate: true,
    title: 'Basic Account',
    breadcrumb: {
      label: 'Account Profile',
    },
    segment: '/profile',
    path: '/profile',
    element: [
      {
        isPrivate: true,
        title: '',
        segment: '/',
        path: '/',
        element: <ProfilePage />
      },
      {
        isPrivate: true,
        title: 'Change Password',
        segment: '/change-password',
        path: '/change-password',
        element: <ProfilePage />
      },
      {
        isPrivate: true,
        title: 'Account Settings',
        breadcrumb: {
          label: 'Setting'
        },
        segment: '/settings',
        path: '/settings',
        element: <ProfilePage />
      }
    ]
  },
  {
    isPrivate: true,
    title: 'Settings',
    segment: '/settings',
    path: '/settings',
    element: <SettingsPage />
  },
]

export const redirectPublicRoute: RouteType = {
  isPrivate: true,
  title: 'PublicRedirect',
  segment: '*',
  path: '*',
  element: <Navigate to='/log-in' />
}

export const redirectPrivateRoute: RouteType = {
  ...redirectPublicRoute,
  isPrivate: true,
  element: <NotFoundPage />
  // element: <Navigate to='/' />
}