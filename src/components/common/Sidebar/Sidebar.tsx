import { NavLink } from "react-router-dom";
import "./styles.module.css";
import styles from "./styles.module.css";
import { PiVault, PiGear } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { CiDatabase } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import { BsFillClipboard2DataFill } from "react-icons/bs";

import { useState } from "react";
const {
  page__sidebar,
  collapse__sidebar,
  top__sidebar,
  sidebar__logo,
  sidebar__pages,
  pages__links,
  sidebar__settings,
  sidebar__collapse,
} = styles;

const Sidebar = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <aside className={`${page__sidebar} ${!collapse ? collapse__sidebar : ""}`}>
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

          <NavLink
            className={({ isActive }) =>
              isActive ? `${pages__links} ${styles.active}` : pages__links
            }
            to={"/accounts-tree"}
          >
            <MdOutlineAttachMoney size="25" />
            <span>شجرة الحسابات</span>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? `${pages__links} ${styles.active}` : pages__links
            }
            to={"/all-employees"}
          >
            <CiDatabase size="25" />
            <span>بيانات الموظفين</span>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? `${pages__links} ${styles.active}` : pages__links
            }
            to={"/all-mangers"}
          >
            <FiUsers size="25" />
            <span>الموارد البشرية</span>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? `${pages__links} ${styles.active}` : pages__links
            }
            to={"/all-country"}
          >
            <FaMapMarkerAlt size="25" />
            <span>المدن </span>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? `${pages__links} ${styles.active}` : pages__links
            }
            to={"/employees-salary"}
          >
            <FaRegMoneyBillAlt size="25" />
            <span>الدخل</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${pages__links} ${styles.active}` : pages__links
            }
            to={"/expense-type-section"}
          >
            <BsFillClipboard2DataFill size="25" />
            <span>انواع واقسام المصروفات</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${pages__links} ${styles.active}` : pages__links
            }
            to={"/expense-value"}
          >
            <FcMoneyTransfer size="25" />
            <span> قيم المصروفات</span>
          </NavLink>
        </div>
      </div>

      <div className={`${sidebar__settings} mt-10`}>
        <NavLink className={pages__links} to={"/settings"}>
          <PiGear size="25" />
          <span>الاعدادت</span>
        </NavLink>
        <div
          className={sidebar__collapse}
          onClick={() => setCollapse(!collapse)}
        >
          <TbLayoutSidebarRightCollapse size="30" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
