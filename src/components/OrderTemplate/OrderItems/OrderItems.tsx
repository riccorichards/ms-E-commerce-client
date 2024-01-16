import "./OrderItems.scss";
import { useAppSelector } from "../../../redux/hook";
const OrderItems = () => {
  const { order } = useAppSelector((s) => s.shopping);

  if (!order) return null;

  return (
    <div className="order-template-menu-wrapper">
      <h5>Order Menu</h5>
      <div className="order-template-menu">
        {order.orderItem.map((item) => (
          <div className="order-template-menu-item" key={item.productId}>
            <div className="menu-item-left-side">
              <div className="food-img-wrapper">
                <div>
                  <img
                    src={item.product_image}
                    alt="food-img"
                    className="food-img"
                  />
                </div>
              </div>
              <div className="food-additional-info">
                <h4>{item.product_name}</h4>
                <span>{`x${item.qty}`}</span>
              </div>
            </div>
            <span className="food-item-price">${item.product_price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderItems;
