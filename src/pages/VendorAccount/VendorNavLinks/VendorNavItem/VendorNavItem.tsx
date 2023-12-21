import { NavLink } from "react-router-dom";
import "./VendorNavItem.scss";
import { IoHomeOutline, IoStatsChart, IoSettingsSharp } from "react-icons/io5";
import { MdOutlineMenuBook, MdHistoryEdu } from "react-icons/md";

const VendorNavItem = () => {
  return (
    <div className="vendor-navigations-wrapper">
      <NavLink
        to="/vendor/home"
        style={{
          color: "inherit",
          textDecoration: "none",
          borderRadius: "15px",
        }}
      >
        <div className="vendor-nav-item">
          <div className="nav-icon">
            <IoHomeOutline />
          </div>
          Home
        </div>
      </NavLink>
      <NavLink
        to="/vendor/dashboard"
        style={{
          color: "inherit",
          textDecoration: "none",
          borderRadius: "15px",
        }}
      >
        <div className="vendor-nav-item">
          <div className="nav-icon">
            <IoStatsChart />
          </div>
          Dashboard
        </div>
      </NavLink>
      <NavLink
        to="/vendor/menu"
        style={{
          color: "inherit",
          textDecoration: "none",
          borderRadius: "15px",
        }}
      >
        <div className="vendor-nav-item">
          <div className="nav-icon">
            <MdOutlineMenuBook />
          </div>
          Menu
        </div>
      </NavLink>
      <NavLink
        to="/vendor/orders"
        style={{
          color: "inherit",
          textDecoration: "none",
          borderRadius: "15px",
        }}
      >
        <div className="vendor-nav-item">
          <div className="nav-icon">
            <MdHistoryEdu />
          </div>
          Orders
        </div>
      </NavLink>
      <NavLink
        to="/vendor/settings"
        style={{
          color: "inherit",
          textDecoration: "none",
          borderRadius: "15px",
        }}
      >
        <div className="vendor-nav-item">
          <div className="nav-icon">
            <IoSettingsSharp />
          </div>
          Settings
        </div>
      </NavLink>
    </div>
  );
};

export default VendorNavItem;
