import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AuthApi,
  StorageService,
} from '../services';
import { UserType } from "../common/types";

interface IAuthContext {
  isAuth: boolean;
  token?: string;
  user?: UserType;
  onLogin: (payload: any) => Promise<void>;
  onLogout: () => void;
}

interface IAuthProvider {
  children?: React.ReactNode;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {

  /** Context */
  
  const navigate = useNavigate();
  
  /** States */

  const [isAuth, setAuth] = useState<boolean>(
    StorageService.checkItem('access_token') === true
      ? true : false
  );
  const [user, setUser] = useState<UserType | undefined>(
    StorageService.checkItem('profile') === true
      ? StorageService.getItem('profile') as UserType
      : undefined
  );
  const [token, setToken] = useState<string | undefined>(
    StorageService.checkItem('access_token') === true
      ? StorageService.getItem('access_token') as string
      : undefined
  );

  /** Handlers */

  const handleLogin = async (payload: object) => {
    try {
      const { access_token } = await AuthApi.logIn(payload);
      const user = await AuthApi.validation(access_token);

      StorageService.setItem('access_token', access_token);
      StorageService.setItem('profile', user);

      setAuth(true);
      setUser(user);
      setToken(access_token);
      navigate('/');
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  const handleLogout = () => {
    StorageService.removeItem('access_token');
    StorageService.removeItem('profile');
    setAuth(false);
    setToken(undefined);
    setUser(undefined);
  }

  /** Effects */

  useEffect(() => {
    if (!token) {
      handleLogout();
    } else {
      AuthApi.validation(token)
        .then((userData) => {
          setUser(userData);
          StorageService.setItem('profile', userData);
        })
        .catch((err) => {
          console.log('API Provider');
          console.log(err);
          handleLogout();
        })
    }
  }, [token])

  /** Render */

  return (
    <>
      <AuthContext.Provider value={{ isAuth, token, user, onLogin: handleLogin, onLogout: handleLogout }}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Hook useAuth must be wrapped in AuthProvider');
  }

  return context;
}