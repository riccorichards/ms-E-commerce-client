import { Route, Routes } from "react-router-dom";
import UpdateWrapper from "./UpdateWrapper/UpdateWrapper";
//import MyFeeds from "./MyFeeds/MyFeeds";
import Invoice from "./Invoice/Invoice";
import CustomerFeeds from "./CustomerFeeds/CustomerFeeds";

const SetCustomerComp = () => {
  return (
    <Routes>
      <Route path="/" element={<UpdateWrapper />} />
      <Route path="/my-feeds" element={<CustomerFeeds />} />
      <Route path="/invoices" element={<Invoice />} />
    </Routes>
  );
};

export default SetCustomerComp;
//
