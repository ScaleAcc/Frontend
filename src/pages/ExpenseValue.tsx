import Heading from "@components/common/Heading/Heading";
import { Link } from "react-router-dom";
import styles from "@styles/vault.module.css";
import RenderExpenseValue from "@/src/tables/ExpenseValueTable/RenderExpenseValue";
const { vault__page, vault__header } = styles;

const ExpenseValue = () => {
  return (
    <div className={`page__container ${vault__page}`}>
      <div className={vault__header}>
        <Heading title="عرض  قيم الصمروفات" />

        <Link className="btn-primary" to="/add-manger">
          اضافة مصروف
        </Link>
      </div>

      <RenderExpenseValue />
    </div>
  );
};
export default ExpenseValue;
