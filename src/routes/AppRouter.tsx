// Layouts
import { MainLayout } from "@layouts/index";
// Pages
import Login from "@pages/Login";
// import Error from "@pages/Error";
// Router Functions
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement:<Error />,
    children: [
      {
        index: true,
        element: <p>Home</p>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
