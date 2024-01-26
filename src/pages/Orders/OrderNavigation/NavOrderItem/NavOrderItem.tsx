import { FC } from "react";
import "./NavOrderItem.scss";
import { IoCaretForwardOutline } from "react-icons/io5";
import { OrderListType } from "../../../../redux/type.slice";
import Utils from "../../../../utils/utils";

const NavOrderItem: FC<{
  orderItem: OrderListType;
  handleOrderId: (val: number) => void;
  orderId: number | null;
}> = ({ orderItem, handleOrderId, orderId }) => {
  const t = orderId && orderId === orderItem.orderId;
  return (
    <div
      className="nav-order-item"
      onClick={() => handleOrderId(orderItem.orderId)}
      style={{
        backgroundColor: t ? "#008080" : "",
        color: t ? "#fff" : "",
      }}
    >
      <div className="order-item-header">
        <h3>{`Order #${orderItem.orderId}`}</h3>
        <span>{Utils.dateFormatter(orderItem.createdAt).date}</span>
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
