import { useMutation } from "react-query";
import { decrypt } from "../utils/Utilty";
interface Iprops {
  nameAccount: string;
  code: string;
}

const useAccountsTree = () => {
  const token = localStorage.getItem("token") || "";
  return useMutation({
    mutationFn: (data: Iprops) =>
      fetch("https://trombetta.mzservices.online/public/api/code-generator", {
        method: "POST",
        headers: {
          authorization: `Bearer ${decrypt(
            token,
            import.meta.env.VITE_TOKEN_SECRET
          )}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          entity_name: data.nameAccount,
          prefix: data.code,
        }),
      }).then((response) => response.json()),
  });
};

export default useAccountsTree;
