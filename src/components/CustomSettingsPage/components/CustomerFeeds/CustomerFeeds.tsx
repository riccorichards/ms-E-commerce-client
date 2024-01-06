import { useEffect, useState } from "react";
import "./CustomerFeeds.scss";
import CustomerFeedsHeader from "./components/CustomerFeedsHeader/CustomerFeedsHeader";
import GridView from "./components/GridView/GridView";
import LinerView from "./components/LinerView/LinerView";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { getCustomerSpecData } from "../../../../redux/appCall/AuthAppCall";
import { deleteFeed } from "../../../../redux/appCall/FoodAppCall";
import FeedContext from "./FeedContext";
import { getVendorSpecData } from "../../../../redux/appCall/VendorAppCall";

const CustomerFeeds = () => {
  const [isGridView, setGrigView] = useState<boolean>(true);
  const { vendor } = useAppSelector((state) => state.vendor);
  const { customer } = useAppSelector((state) => state.customer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (customer) {
      dispatch(getCustomerSpecData("feedback"));
    } else if (vendor) {
      dispatch(getVendorSpecData("feeds"));
    }
  }, [customer, vendor]); //eslint-disable-line

  const handleDeleteFeedProcess = (feedId: number) => {
    dispatch(deleteFeed(feedId));
  };

  const contextValues = {
    isGridView,
    setGrigView,
    handleDeleteFeedProcess,
  };

  return (
    <FeedContext.Provider value={contextValues}>
      <div className="customer-feeds-to-vendor">
        <CustomerFeedsHeader />
        {isGridView ? <GridView /> : <LinerView />}
      </div>
    </FeedContext.Provider>
  );
};

export default CustomerFeeds;
