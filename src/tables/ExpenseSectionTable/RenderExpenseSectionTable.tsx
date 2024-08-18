import useGetExpenseSection from "@/src/hooks/useGetExpenseSection";
import { columns } from "./Columns";
import { DataTable } from "./DataTable";

const RenderExpenseSectionTable = () => {
  const { data, isLoading } = useGetExpenseSection();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data!} />
    </div>
  );
};
export default RenderExpenseSectionTable;
