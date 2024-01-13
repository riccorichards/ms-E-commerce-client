import React from "react";
import "./OrderTemplate.scss";
import { useAppSelector } from "../../redux/hook";
import OrderHeader from "./OrderHeader/OrderHeader";
import OrderInformationalPart from "./OrderInformationalPart/OrderInformationalPart";
import OrderItems from "./OrderItems/OrderItems";
import OrderFooter from "./OrderFooter/OrderFooter";

const OrderTemplate = React.memo(() => {
  const { order } = useAppSelector((s) => s.shopping);

  if (!order) return null;

  return (
    <div className="order-template-wrapper">
      <OrderHeader />
      <OrderInformationalPart />
      <OrderItems />
      <OrderFooter />
    </div>
  );
});

export default OrderTemplate;
