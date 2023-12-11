import "./CurrentOrder.scss";
import CustomerInfo from "./components/DeliveryPerson/DeliveryPerson";
import VendorInfo from "./components/VendorInfo/VendorInfo";
import OrderInfo from "./components/OrderInfo/OrderInfo";

const CurrentOrder = () => {
  return (
    <div className="current-order-wrapper">
      <div className="current-order-side-bar">
        <CustomerInfo />
        <VendorInfo />
      </div>
      <div className="current-order-main-bar">
        <OrderInfo />
      </div>
    </div>
  );
};

export default CurrentOrder;
