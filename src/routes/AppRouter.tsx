import { QueryClient, QueryClientProvider } from "react-query";

// Layouts
import { MainLayout } from "@layouts/index";
// Pages
import Login from "@pages/Login";
import Error from "@pages/Error";
// Router Functions
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Vault from "@pages/Vault";
import AddValut from "@pages/AddVault";
import AccountsTree from "../pages/AccountsTree";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <p>Home</p>,
      },
      {
        path: "/vault",
        element: <Vault />,
      },
      {
        path: "/vault/add-new",
        element: <AddValut />,
      },
      {
        path: "/accounts-tree",
        element: <AccountsTree />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const queryClient = new QueryClient();
const AppRouter = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default AppRouter;
