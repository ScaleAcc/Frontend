import { useQuery } from "react-query";
import { decrypt } from "@/src/utils/Utilty";
import { data as emploteesType } from "@/src/tables/employeesTable/Columns";
function useGetAllEmployees() {
  return useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const token = localStorage.getItem("token") || "";
      const res = await fetch(
        "https://trombetta.mzservices.online/public/api/employees",
        {
          headers: {
            authorization: `Bearer ${decrypt(
              token,
              import.meta.env.VITE_TOKEN_SECRET
            )}`,
          },
        }
      );
      const data = await res.json();
      console.log(data.data.data);
      return data.data.data as emploteesType[];
    },
  });
}
export default useGetAllEmployees;
