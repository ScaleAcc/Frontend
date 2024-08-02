import Heading from "@components/common/Heading/Heading";
import { Link } from "react-router-dom";
import styles from "@styles/vault.module.css";
import { SearchInput } from "@components/forms";
import Page from "../vaults/Page";
const { vault__page, vault__header, vault__search } = styles;
const Vault = () => {
  return (
    <div className={`page__container ${vault__page}`}>
      <div className={vault__header}>
        <Heading title="كل الخزنات الرئيسية" />

        <Link className="btn-primary" to="/vault/add-new">
          اضافة جديدة
        </Link>
      </div>

      <div className={vault__search}>
        <SearchInput />
      </div>
      <Page />
      {/*Note: ADD Table  Here*/}
    </div>
  );
};

export default Vault;
