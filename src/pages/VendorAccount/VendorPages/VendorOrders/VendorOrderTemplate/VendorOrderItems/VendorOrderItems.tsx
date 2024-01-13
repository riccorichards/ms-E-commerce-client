import ImageWraper from "../../../../../../components/ImageWraper";
import "./VendorOrderItems.scss";
import { useAppSelector } from "../../../../../../redux/hook";
import { useContext } from "react";
import VendorOrderContext from "../../VendorOrderContext";

const VendorOrderItems = () => {
  const { vendorOrderItems } = useAppSelector((s) => s.vendor);

  const getVendorOrderContect = useContext(VendorOrderContext);

  if (!getVendorOrderContect) return null;

  const { setIsOpen } = getVendorOrderContect;

  if (!vendorOrderItems) return null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {vendorOrderItems.slice(0, 2).map((item) => (
        <div className="vendor-order-items" key={item.productId}>
          <div>
            <ImageWraper image={item.product_image} size="70px" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <h3>{item.product_name}</h3>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontWeight: "900" }}>$ {item.product_price}</span>
              <span style={{ color: "orangered" }}>
                <strong>QTY: </strong> {item.qty}
              </span>
            </div>
          </div>
        </div>
      ))}
      <button className="vendor-order-more-btn" onClick={() => setIsOpen(true)}>
        More
      </button>
    </div>
  );
};

export default VendorOrderItems;
