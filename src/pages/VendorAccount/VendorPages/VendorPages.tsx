import Settings from "../../../components/CustomSettingsPage/Settings";
import VendorDetails from "../../VendorDetails/VendorDetails";
import "./VendorPages.scss";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import VendorDashboard from "./VendorDashboard/VendorDashboard";
import VendorTableOfFood from "../../VendorTableOfFood/VendorTableOfFood";
import VendorOrders from "./VendorOrders/VendorOrders";

const settingOptions = {
  target: "vendor",
  setNavLInk: [
    {
      target: "vendor",
      title: "Update Profile",
      desc: "Update Profile is the place where you can change your information",
    },
    {
      target: "vendor",
      title: "Customer Feeds",
      desc: "You can see your customers feedbacks",
    },
    {
      target: "vendor",
      title: "Gallery",
      desc: "Add or update your gallery",
    },
    {
      target: "vendor",
      title: "Add Food",
      desc: "Add a new food in your menu",
    },
    {
      target: "vendor",
      title: "Team member",
      desc: "Describe your team here",
    },
  ],
};
const VendorPages = () => {
  return (
    <div className="vendor-pages-wrapper">
      <Routes>
        <Route path="/home" element={<VendorDetails />} />
        <Route path="/dashboard" element={<VendorDashboard />} />
        <Route path="/menu" element={<VendorTableOfFood />} />
        <Route path="/orders" element={<VendorOrders />} />
        <Route
          path="/settings/*"
          element={<Settings settingOptions={settingOptions} />}
        />
      </Routes>
    </div>
  );
};

export default VendorPages;
