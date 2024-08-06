import { useLocation } from "react-router-dom";
import { decrypt } from "../utils/Utilty";
import { useEffect } from "react";
interface data {
  first_name: number;
  last_name: string;
  email: string;
  phone_number: string;
  code: string;
  id: string;
  whatsapp_number: string;
}
async function getData(id: string) {
  const token = localStorage.getItem("token") || "";
  const res = await fetch(
    `https://trombetta.mzservices.online/public/api/managers/${id}`,
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
  console.log(data.data);
  return data.data;
}

const EditManger = () => {
  const location = useLocation();
  const { id } = location.state;
  useEffect(() => {
    getData(id);
  }, [id]);

  return <div></div>;
};
export default EditManger;
