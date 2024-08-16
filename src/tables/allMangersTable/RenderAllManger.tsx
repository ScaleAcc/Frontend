import { columns } from "./Columns";
import { DataTable } from "./DataTable";
import useGetAllManagers from "@/src/hooks/useGetAllManagers";

const RenderAllManger = () => {
  const { data, isLoading } = useGetAllManagers();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data!} />
    </div>
  );
};
export default RenderAllManger;
