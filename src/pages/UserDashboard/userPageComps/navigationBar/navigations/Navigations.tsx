import "./Navigations.scss";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { MdHistoryEdu } from "react-icons/md";
import { GrRestaurant } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Navigations = () => {
  return (
    <nav className="user-navigations-wrapper">
      <NavLink
        to="/customer/home"
        style={{
          color: "inherit",
          textDecoration: "none",
          borderRadius: "15px",
        }}
      >
        <div className="nav-item">
          <div className="nav-icon">
            <IoHomeOutline />
          </div>
          Home
        </div>
      </NavLink>
      <NavLink
        to="/customer/orders"
        style={{
          color: "inherit",
          textDecoration: "none",
          borderRadius: "15px",
        }}
      >
        <div className="nav-item">
          <div className="nav-icon">
            <MdHistoryEdu />
          </div>
          Orders
        </div>
      </NavLink>
      <NavLink
        to="/customer/vendors"
        style={{
          color: "inherit",
          textDecoration: "none",
          borderRadius: "15px",
        }}
      >
        <div className="nav-item">
          <div className="nav-icon">
            <GrRestaurant />
          </div>
          Vendors
        </div>
      </NavLink>
      <NavLink
        to="/customer/settings"
        style={{
          color: "inherit",
          textDecoration: "none",
          borderRadius: "15px",
        }}
      >
        <div className="nav-item">
          <div className="nav-icon">
            <IoSettingsOutline />
          </div>
          Settings
        </div>
      </NavLink>
    </nav>
  );
};

export default Navigations;
