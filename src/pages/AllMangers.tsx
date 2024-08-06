import Heading from "@components/common/Heading/Heading";
import { Link } from "react-router-dom";
import styles from "@styles/vault.module.css";
import RenderAllManger from "../allMangersTable/RenderAllManger";
const { vault__page, vault__header } = styles;
const AllMangers = () => {
  return (
    <div className={`page__container ${vault__page}`}>
      <div className={vault__header}>
        <Heading title="مديرين لوحة التحكم" />

        <Link className="btn-primary" to="/add-manger">
          اضافة مدير
        </Link>
      </div>

      <RenderAllManger />
    </div>
  );
};

export default AllMangers;
