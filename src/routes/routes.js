import { lazy } from 'react';

const routes = [
  {
    path: 'dashboard',
    component: lazy(() => import('../views/Dashboard')),
    exact: true,
  },
  {
    path: 'users',
    component: lazy(() => import('../views/Users')),
    exact: true,
  },
];

export default routes;
