import { Route, Routes } from "react-router-dom";
import "./SetComponents.scss";
import UpdateWrapper from "./UpdateWrapper/UpdateWrapper";
import MyFeeds from "./MyFeeds/MyFeeds";
import Invoice from "./Invoice/Invoice";

const SetComponents = () => {
  return (
    <div className="set-component-wrapper">
      <Routes>
        <Route path="/" element={<UpdateWrapper />} />
        <Route path="/my-feeds" element={<MyFeeds />} />
        <Route path="/invoices" element={<Invoice />} />
      </Routes>
    </div>
  );
};

export default SetComponents;
