import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { getDeliverymanForOrder } from "../../../redux/appCall/ShoppingApiCall";
import "./OrderHeader.scss";

const OrderHeader = () => {
  const { order, deliverymanForOrder } = useAppSelector((s) => s.shopping);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (order) {
      dispatch(getDeliverymanForOrder(order.deliverymanName));
    }
  }, [order, dispatch]); //eslint-disable-line

  if (!order || !deliverymanForOrder) return null;

  return (
    <header className="order-template-header">
      <div className="order-template-date">
        <h2>{`Order#${order.id}`}</h2>
        <span>{order.createdAt.split("T")[0]}</span>
      </div>
      <div className="order-template-deliveryman">
        <img
          src={deliverymanForOrder.image}
          alt="deliveryman-Img"
          className="deliveryman-Img"
        />
        <div className="deliveryman-info">
          <h3>{deliverymanForOrder.name}</h3>
          <span>{deliverymanForOrder.createdAt.split("T")[0]}</span>
        </div>
      </div>
    </header>
  );
};

export default OrderHeader;
