import { decrypt } from "@util/Utilty";

async function getAdmin(id: string) {
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

export default getAdmin;