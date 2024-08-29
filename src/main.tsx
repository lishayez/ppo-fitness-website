import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import { createRoot } from 'react-dom/client';
import './main.scss';

const router = createBrowserRouter(routes);

createRoot(document.querySelector('#root')!).render(
  <RouterProvider router={router}></RouterProvider>
);
