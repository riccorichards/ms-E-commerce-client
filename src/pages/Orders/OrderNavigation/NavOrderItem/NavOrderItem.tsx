import { FC } from "react";
import "./NavOrderItem.scss";
import { IoCaretForwardOutline } from "react-icons/io5";

type OrderItemType = {
  orderN: number;
  date: string;
  total: string;
};
const NavOrderItem: FC<{ orderItem: OrderItemType }> = ({ orderItem }) => {
  return (
    <div className="nav-order-item">
      <div className="order-item-header">
        <h3>{`Order #${orderItem.orderN}`}</h3>
        <span>{orderItem.date}</span>
      </div>
      <div className="order-item-total">
        {orderItem.total}
        <button className="order-item-btn">
          <IoCaretForwardOutline />
        </button>
      </div>
    </div>
  );
};

export default NavOrderItem;
