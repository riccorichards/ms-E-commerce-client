import "./Admin.scss";
import AdminNavLinks from "./AdminNavLinks/AdminNavLinks";
import AdminPages from "./AdminPages/AdminPages";

const Admin = () => {
  return (
    <div className="admin-dashboard-wrapper">
      <AdminNavLinks />
      <AdminPages />
    </div>
  );
};

export default Admin;
