import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ children, isAuthenticated, ...rest }) => (
  <Route
    render={({ location }) => (isAuthenticated ? (
      children
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: location },
        }}
      />
    ))}
    {...rest}
  />
);
