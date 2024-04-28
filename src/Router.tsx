import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Messages } from './pages/Messages.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/messages',
    element: <Messages />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
