import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoute = ({ children, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={
            ({ location }) => (!isAuthenticated ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: '/users',
                  state: { from: location },
                }}
              />
            ))
        }
  />
);
