import { FC } from "react";
import "./OrderTemplate.scss";
import { IoLocationOutline } from "react-icons/io5";

type OrderType = {
  id: number;
  date: string;
  deliveryman: {
    deliverymanImg: string;
    deliveryman: string;
    deliverymanDate: string;
  };
  userAddress: string;
  note?: string;
  vendor: {
    vendor: string;
    vendorImg: string;
    vendorRating: number;
    vendorAddress: string;
  };
  distance: string;
  duration: string;
  orderMenu: {
    foodImg: string;
    foodQty: number;
    food: string;
    foodPrice: string;
  }[];
  total: string;
};
const OrderTemplate: FC<{ order: OrderType }> = ({ order }) => {
  return (
    <div className="order-template-wrapper">
      <div className="order-template-header">
        <div className="order-template-date">
          <h2>{`Order#${order.id}`}</h2>
          <span>{order.date}</span>
        </div>
        <div className="order-template-deliveryman">
          <img
            src={order.deliveryman.deliverymanImg}
            alt="deliveryman-Img"
            className="deliveryman-Img"
          />
          <div className="deliveryman-info">
            <h3>{order.deliveryman.deliveryman}</h3>
            <span>{order.deliveryman.deliverymanDate}</span>
          </div>
        </div>
      </div>
      <div className="order-template-locational-info">
        <div className="delivery-address-wrapper">
          <h5>Delivery Address</h5>
          <div className="delivery-address">
            <h2
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IoLocationOutline /> {order.userAddress}
            </h2>
            <span className="delivery-note">
              <span style={{ color: "orangered" }}>Note:</span> {order.note}
            </span>
          </div>
        </div>
        <div className="order-template-vendor-info-wrapper">
          <h5>Vendor</h5>
          <div className="order-template-vendor-info">
            <img
              src={order.vendor.vendorImg}
              alt="vendor-img"
              className="vendor-img"
            />
            <div className="order-template-vendor-additional-info">
              <h3>{order.vendor.vendor}</h3>
              <span>{order.vendor.vendorRating}</span>
              <span>{order.vendor.vendorAddress}</span>
            </div>
          </div>
        </div>
        <div className="distance-info-wrapper">
          <h5>Time estimate</h5>
          <div className="distance-info">
            <div className="distance">
              <span style={{ fontWeight: "900" }}>Distance:</span>
              {order.distance}
            </div>
            <div className="duration">
              <span style={{ fontWeight: "900" }}>Duration:</span>
              {order.duration}
            </div>
          </div>
        </div>
      </div>
      <div className="order-template-menu-wrapper">
        <h5>Order Menu</h5>
        <div className="order-template-menu">
          {order.orderMenu.map((item) => (
            <div className="order-template-menu-item">
              <div className="menu-item-left-side">
                <div className="food-img-wrapper">
                  <img src={item.foodImg} alt="food-img" className="food-img" />
                </div>
                <div className="food-additional-info">
                  <h2>{item.food}</h2>
                  <span>{`x${item.foodQty}`}</span>
                </div>
              </div>
              <span className="food-item-price">{item.foodPrice}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="order-template-payment">
        <h2>Total</h2>
        <span>{order.total}</span>
      </div>
    </div>
  );
};

export default OrderTemplate;
