import { columns } from "./Columns";
import { DataTable } from "./DataTable";
import useGetEpenseValue from "@/src/hooks/useGetEpenseValue";

const RenderExpenseValue = () => {
  const { data, isLoading } = useGetEpenseValue();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data!} />
    </div>
  );
};
export default RenderExpenseValue;
