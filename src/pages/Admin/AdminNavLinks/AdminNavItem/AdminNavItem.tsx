import { NavLink } from "react-router-dom";
import "./AdminNavItem.scss";
import { IoHomeOutline } from "react-icons/io5";
import { MdHistoryEdu, MdAddBusiness } from "react-icons/md";
import { TiGroup } from "react-icons/ti";
import { HiUserAdd } from "react-icons/hi";

const AdminNavItem = () => {
  return (
    <div className="admin-navigations-wrapper">
      <NavLink
        to="/admin/home"
        style={{
          color: "inherit",
          textDecoration: "none",
          borderRadius: "15px",
        }}
      >
        <div className="admin-nav-item">
          <div className="nav-icon">
            <IoHomeOutline />
          </div>
          Home
        </div>
      </NavLink>
      <NavLink
        to="/admin/employees"
        style={{
          color: "inherit",
          textDecoration: "none",
          borderRadius: "15px",
        }}
      >
        <div className="admin-nav-item">
          <div className="nav-icon">
            <TiGroup />
          </div>
          Employee
        </div>
      </NavLink>
      <NavLink
        to="/admin/create-deliveryman"
        style={{
          color: "inherit",
          textDecoration: "none",
          borderRadius: "15px",
        }}
      >
        <div className="admin-nav-item">
          <div className="nav-icon">
            <HiUserAdd />
          </div>
          New Employee
        </div>
      </NavLink>
      <NavLink
        to="/admin/create-vendor"
        style={{
          color: "inherit",
          textDecoration: "none",
          borderRadius: "15px",
        }}
      >
        <div className="admin-nav-item">
          <div className="nav-icon">
            <MdAddBusiness />
          </div>
          New Vendor
        </div>
      </NavLink>
      <NavLink
        to="/admin/admin-orders"
        style={{
          color: "inherit",
          textDecoration: "none",
          borderRadius: "15px",
        }}
      >
        <div className="admin-nav-item">
          <div className="nav-icon">
            <MdHistoryEdu />
          </div>
          Orders
        </div>
      </NavLink>
    </div>
  );
};

export default AdminNavItem;
