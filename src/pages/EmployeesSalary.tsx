import Heading from "@components/common/Heading/Heading";
import { Link } from "react-router-dom";
import styles from "@styles/vault.module.css";
import RenderEmployeesSalary from "@/src/tables/EmployeesSalaryTable/RenderEmployeesSalary";
const { vault__page, vault__header } = styles;
const EmployeesSalary = () => {
  return (
    <div className={`page__container ${vault__page}`}>
      <div className={vault__header}>
        <Heading title="رواتب الموظفيين" />

        <Link className="btn-primary" to="/add-manger">
          اضافة راتب
        </Link>
      </div>

      <RenderEmployeesSalary />
    </div>
  );
};

export default EmployeesSalary;
