import { FC, useContext, useState } from "react";
import { VendorOrdersWrapper } from "../../../../redux/type.slice";
import VendorOrderTemplate from "./VendorOrderTemplate/VendorOrderTemplate";
import VendorOrderContext from "./VendorOrderContext";

const LinearVendorOrderTemplate: FC<{
  order: VendorOrdersWrapper;
}> = ({ order }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const getVendorOrderContect = useContext(VendorOrderContext);

  if (!getVendorOrderContect) return null;

  const { setNewRequest } = getVendorOrderContect;

  const onMouseEntry = (
    orderId: number,
    orderDate: string,
    customerId: string,
    deliverymanName: string
  ) => {
    setIsHovered(true);
    const newRequest = {
      orderId,
      orderDate,
      customerId,
      deliverymanName,
    };
    setNewRequest(newRequest);
  };
  const onMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px",
        position: "relative",
        transition: "all 0.25s ease-in-out",
        backgroundColor: isHovered ? "gray" : "",
        cursor: "pointer",
      }}
      onMouseEnter={() =>
        onMouseEntry(
          order.orderId,
          order.createdAt,
          order.customer as string,
          order.deliverymanName
        )
      }
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          width: "80px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <span>Order #{order.orderId}</span>
        <span>{order.createdAt.split("T")[0]}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <h5>Customer ID</h5>
        <span>{order.customer as string}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <h5>Deliveryman name</h5>
        <span>{order.deliverymanName}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <h5>Total amount</h5>
        <span>${order.total_amount.toFixed(2)}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <h5>Status</h5>
        <span>{order.order_status}</span>
      </div>
      {isHovered && <VendorOrderTemplate />}
    </div>
  );
};

export default LinearVendorOrderTemplate;

///className="vendor-orders-item"
