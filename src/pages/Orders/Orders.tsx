import "./Orders.scss";
import OrderNavigation from "./OrderNavigation/OrderNavigation";
import OrderTemplate from "./../../components/OrderTemplate/OrderTemplate";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect, useState } from "react";
import {
  findOrderById,
  getOrderList,
} from "../../redux/appCall/ShoppingApiCall";

const Orders = () => {
  const { ordersList } = useAppSelector((s) => s.shopping);
  const [orderId, setOrderId] = useState<number | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOrderList());
  }, [dispatch]);

  useEffect(() => {
    if (ordersList && orderId == null) {
      const firstOrderId = ordersList[0] && ordersList[0].orderId;
      setOrderId(firstOrderId);
    }
  }, [ordersList, orderId]);

  useEffect(() => {
    if (orderId != null) {
      dispatch(findOrderById(orderId));
    }
  }, [orderId, dispatch]);

  return (
    <div className="order-wrapper">
      <OrderNavigation setOrderId={setOrderId} orderId={orderId} />
      <OrderTemplate />
    </div>
  );
};

export default Orders;
