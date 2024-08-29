import { redirect, type RouteObject } from 'react-router-dom';
import { Home } from '../pages';

export default [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/*',
    loader: () => redirect('/'),
  },
] as RouteObject[];
