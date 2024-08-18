import RenderExpenseSectionTable from "@/src/tables/ExpenseSectionTable/RenderExpenseSectionTable";
// import ExpenseType from "@pages/ExpenseType";
import RenderExpenseType from "@/src/tables/ExpenseTypeTable/RenderExpenseType";

const ExpenseSection = () => {
  return (
    <>
      <RenderExpenseType />
      <RenderExpenseSectionTable />
    </>
  );
};
export default ExpenseSection;
