import { QueryClient, QueryClientProvider } from "react-query";

// Layouts
import { MainLayout } from "@layouts/index";
// Pages
import Login from "@pages/Login";
import Error from "@pages/Error";
// Router Functions
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Vault from "@/src/pages/vault/Vault";
import AddValut from "@/src/pages/vault/AddVault";
import AccountsTree from "@pages/AccountsTree";
import AllMangers from "@pages/allMangers/AllMangers";
import AddManger from "@pages/allMangers/AddManger";
import EditManger from "@pages/allMangers/EditManger";
import Countries from "@pages/Countries";
import Employees from "@pages/employees/Employees";
import EditEmployee from "@pages/employees/EditEmployee";
import AddEmployee from "@pages/employees/AddEmployee";
import EmployeesSalary from "@pages/EmployeesSalary";
import AddEmployeeSalary from "@pages/AddEmployeeSalary";
import ExpenseSection from "@pages/ExpenseSection";
import ExpenseValue from "@pages/ExpenseValue";

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
      {
        path: "/add-employees-salary",
        element: <AddEmployeeSalary />,
      },
      {
        path: "/expense-type-section",
        element: <ExpenseSection />,
      },
      {
        path: "/expense-value",
        element: <ExpenseValue />,
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
