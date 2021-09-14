import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import './App.scss';
import ProtectedRoutes from './routes/ProtectedRoutes';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';
import { isAuthenticatedSelector } from './selectors/auth';

const LoginPage = lazy(() => import('./views/LoginPage'));

export const App = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PublicRoute path="/login" isAuthenticated={isAuthenticated}>
            <LoginPage />
          </PublicRoute>
          <PrivateRoute path="/" isAuthenticated={isAuthenticated}>
            <ProtectedRoutes />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Router>
  );
};
