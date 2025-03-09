import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RouteType } from "../common/types"
import { redirectPrivateRoute, redirectPublicRoute } from '../common/routes';

interface IProps {
  isPrivate?: boolean;
  routes: RouteType[];
}

export const NestedRouter: React.FC<IProps> = ({
  isPrivate,
  routes
}) => {
  return (
    <Routes>
      {routes.map((route, key) => (
        <Route
          key={key}
          path={Array.isArray(route.element)
            ? `${route.path}/*`
            : route.path
          }
          element={Array.isArray(route.element)
            ? <NestedRouter routes={route.element} />
            : route.element
          }
        />
      ))}

      <Route
        path={isPrivate
          ? redirectPrivateRoute.path
          : redirectPublicRoute.path}
        element={isPrivate
          ? redirectPrivateRoute.element as React.ReactNode
          : redirectPublicRoute.element as React.ReactNode}
      />
      
    </Routes>
  )
}