import { useContext } from "react";
import ImageWraper from "../../../../../../components/ImageWraper";
import { useAppSelector } from "../../../../../../redux/hook";
import "./VendorOrderHeader.scss";
import VendorOrderContext from "../../VendorOrderContext";

const VendorOrderHeader = () => {
  const { orderCustomerInfo } = useAppSelector((s) => s.vendor);

  const getVendorOrderContect = useContext(VendorOrderContext);

  if (!getVendorOrderContect) return null;

  const { orderDate, orderId } = getVendorOrderContect.newRequest;

  if (!orderCustomerInfo || !orderDate || !orderId) return null;

  return (
    <header className="vendor-order-header">
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h3>Order #{orderId}</h3>
        <span>{orderDate.split("T")[0]}</span>
      </div>
      <ImageWraper image={orderCustomerInfo.image} size="45px" />
    </header>
  );
};

export default VendorOrderHeader;
