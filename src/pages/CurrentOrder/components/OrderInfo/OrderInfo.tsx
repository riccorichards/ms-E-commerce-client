import "./OrderInfo.scss";
import ImageWraper from "./../../../../components/ImageWraper";
import { useAppSelector } from "../../../../redux/hook";

const OrderInfo = () => {
  const { order } = useAppSelector((state) => state.shopping);
  if (!order) return null;

  return (
    <div className="current-order-information">
      <table className="order-table">
        <thead className="order-thead">
          <tr className="order-tr">
            <th className="order-th">Item</th>
            <th className="order-th">Qty</th>
            <th className="order-th">Price</th>
            <th className="order-th">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {order.orderItem &&
            order.orderItem.map((food) => (
              <tr className="order-tr" key={food.productId}>
                <td className="order-td">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      width: "100%",
                    }}
                  >
                    <div>
                      <ImageWraper image={food.product_image} size="75px" />
                    </div>
                    <div style={{}}>
                      <h4>{food.product_name}</h4>
                      <span
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <span>{food.product_address}</span>
                      </span>
                    </div>
                  </div>
                </td>
                <td className="order-td">x{food.qty}</td>
                <td className="order-td">$ {food.product_price}</td>
                <td className="order-td">
                  $ {(parseFloat(food.product_price) * food.qty).toFixed(2)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderInfo;
