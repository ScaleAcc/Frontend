import { useState, useEffect } from "react";
import { Valuts, columns } from "./Columns";
import { DataTable } from "./DataTable";

async function getData(): Promise<Valuts[]> {
  const res = await fetch(
    "https://trombetta.mzservices.online/public/api/safe",
    {
      headers: {
        authorization:
          "Bearer 12|xuAb1ULXTtLDUKkiwolFlHIrT3Yq6bYPpzIBPYiua94cfaa7",
      },
    }
  );
  const data = await res.json();
  console.log(data.data.data);
  return data.data.data;
}

const Page = () => {
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
export default Page;
