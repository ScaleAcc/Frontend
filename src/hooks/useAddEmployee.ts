import { useMutation } from "react-query";
import { decrypt } from "../utils/Utilty";

interface Iprops {
  Fname: string;
  Lname: string;
  status: string;
  current_salary: string;
  phone_number: string;
  code?: string;
  id?: string;
  whatsapp_number: string;
  country_id: string;
}

const useAddEmployee = () => {
  const token = localStorage.getItem("token") || "";
  return useMutation({
    mutationFn: (data: Iprops) =>
      fetch(`https://trombetta.mzservices.online/public/api/employees`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${decrypt(
            token,
            import.meta.env.VITE_TOKEN_SECRET
          )}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Fname: data.Fname,
          Lname: data.Lname,
          status: data.status,
          phone_number: data.phone_number,
          whatsapp_number: data.whatsapp_number,
          current_salary: data.current_salary,
          country_id: data.country_id,
        }),
      }).then((response) => response.json()),
  });
};

export default useAddEmployee;
