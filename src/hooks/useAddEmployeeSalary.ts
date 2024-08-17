import { useMutation } from "react-query";
import { decrypt } from "../utils/Utilty";

interface Iprops {
  receipt_value: number;
  receipt_date: string;
  notes: string;
  payment_receipt_image: string;
  safe_id: string;
  employee_id: string;
}

const useAddEmployeeSalary = () => {
  const token = localStorage.getItem("token") || "";
  return useMutation({
    mutationFn: (data: Iprops) =>
      fetch(
        `https://trombetta.mzservices.online/public/api/employees_salaries`,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${decrypt(
              token,
              import.meta.env.VITE_TOKEN_SECRET
            )}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            receipt_value: data.receipt_value,
            receipt_date: data.receipt_date,
            notes: data.notes,
            payment_receipt_image: data.payment_receipt_image,
            safe_id: data.safe_id,
            employee_id: data.employee_id,
          }),
        }
      ).then((response) => response.json()),
  });
};

export default useAddEmployeeSalary;
