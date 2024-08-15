import { useState, useEffect } from "react";
import { Valuts, columns } from "./Columns";
import { DataTable } from "./DataTable";
import getCountries from "@/src/hooks/useGetCountries";

async function getData(): Promise<Valuts[]> {
  const res = await getCountries();
  return res;
}

const RenderCountries = () => {
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
export default RenderCountries;
