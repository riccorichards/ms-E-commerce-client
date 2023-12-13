import "./UserDashboard.scss";
import NavigationBar from "./userPageComps/navigationBar/NavigationBar";
import Dashboard from "./userPageComps/dashborad/Dashboard";
import { Route, Routes } from "react-router-dom";
import Orders from "../Orders/Orders";
import VendorList from "../vendorList/VendorList";
import Settings from "../Settings/Settings";
import VendorDetails from "../VendorDetails/VendorDetails";
import RefreshToken from "../../components/RefreshToken";
import { useAppDispatch } from "../../redux/hook";
import { useEffect } from "react";
import { findCustomerById } from "../../redux/appCall/AuthAppCall";

const UserDashboard = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    try {
      dispatch(findCustomerById());
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw error;
    }
  }, [dispatch]);

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
