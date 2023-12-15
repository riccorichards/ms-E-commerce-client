import "./AdminDashboardHeader.scss";
import { FaUserFriends } from "react-icons/fa";

const AdminDashboardHeader = () => {
  return (
    <div className="admin-dashboard-header-wrapper">
      <div className="admin-dashboard-header">
        <h2>Admin Dashboard</h2>
      </div>
      <div className="admin-dashboard-header-body-wrapper">
        <div className="admin-dashboard-header-body">
          <FaUserFriends />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h5>Customer</h5>
            <span>126</span>
          </div>
        </div>
        <div className="admin-dashboard-header-body">
          <FaUserFriends />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h5>Customer</h5>
            <span>126</span>
          </div>
        </div>
        <div className="admin-dashboard-header-body">
          <FaUserFriends />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h5>Customer</h5>
            <span>126</span>
          </div>
        </div>
        <div className="admin-dashboard-header-body">
          <FaUserFriends />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h5>Customer</h5>
            <span>126</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardHeader;
