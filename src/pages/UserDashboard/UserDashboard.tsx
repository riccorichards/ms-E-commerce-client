import "./UserDashboard.scss";
import NavigationBar from "./userPageComps/navigationBar/NavigationBar";
import Dashboard from "./userPageComps/dashborad/Dashboard";
import { Route, Routes } from "react-router-dom";
import Orders from "../Orders/Orders";
import VendorList from "../vendorList/VendorList";
import VendorDetails from "../VendorDetails/VendorDetails";
import RefreshToken from "../../components/RefreshToken";
import { useAppDispatch } from "../../redux/hook";
import { useEffect } from "react";
import { findCustomerById } from "../../redux/appCall/AuthAppCall";
import Settings from "../../components/CustomSettingsPage/Settings";
import AllSubCat from "../AllSubCat/AllSubCat";
import VendorMenu from "../VendorMenu/VendorMenu";

//for custom setting pages
const settingOptions = {
  target: "customer",
  setNavLInk: [
    {
      target: "customer",
      title: "Update Profile",
      desc: "Home is the place where you can change your information",
    },
    {
      target: "customer",
      title: "My Feeds",
      desc: "You can see your all made feedbacks",
    },
    {
      target: "customer",
      title: "Invoices",
      desc: "Invoice is a place where you can see your old financial history",
    },
  ],
};

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
        <Route path="/home/*" element={<Dashboard />} />
        <Route path="/home/sub-category" element={<AllSubCat />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/vendors" element={<VendorList />} />
        <Route path="/vendors/:id" element={<VendorDetails />} />
        <Route path="/vendors/:id/menu" element={<VendorMenu />} />
        <Route
          path="/settings/*"
          element={<Settings settingOptions={settingOptions} />}
        />
      </Routes>
    </div>
  );
};

export default UserDashboard;
