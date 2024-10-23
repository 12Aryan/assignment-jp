// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './layout/Layout';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />,
    children: [
      {
        path: "/", 
        element: <div>default</div>,
      },
      {
        path: "/order-list",
        element: <div>order list</div>,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
