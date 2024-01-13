import ImageWraper from "../../../../../../components/ImageWraper";
import { useAppSelector } from "../../../../../../redux/hook";
import "./VendorOrderItems.scss";

const VendorOrderItems = () => {
  const { vendorOrderItems } = useAppSelector((s) => s.vendor);

  if (!vendorOrderItems) return null;

  return (
    <div className="vendor-order-items-wrapper">
      {vendorOrderItems.map((item) => (
        <div className="vendor-order-items" key={item.productId}>
          <div>
            <ImageWraper image={item.product_image} size="55px" />
          </div>
          <div style={{ width: "200px" }}>
            <h3>{item.product_name}</h3>
          </div>
          <div>
            <span>x{item.qty}</span>
          </div>
          <div>
            <span>${item.product_price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VendorOrderItems;
