import { Route, Routes } from "react-router-dom";
import VendorUpdateProfile from "./VendorUpdateProfile/VendorUpdateProfile";
import CustomerFeeds from "./CustomerFeeds/CustomerFeeds";
import Gallery from "./Gallery/Gallery";
import AddFood from "./AddFood/AddFood";
import TeamMembers from "./TeamMembers/TeamMembers";

const SetVendorComp = () => {
  return (
    <Routes>
      <Route path="/" element={<VendorUpdateProfile />} />
      <Route path="/customer-feeds" element={<CustomerFeeds />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/add-food" element={<AddFood />} />
      <Route path="/team-member" element={<TeamMembers />} />
    </Routes>
  );
};

export default SetVendorComp;
