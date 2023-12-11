import "./UserDashboard.scss";
import NavigationBar from "./userPageComps/navigationBar/NavigationBar";
import Dashboard from "./userPageComps/dashborad/Dashboard";
import { Route, Routes } from "react-router-dom";
import Orders from "../Orders/Orders";
import VendorList from "../vendorList/VendorList";
import Settings from "../Settings/Settings";
import VendorDetails from "../VendorDetails/VendorDetails";
import RefreshToken from "../../components/RefreshToken";

const UserDashboard = () => {
  return (
    <div className="user-dashboard-wrapper">
      <NavigationBar />
      <RefreshToken />
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/vendors" element={<VendorList />} />
        <Route path="/vendors/:id" element={<VendorDetails />} />
        <Route path="/settings/*" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default UserDashboard;
