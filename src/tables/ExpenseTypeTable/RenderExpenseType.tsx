import useGetExpenseType from "@/src/hooks/useGetExpenseType";
import { columns } from "./Columns";
import { DataTable } from "./DataTable";

const RenderExpenseType = () => {
  const { data, isLoading } = useGetExpenseType();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data!} />
    </div>
  );
};
export default RenderExpenseType;
