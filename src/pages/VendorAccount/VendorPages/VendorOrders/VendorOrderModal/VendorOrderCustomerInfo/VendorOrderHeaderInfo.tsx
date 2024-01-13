import { useContext } from "react";
import ImageWraper from "../../../../../../components/ImageWraper";
import "./VendorOrderHeaderInfo.scss";
import VendorOrderContext from "../../VendorOrderContext";
import { useAppSelector } from "../../../../../../redux/hook";

const VendorOrderHeaderInfo = () => {
  const getVendorOrderContect = useContext(VendorOrderContext);
  const { orderCustomerInfo } = useAppSelector((s) => s.vendor);

  if (!getVendorOrderContect || !orderCustomerInfo) return null;

  const { username, image, email, address } = orderCustomerInfo;
  const { orderDate, orderId } = getVendorOrderContect.newRequest;

  if (!orderDate || !orderId) return null;

  return (
    <div className="vendor-order-header-info">
      <div className="vendor-order-info-part">
        <h2>Order #{orderId}</h2>
        <p>{orderDate.split("T")[0]}</p>
      </div>
      <div className="vendor-order-customer-part">
        <div style={{ textAlign: "end" }}>
          <h3>{username}</h3>
          <p>{email}</p>
          <p>{address}</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ImageWraper image={image} size="55px" />
        </div>
      </div>
    </div>
  );
};

export default VendorOrderHeaderInfo;
