import { decrypt } from "@util/Utilty";

async function getemployee(id: string) {
  const token = localStorage.getItem("token") || "";
  const res = await fetch(
    `https://trombetta.mzservices.online/public/api/employees/${id}`,
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

export default getemployee;
