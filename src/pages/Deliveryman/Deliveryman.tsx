import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import "./Deliveryman.scss";
import AboutDeliveryman from "./components/AboutDeliveryman/AboutDeliveryman";
import DeliveryOverview from "./components/DeliveryOverview/DeliveryOverview";
import DeliverymanActivities from "./components/DeliverymanActivities/DeliverymanActivities";
import {
  getDeliveryman,
  getdeliverymanFeeds,
  getdeliverymanOrders,
} from "../../redux/appCall/DeliverymanAppCall";
import RefreshToken from "../../components/RefreshToken";
import DeliverymanModal from "./components/DeliverymanModal/DeliverymanModal";
import DeliveryContext from "./DeliveryContext";
import DeliverymanEarning from "./components/DeliverymanEarning/DeliverymanEarning";
import DeliverymanFeedbacks from "./components/DeliverymanFeedbacks/DeliverymanFeedbacks";

const Deliveryman = () => {
  const dispatch = useAppDispatch();
  const [isMoreDetails, setIsMoreDetails] = useState<boolean>(false);
  const [deliveryOrderId, setDeliveryOrderId] = useState<number | null>(null);
  const [options, setOptions] = useState<string>("Orders");
  const { deliverymanOrders } = useAppSelector((s) => s.deliveryman);

  useEffect(() => {
    dispatch(getDeliveryman());
  }, []); //eslint-disable-line

  const values = {
    isMoreDetails,
    setIsMoreDetails,
    deliveryOrderId,
    setDeliveryOrderId,
    options,
    setOptions,
  };

  const order = deliveryOrderId
    ? deliverymanOrders &&
      deliverymanOrders.find((order) => order.id === deliveryOrderId)
    : null;

  const handleFetchingAmount = (amount: number | string) => {
    switch (options) {
      case "Orders":
        dispatch(getdeliverymanOrders({ isStats: false, amount: amount }));
        break;
      case "Earning":
        dispatch(getdeliverymanOrders({ isStats: true, amount: amount }));
        break;
      case "Feedbacks":
        dispatch(getdeliverymanFeeds(amount));
        break;
    }
  };

  return (
    <DeliveryContext.Provider value={values}>
      <div className="deliveryman-dashboard-wrapper">
        <RefreshToken port="8005" />
        <div className="deliveryman-dashboard-left">
          <AboutDeliveryman />
          <DeliveryOverview />
        </div>
        <div className="deliveryman-dashboard-right">
          <div>
            <h2>
              {options === "Orders"
                ? `Last ${options}`
                : options === "Earning"
                ? `Weekly ${options}`
                : options}
            </h2>
            {options !== "Earning" && (
              <div className="fetch-amount-btns-wrapper">
                <button onClick={() => handleFetchingAmount(10)}>10</button>
                <button onClick={() => handleFetchingAmount(20)}>20</button>
                <button onClick={() => handleFetchingAmount("All")}>All</button>
              </div>
            )}
          </div>
          {options === "Earning" && <DeliverymanEarning />}
          {options === "Orders" && <DeliverymanActivities />}
          {options === "Feedbacks" && <DeliverymanFeedbacks />}
        </div>
        {isMoreDetails && <DeliverymanModal order={order} />}
      </div>
    </DeliveryContext.Provider>
  );
};

export default Deliveryman;
