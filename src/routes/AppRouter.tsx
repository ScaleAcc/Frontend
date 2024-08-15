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
import AllMangers from "../pages/AllMangers";
import AddManger from "../pages/AddManger";
import EditManger from "../pages/EditManger";
import Countries from "../pages/Countries";
import Employees from "../pages/Employees";
import EditEmployee from "../pages/EditEmployee";
import AddEmployee from "../pages/AddEmployee";
import EmployeesSalary from "../pages/EmployeesSalary";

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
      {
        path: "/all-mangers",
        element: <AllMangers />,
      },
      {
        path: "/add-manger",
        element: <AddManger />,
      },
      {
        path: "/edit-manger",
        element: <EditManger />,
      },
      {
        path: "/all-country",
        element: <Countries />,
      },
      {
        path: "/all-employees",
        element: <Employees />,
      },
      {
        path: "/edit-employee",
        element: <EditEmployee />,
      },
      {
        path: "/add-employee",
        element: <AddEmployee />,
      },
      {
        path: "/employees-salary",
        element: <EmployeesSalary />,
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
