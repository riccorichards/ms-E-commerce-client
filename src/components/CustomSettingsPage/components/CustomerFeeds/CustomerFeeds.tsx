import { useEffect, useState } from "react";
import "./CustomerFeeds.scss";
import CustomerFeedsHeader from "./components/CustomerFeedsHeader/CustomerFeedsHeader";
import GridView from "./components/GridView/GridView";
import LinerView from "./components/LinerView/LinerView";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import {
  deleteFeedback,
  getCustomerFeeds,
} from "../../../../redux/appCall/AuthAppCall";
import FeedContext from "./FeedContext";
import { getSpecVendorsFeeds } from "../../../../redux/appCall/VendorAppCall";
import Pagination from "../../../pagination/Pagination";

const CustomerFeeds = () => {
  const [isGridView, setGrigView] = useState<boolean>(true);
  const { vendor, vendorFeeds, vendorPagination } = useAppSelector(
    (state) => state.vendor
  );
  const { customer, customerPagination } = useAppSelector(
    (state) => state.customer
  );
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (customer) {
      dispatch(getCustomerFeeds(page));
    } else if (vendor) {
      
      dispatch(getSpecVendorsFeeds({ vendorId: vendor._id, page }));
    }
  }, [customer, vendor, page]); //eslint-disable-line

  const handleDeleteFeedProcess = (feedId: number) => {
    dispatch(deleteFeedback(feedId));
  };

  if (!customer && !customerPagination && !vendorFeeds && !vendorPagination)
    return null;

  const contextValues = {
    isGridView,
    setGrigView,
    handleDeleteFeedProcess,
  };

  const targetPagination = customerPagination || vendorPagination;

  if (!targetPagination) return null;

  return (
    <FeedContext.Provider value={contextValues}>
      <div className="customer-feeds-to-vendor">
        <CustomerFeedsHeader />
        {isGridView ? <GridView /> : <LinerView />}
        {targetPagination.totalPages > 1 && (
          <Pagination
            setPage={setPage}
            totalPage={targetPagination.totalPages}
          />
        )}
      </div>
    </FeedContext.Provider>
  );
};

export default CustomerFeeds;
