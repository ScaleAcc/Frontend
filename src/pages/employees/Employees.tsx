import Heading from "@components/common/Heading/Heading";
import { Link } from "react-router-dom";
import styles from "@styles/vault.module.css";
import RenderEmployees from "@/src/tables/employeesTable/RenderEmployees";
const { vault__page, vault__header } = styles;
const Employees = () => {
  return (
    <div className={`page__container ${vault__page}`}>
      <div className={vault__header}>
        <Heading title="الموظفين" />

        <Link className="btn-primary" to="/add-employee">
          اضافة موظف
        </Link>
      </div>

      <RenderEmployees />
    </div>
  );
};

export default Employees;
