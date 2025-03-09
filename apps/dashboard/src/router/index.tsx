import React from 'react';
import { Route, Routes } from "react-router-dom"
import { DashboardLayout } from "../layouts/Dashboard";
import { RouteType } from "../common/types";
import { NestedRouter } from "./NestedRouter";
import { AuthenticationLayout } from '../layouts/Authentication';
import { useAuth } from '../providers/auth.provider';
import { redirectPrivateRoute, redirectPublicRoute } from '../common/routes';

interface IProps {
  routes: RouteType[];
}

export const Router: React.FC<IProps> = ({ routes }) => {
  
  /** Context */
  
  const { isAuth } = useAuth();

  /** Vars */

  const privateRoutes = routes.filter((route) => route.isPrivate === true);
  const publicRoutes = routes.filter((route) => route.isPrivate === undefined);

  return (
    <>
      {/* <BrowserRouter> */}

        {isAuth ? (
          <DashboardLayout>
            <Routes>
              {privateRoutes.map((route: RouteType, key) => (
                <Route
                  key={key}
                  path={Array.isArray(route.element)
                    ? `${route.path}/*`
                    : route.path}
                  element={Array.isArray(route.element)
                    ? <NestedRouter routes={route.element} isPrivate />
                    : route.element}
                />
              ))}

              <Route path={redirectPrivateRoute.path} element={redirectPrivateRoute.element as React.ReactNode} />
            </Routes>
          </DashboardLayout>
        ) : (
          <AuthenticationLayout>
            <Routes>
              {publicRoutes.map((route: RouteType, key) => (
                <Route
                  key={key}
                  path={Array.isArray(route.element)
                    ? `${route.path}/*`
                    : route.path}
                  element={Array.isArray(route.element)
                    ? <NestedRouter routes={route.element} />
                    : route.element}
                />
              ))}

              <Route path={redirectPublicRoute.path} element={redirectPublicRoute.element as React.ReactNode} />
            </Routes>
          </AuthenticationLayout>
        )}
      
      {/* </BrowserRouter> */}
    </>
  )
}