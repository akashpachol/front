import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserRouters from './UserRouter';



const Routes = () => {
    const userRoutes = UserRouters();
 
  const router = createBrowserRouter(userRoutes);

  return <RouterProvider router={router} />;
};

export default Routes;