import Heading from "@components/common/Heading/Heading";
import { Link } from "react-router-dom";
import styles from "@styles/vault.module.css";
import RenderCountries from "@/src/tables/countriesTable/RenderCountries";
const { vault__page, vault__header } = styles;

const Countries = () => {
  return (
    <div className={`page__container ${vault__page}`}>
      <div className={vault__header}>
        <Heading title="عرض المدن" />

        <Link className="btn-primary" to="/add-manger">
          اضافة مدينة
        </Link>
      </div>

      <RenderCountries />
    </div>
  );
};
export default Countries;
