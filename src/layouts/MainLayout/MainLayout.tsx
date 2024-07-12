import Sidebar from "@components/common/Sidebar/Sidebar";
import styles from "./styles.module.css";
// import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";

const {mainLayout} = styles;
const MainLayout = () => {
  return (
    <div className={mainLayout}>
        <Sidebar />
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default MainLayout