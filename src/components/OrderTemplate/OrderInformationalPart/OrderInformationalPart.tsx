import "./OrderInformationalPart.scss";
import { FaRegStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import RatingCalculation from "../../RatingCalculation";
import { useEffect, useState } from "react";
import { getVendorForOrder } from "../../../redux/appCall/ShoppingApiCall";

const OrderInformationalPart = () => {
  const { customer } = useAppSelector((s) => s.customer);
  const { order, vendorForOrder } = useAppSelector((s) => s.shopping);
  const [vendorIndex, setVendorIndex] = useState<number>(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (order) {
      setVendorIndex(0);
      const uniqueAddresses = new Set(
        order.orderItem.map((item) => item.product_address)
      );
      uniqueAddresses.forEach((address) => {
        dispatch(getVendorForOrder(address));
      });
    }
  }, [order]); //eslint-disable-line

  const vendor = vendorForOrder[vendorIndex];
  if (!customer || !order || vendorForOrder.length < 1 || !vendor) return null;

  const handleVendorDisplay = (i: number) => {
    setVendorIndex(i);
  };

  return (
    <div className="order-template-locational-info">
      <div className="delivery-address-wrapper">
        <h5>Delivery Address</h5>
        <div className="delivery-address">
          <p
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IoLocationOutline /> {customer.address.street}
          </p>
          <span className="delivery-note">
            <span style={{ color: "orangered" }}>Note:</span> {order.note}
          </span>
        </div>
      </div>
      <div className="order-template-vendor-info-wrapper">
        <h5>Restaurant</h5>
        <div className="order-template-vendor-info">
          <img src={vendor.image} alt="vendor-img" className="vendor-img" />
          <div className="order-template-vendor-additional-info">
            <h3>{vendor.name}</h3>
            <span>
              <RatingCalculation
                rating={{ icon: FaRegStar, rating: vendor.rating }}
              />
            </span>
            <span>{vendor.address}</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          {vendorForOrder.map((_, i) => (
            <div
              className="order-template-vendor-switcher"
              key={i}
              onClick={() => handleVendorDisplay(i)}
              style={{
                backgroundColor: i === vendorIndex ? "orangered" : "",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default OrderInformationalPart;
