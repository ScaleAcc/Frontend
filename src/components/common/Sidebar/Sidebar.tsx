import { NavLink } from "react-router-dom";
import "./styles.module.css";
import styles from "./styles.module.css";
import { 
    PiVault,
    PiGear, 
} from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { useState } from "react";
const {
  page__sidebar,
  collapse__sidebar,
  top__sidebar,
  sidebar__logo,
  sidebar__pages,
  pages__links,
  sidebar__settings,
  sidebar__collapse
} = styles;

const Sidebar = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <aside className={`${page__sidebar} ${collapse ? collapse__sidebar:""}`}>
      <div className={top__sidebar}>
        <h2 className={sidebar__logo}>scale</h2>

        <div className={sidebar__pages}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${pages__links} ${styles.active}` : pages__links
            }
            to={"/"}
          >
            <IoHomeOutline size="25" />
            <span>الصفحة الرئيسية</span>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? `${pages__links} ${styles.active}` : pages__links
            }
            to={"/vault"}
          >
            <PiVault size="25" />
            <span>الخزنة</span>
          </NavLink>
        </div>
      </div>

      <div className={sidebar__settings}>
        <NavLink className={pages__links} to={"/settings"}>
            <PiGear size="25"/>
            <span>الاعدادت</span>
        </NavLink>
        <div 
          className={sidebar__collapse} 
          onClick={()=> setCollapse(!collapse)}
        >
          <TbLayoutSidebarRightCollapse size="30"/>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
