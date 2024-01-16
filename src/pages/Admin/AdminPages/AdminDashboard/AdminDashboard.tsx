import "./AdminDashboard.scss";
import TopVendorLineChart from "./components/TopVendorLineChart/TopVendorLineChart";
import MarketableFoods from "./components/MarketableFoods/MarketableFoods";
import AdminDashboardHeader from "./components/AdminDashboardHeader/AdminDashboardHeader";
import TopCustomer from "./components/TopCustomer/TopCustomer";

const AdminDashboard = () => {
  return (
    <div className="admin-home-wrapper">
      <div className="admin-main-home-wrapper">
        <AdminDashboardHeader />
        <TopVendorLineChart />
        <MarketableFoods />
        <TopCustomer />
      </div>
    </div>
  );
};

export default AdminDashboard;
