import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router';

import { USER_ROLES } from '@/constants';
import { authLoader } from '@/utils';

const MainLayout = lazy(() => import('@/layouts/MainLayout'));

const Home = lazy(() => import('@/pages/Home'));
const Product = lazy(() => import('@/pages/Product'));
const Login = lazy(() => import('@/pages/Login'));
const Register = lazy(() => import('@/pages/Register'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: withSuspense(MainLayout),
    children: [
      {
        path: '/home',
        loader: authLoader([USER_ROLES.ADMIN.key, USER_ROLES.USER.key]),
        element: withSuspense(Home),
      },
      {
        path: 'products',
        loader: authLoader([USER_ROLES.ADMIN.key, USER_ROLES.USER.key]),
        element: withSuspense(Product),
      },
    ],
  },
  {
    path: '/login',
    element: withSuspense(Login),
  },
  {
    path: '/register',
    element: withSuspense(Register),
  },
  {
    path: '*',
    element: withSuspense(NotFound),
  },
]);
