import { lazy } from 'react';

const routes = [
  {
    path: 'login',
    component: lazy(() => import('../views/LoginView')),
    exact: true,
    isPublic: true,
  },
  {
    path: 'users',
    component: lazy(() => import('../views/UsersView')),
    exact: true,
  },
];

export default routes;
