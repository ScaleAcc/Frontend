import { useQuery } from "react-query";
import { decrypt } from "@/src/utils/Utilty";
import { data as dataType } from "@/src/tables/ExpenseTypeTable/Columns";
function useGetExpenseType() {
  return useQuery({
    queryKey: ["vaults"],
    queryFn: async () => {
      const token = localStorage.getItem("token") || "";
      const res = await fetch(
        "https://trombetta.mzservices.online/public/api/expense-types",
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
      return data.data.data as dataType[];
    },
  });
}
export default useGetExpenseType;
