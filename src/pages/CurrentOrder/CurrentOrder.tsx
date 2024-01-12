import "./CurrentOrder.scss";
import DeliveryPerson from "./components/DeliveryPerson/DeliveryPerson";
import VendorInfo from "./components/VendorInfo/VendorInfo";
import OrderInfo from "./components/OrderInfo/OrderInfo";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect, useState } from "react";
import {
  getDeliverymanForOrder,
  getVendorForOrder,
} from "../../redux/appCall/ShoppingApiCall";
import { useNavigate } from "react-router-dom";
import OrderTrack from "./components/OrderTrack/OrderTrack";

const CurrentOrder = () => {
  const dispatch = useAppDispatch();
  const { order, vendorForOrder } = useAppSelector((state) => state.shopping);
  const [isOrderItem, setIsOrderItem] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (order) {
      dispatch(getDeliverymanForOrder(order.deliverymanName));
      if (vendorForOrder.length === 0) {
        const uniqueAddresses = new Set(
          order.orderItem.map((order) => order.product_address)
        );
        for (const address of uniqueAddresses) {
          dispatch(getVendorForOrder(address));
        }
      }
    } else {
      navigate("/customer/home/");
    }
  }, [order, dispatch, navigate, vendorForOrder]);

  return (
    <div className="current-order-wrapper">
      <div className="current-order-side-bar">
        <DeliveryPerson />
        <VendorInfo />
      </div>
      
      <div className="current-order-main-bar">
        <div className="current-order-page-switcher">
          <button
            style={{ backgroundColor: isOrderItem ? "orangered" : "" }}
            className="page-switcher-btn"
            onClick={() => setIsOrderItem(true)}
          >
            Current Order
          </button>
          <button
            style={{ backgroundColor: !isOrderItem ? "orangered" : "" }}
            className="page-switcher-btn"
            onClick={() => setIsOrderItem(false)}
          >
            Order Track
          </button>
        </div>
        {isOrderItem ? <OrderInfo /> : <OrderTrack />}
      </div>
    </div>
  );
};

export default CurrentOrder;
