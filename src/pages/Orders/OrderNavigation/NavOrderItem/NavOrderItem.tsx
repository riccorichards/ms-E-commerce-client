import { FC } from "react";
import "./NavOrderItem.scss";
import { IoCaretForwardOutline } from "react-icons/io5";
import { OrderListType } from "../../../../redux/type.slice";

const dateFormatter = (str: string) => {
  return str.split("T");
};

const NavOrderItem: FC<{
  orderItem: OrderListType;
  handleOrderId: (val: number) => void;
}> = ({ orderItem, handleOrderId }) => {
  return (
    <div
      className="nav-order-item"
      onClick={() => handleOrderId(orderItem.orderId)}
    >
      <div className="order-item-header">
        <h3>{`Order #${orderItem.orderId}`}</h3>
        <span>{dateFormatter(orderItem.createdAt)[0]}</span>
      </div>
      <div className="order-item-total">
        ${orderItem.total_amount.toFixed(2)}
        <button className="order-item-btn">
          <IoCaretForwardOutline />
        </button>
      </div>
    </div>
  );
};

export default NavOrderItem;
