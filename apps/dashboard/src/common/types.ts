import React from "react";

import {
  CurrencyType,
  NotificationVariants,
  OrderStatus,
} from '@shared/enums';
import {
  RecipientData,
  AnonymUser,
} from '@shared/types'

/** Router types */

/**
 * index - Default index page
 * isPrivate - Only authorizated
 * title - Page Title
 * breadcrumb - Breadcrumb params
 * segmet - default check for breadcrumb
 * regex - if used url params
 * path - url path
 * element - page or array pages
 */
export type RouteType = {
  index?: true;
  isPrivate?: true;
  title: string;
  breadcrumb?: {
    label: string;
    icon?: React.ReactNode;
  };
  segment: string;
  regex?: RegExp;
  path: string;
  element: React.ReactNode | RouteType[];
}

export type RoutesPathnameMapType = {
  [path: string]: {
    regex?: RegExp;
    pageTitle: string;
    breadcrumbLabel: string;
    breadcrumbIcon?: React.ReactNode;
  };
}

/** Localization types */

export type Localization = {
  [LangCode: string]: {
    translation: Translation;
  }
}

export type Translation = Record<string, string>;

/** Navigation types */

export type NavigationHeaderType = {
  kind: 'header';
  label: string;
  translationKey?: string;
}

export type NavigationSeparatorType = {
  kind: 'separator';
  element?: React.ReactNode;
}

export type NavigationLinkType = {
  kind: 'link';
  title: string;
  url: string;
  menuUrlEnabled?: true;
  icon?: React.ReactNode;
  children?: NavigationLinkType[];
}

export type NavigationItemType = NavigationHeaderType | NavigationSeparatorType | NavigationLinkType;

/** Authorization Form types */

export type OAuthProviderConfig = {
  icon: React.ReactNode;
  label: string;
  url: string;
}

export type CredentialsConfig = {
  fields: CredentialsField[];
}

export type CredentialsField = {
  formKey: string;
  label: string;
  type: string;
  autoFocus?: boolean;
  required?: true;
  defaultValue?: string;
  validation?: (value: any) => boolean;
}

/**
 * Data types
 */

export type NotificationType = {
  id: number;
  variant: NotificationVariants;
  text: string;
  checked: boolean;
  createdAt: Date;
}

export type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  username: string;
  email: string;
  phone: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  lastOnlineAt: Date;
}

export type CurrencyDataType = {
  id: number;
  label: string;
  symbol: string;
  apiSymbol?: string;
  precision: number;
  scale: number;
  regex?: string;
  type: CurrencyType;
  minimal: number;
  reserve: number;
  buyRates: RateDataType[];
  sellRates: RateDataType[];
}

export type RateDataType = {
  id: number;
  symbol: string;
  status: boolean;
  price: number;
  autoUpdatePrice: boolean;
  clientCurrencyBuy: CurrencyDataType;
  clientCurrencySell: CurrencyDataType;
}

export type OrderDataType = {
  id: number;
  uuid: string;
  status: OrderStatus;
  recipientData: RecipientData;
  rateCacheData: string;
  clientBuy: number;
  clientSell: number;
  client?: UserType;
  clientAnonym?: AnonymUser;
  clientCacheData: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Mail App Types
 */

export type MailType = {
  id: string;
  threadId: string;
  labelIds: string[];
  snippet: string;
  historyId: string;
  internalDate: string;
  payload: MessagePartType;
  sizeEstimate: number;
  raw: string;
}

export type MessagePartType = {
  partId: string;
  mimeType: string;
  filename: string;
  headers: MessageHeader[];
  body: MessagePartBody[];
  parts: MessagePartType[];
}

export type MessageHeader = {
  name: string;
  value: string;
}

export type MessagePartBody = {
  attachmentId: string;
  size: number;
  data: string;
}

export type NewMailFormType = {
  to?: string;
  subject?: string;
  message?: string;
  errorMessage?: string;
}
