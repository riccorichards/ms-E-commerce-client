import { useState } from "react";
import "./CustomerFeeds.scss";
import CustomerFeedsHeader from "./components/CustomerFeedsHeader/CustomerFeedsHeader";
import GridView from "./components/GridView/GridView";
import LinerView from "./components/LinerView/LinerView";

const CustomerFeeds = () => {
  const [isGridView, setGrigView] = useState<boolean>(true);

  return (
    <div className="customer-feeds-to-vendor">
      <CustomerFeedsHeader Bstate={{ isGridView, setGrigView }} />
      {isGridView ? <GridView /> : <LinerView />}
    </div>
  );
};

export default CustomerFeeds;
