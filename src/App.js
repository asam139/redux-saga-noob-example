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

const LoginPage = lazy(() => import('./views/LoginPage'));

export const App = () => {
  // Getting isAuthenticated store value from Authentication slice.
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

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
