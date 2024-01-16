import { FC } from "react";
import NavOrderItem from "./NavOrderItem/NavOrderItem";
import "./OrderNavigation.scss";
import { useAppSelector } from "../../../redux/hook";

const OrderNavigation: FC<{
  setOrderId: (val: number) => void;
  orderId: number | null;
}> = ({ setOrderId, orderId }) => {
  const { ordersList } = useAppSelector((state) => state.shopping);

  const handleTakingOrderId = (id: number) => {
    setOrderId(id);
  };

  return (
    <div className="order-navigation-wrapper">
      <h1>Order History</h1>
      <div className="order-navigation-items">
        {ordersList &&
          ordersList.map((orderItem) => (
            <NavOrderItem
              orderId={orderId}
              orderItem={orderItem}
              handleOrderId={handleTakingOrderId}
              key={orderItem.orderId}
            />
          ))}
      </div>
    </div>
  );
};

export default OrderNavigation;
