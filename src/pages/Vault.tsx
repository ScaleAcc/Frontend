import Heading from "@components/common/Heading/Heading";
import { Link } from "react-router-dom";
import styles from "@styles/vault.module.css";
import { SearchInput } from "@components/forms";

const {vault__header} = styles
const Vault = () => {
  return (
    <div className="page__container">
      <div className={vault__header}>
        <Heading title="كل الخزنات الرئيسية"/>

        <Link className="btn-primary" to="/vault/add-new">اضافة جديدة</Link>
      </div>

      <div className="vault__search">
        <SearchInput />
      </div>
    </div>
  )
}

export default Vault