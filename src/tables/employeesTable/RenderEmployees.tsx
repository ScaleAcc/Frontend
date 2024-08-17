import useGetAllEmployees from "@/src/hooks/useGetAllEmployees";
import { columns } from "./Columns";
import { DataTable } from "./DataTable";

const RenderEmployees = () => {
  const { data, isLoading } = useGetAllEmployees();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data!} />
    </div>
  );
};
export default RenderEmployees;
