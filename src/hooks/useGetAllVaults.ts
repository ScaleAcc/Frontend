import { useQuery } from "react-query";
import { decrypt } from "@/src/utils/Utilty";
import { Valuts as valutsType } from "@/src/tables/vaultsTable/Columns";
function useGetAllVaults() {
  return useQuery({
    queryKey: ["vaults"],
    queryFn: async () => {
      const token = localStorage.getItem("token") || "";
      const res = await fetch(
        "https://trombetta.mzservices.online/public/api/safe",
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
      return data.data.data as valutsType[];
    },
  });
}
export default useGetAllVaults;
