import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import BaseLayout from './layout/BaseLayout';
import ErrorPage from './error-page';
import Dashboard from './routes/dashboard/Dashboard';
import UserList from './routes/user/UserList';
import UserView from './routes/user/UserView';
import UserEdit from './routes/user/UserEdit';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/user',
        element: <UserList />,
      },
      {
        path: '/user/:id',
        element: <UserView />,
      },
      {
        path: '/user/:id/edit',
        element: <UserEdit />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
