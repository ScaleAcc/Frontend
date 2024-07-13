import Sidebar from "@components/common/Sidebar/Sidebar";
import styles from "./styles.module.css";
// import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";

const {mainLayout, pagesContent} = styles;
const MainLayout = () => {
  return (
    <div className={mainLayout}>
        <Sidebar />
        <div className={pagesContent}>
            <Outlet />
        </div>
    </div>
  )
}

export default MainLayout