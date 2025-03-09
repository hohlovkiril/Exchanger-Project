import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  StorageService,
} from '../services'
import { RoutesPathnameMapType } from "../common/types";
import { parseRoutesPathnameMap } from "../common/utils";
import { ROUTES } from "../common/routes";
import {
  Chip,
} from '../components/ui/DataDisplay'

export const LAYOUT_BREADCRUMBS_STATUS_KEY = 'layout_breadcrumbs_status';

interface ILayoutContext {
  pageTitle?: string;
  setPageTitle: (title: string | undefined) => void;

  pageTitlePlacement: 'top' | 'bottom';
  setPageTitlePlacement: (placement: 'top' | 'bottom') => void;

  pageTitleStatus: boolean;
  setPageTitleStatus: (status: boolean) => void;

  pageActions?: any[];
  addPageAction: (actions: React.ReactNode) => void;
  clearPageActions: () => void;

  isBreadcrumbsEnable: boolean;
  routesPathnamesMap: RoutesPathnameMapType;
  getBreadcrumbs: any[];
  setBreadcrumbsStatus: (status: boolean) => void;

  layoutDrawer: boolean;
}

interface ILayoutProvider {
  children?: React.ReactNode;
}

export const LayoutContext = createContext<ILayoutContext | undefined>(undefined);

export const LayoutProvider: React.FC<ILayoutProvider> = ({
  children
}) => {
  
  /** Context */

  const location = useLocation()
  const { t } = useTranslation();

  /** States */
  
  const [, forceUpdate] = useState<number>(0);

  const [pageTitle, setPageTitle] = useState<string | undefined>(undefined);
  const [pageTitlePlacement, setPageTitlePlacement] = useState<'top' | 'bottom'>('top');
  const [pageTitleStatus, setPageTitleStatus] = useState<boolean>(true);

  const [isBreadcrumbsEnable, setBreadcrumbsEnable] = useState<boolean>(
    StorageService.checkItem(LAYOUT_BREADCRUMBS_STATUS_KEY)
      ? StorageService.getItem(LAYOUT_BREADCRUMBS_STATUS_KEY) : true
  );

  /** Refs */

  const routesPathnamesMap = useRef<RoutesPathnameMapType>({});
  const pageActions = useRef<React.ReactNode[]>([]);

  /** Callbacks */

  const callbackAddPageActions = useCallback((actions: React.ReactNode) => {
    pageActions.current.push(actions);
    forceUpdate((prev) => prev + 1);
  }, []);

  const callbackClearPageActions = useCallback(() => {
    pageActions.current = [];
    forceUpdate((prev) => prev + 1);
  }, [])

  /** Effects */

  useEffect(() => {
    if (routesPathnamesMap.current) {
      parseRoutesPathnameMap(routesPathnamesMap.current, ROUTES);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (routesPathnamesMap.current[location.pathname]) {
      setPageTitle(routesPathnamesMap.current[location.pathname].pageTitle);
    }
  }, [location.pathname])

  /** Vars */
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbs = [];

  if (pathnames.length > 0) {
    if (location.pathname !== '/') {
      getBreadcrumbs.push(
        <Link
          to='/'
          color='inherit'
        >
          <Chip
            label={t('page_title_by_path_/', { defaultValue: 'Dashboard' })}
            variant='filled'
          />
        </Link>
      )
    }

    routesPathnamesMap.current && pathnames.map((path, key) => {
      const last = key === pathnames.length - 1;
      const to: string = `/${pathnames.slice(0, key + 1).join('/')}`;

      if (routesPathnamesMap.current[to]) {
        if (last) {
          getBreadcrumbs.push(
            <Chip
              key={key}
              icon={<>{routesPathnamesMap.current[to].breadcrumbIcon}</>}
              variant='outlined'
              label={t(`page_breadcrumb_by_path_${to}`, { defaultValue: routesPathnamesMap.current[to].breadcrumbLabel })}
            />
          );
        } else {
          getBreadcrumbs.push(
            <Link
              key={key}
              to={to}
              color='primary'
            >
              <Chip
                icon={<>{routesPathnamesMap.current[to].breadcrumbIcon}</>}
                label={t(`page_breadcrumb_by_path_${to}`, { defaultValue: routesPathnamesMap.current[to].breadcrumbLabel })}
                variant='filled'
              />
            </Link>
          )
        }
      } else if (!routesPathnamesMap.current[to]) {
        Object.keys(routesPathnamesMap.current).forEach((_key) => {
          if (routesPathnamesMap.current[_key].regex) {
            if (routesPathnamesMap.current[_key].regex.test(location.pathname)) {
              const dd = routesPathnamesMap.current[_key];

              if (last) {
                getBreadcrumbs.push(
                  <Chip
                    key={key}
                    icon={<>{dd.breadcrumbIcon}</>}
                    variant='outlined'
                    label={t(`page_breadcrumb_by_path_${dd.regex}`, { defaultValue: dd.breadcrumbLabel })}
                  />
                )
              }
            }
          }
        })
      }

      return null;
    })
  }
         
  return (
    <LayoutContext.Provider value={{
      pageTitle,
      setPageTitle,

      pageTitlePlacement,
      setPageTitlePlacement,

      pageTitleStatus,
      setPageTitleStatus,

      pageActions: pageActions.current,
      addPageAction: callbackAddPageActions,
      clearPageActions: callbackClearPageActions,

      isBreadcrumbsEnable,
      routesPathnamesMap: routesPathnamesMap.current,
      getBreadcrumbs,
      setBreadcrumbsStatus: setBreadcrumbsEnable,

      layoutDrawer: true,
    }}>
      {children}
    </LayoutContext.Provider>
  )
}

export const useLayoutApi = () => {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error('useLayoutApi must be wrapped in LayoutProvider');
  }

  return context;
}