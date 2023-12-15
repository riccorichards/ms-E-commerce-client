import AdminDashboard from "./AdminDashboard/AdminDashboard";
import "./AdminPages.scss";
import { Routes, Route } from "react-router-dom";
import Employees from "./Employees/Employees";
import NewEmployee from "./NewEmployee/NewEmployee";
import NewVendor from "./NewVendor/NewVendor";
import AdminOrders from "./AdminOrders/AdminOrders";

const AdminPages = () => {
  return (
    <div className="admin-pages-wrapper">
      <Routes>
        <Route path="/home" element={<AdminDashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/create-deliveryman" element={<NewEmployee />} />
        <Route path="/create-vendor" element={<NewVendor />} />
        <Route path="/admin-orders" element={<AdminOrders />} />
      </Routes>
    </div>
  );
};

export default AdminPages;
