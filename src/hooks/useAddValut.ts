import { useMutation } from "react-query";
import { decrypt } from "../utils/Utilty";
interface Iprops {
  vaultName: string;
  currentBalance: string;
}

const useAddValut = () => {
  const token = localStorage.getItem("token") || "";
  return useMutation({
    mutationFn: (data: Iprops) =>
      fetch("https://trombetta.mzservices.online/public/api/safe", {
        method: "POST",
        headers: {
          authorization: `Bearer ${decrypt(
            token,
            import.meta.env.VITE_TOKEN_SECRET
          )}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          safe_name: data.vaultName,
          balance: data.currentBalance,
        }),
      }).then((response) => response.json()),
  });
};

export default useAddValut;
