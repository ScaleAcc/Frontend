import { useMutation } from "react-query";
import { decrypt } from "../utils/Utilty";
interface Iprops {
  fisrtName: string;
  lastName: string;
  email: string;
  number: string;
  whatsNumber: string;
  password: string;
}

const useAddManger = () => {
  const token = localStorage.getItem("token") || "";
  return useMutation({
    mutationFn: (data: Iprops) =>
      fetch("https://trombetta.mzservices.online/public/api/managers", {
        method: "POST",
        headers: {
          authorization: `Bearer ${decrypt(
            token,
            import.meta.env.VITE_TOKEN_SECRET
          )}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: data.fisrtName,
          last_name: data.lastName,
          email: data.email,
          phone_number: data.number,
          whatsapp_number: data.whatsNumber,
          password: data.password,
        }),
      }).then((response) => response.json()),
  });
};

export default useAddManger;
