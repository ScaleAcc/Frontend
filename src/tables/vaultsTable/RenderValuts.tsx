import { columns } from "./Columns";
import { DataTable } from "./DataTable";

import useGetAllVaults from "@/src/hooks/useGetAllVaults";

const RenderValuts = () => {
  const { data, isLoading } = useGetAllVaults();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data!} />
    </div>
  );
};
export default RenderValuts;
