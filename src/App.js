import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router, Redirect,
  Switch,
} from 'react-router-dom';
import './App.scss';
import { PublicRoute } from './routes/PublicRoute';
import { isAuthenticatedSelector } from './selectors/auth';
import routes from './routes/routes';
import { PrivateRoute } from './routes/PrivateRoute';
import LoadingSpinner from './components/LoadingSpinner';

export const App = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          {
            routes.map(({
              component: Component, path, exact, isPublic,
            }, index) => {
              const Route = isPublic ? PublicRoute : PrivateRoute;
              return (
                <Route
                  isAuthenticated={isAuthenticated}
                  path={`/${path}`}
                  key={index}
                  exact={exact}
                >
                  <Component />
                </Route>
              );
            })
          }
          <Redirect from="*" to="/users" />
        </Switch>
      </Suspense>
    </Router>
  );
};
