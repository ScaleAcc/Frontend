import { decrypt } from "@util/Utilty";

async function getCountries() {
  const token = localStorage.getItem("token") || "";
  const res = await fetch(
    "https://trombetta.mzservices.online/public/api/countries",
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
  return data.data.data;
}

export default getCountries;
