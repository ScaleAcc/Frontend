import { useState, useEffect } from "react";
import { Valuts, columns } from "./Columns";
import { DataTable } from "./DataTable";
import { decrypt } from "../utils/Utilty";

async function getData(): Promise<Valuts[]> {
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
  return data.data.data;
}

const RenderValuts = () => {
  const [data, setData] = useState<Valuts[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};
export default RenderValuts;
