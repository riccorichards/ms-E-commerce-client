import "./OrderInfo.scss";
import ImageWraper from "./../../../../components/ImageWraper";
import RatingCalculation from "../../../../components/RatingCalculation";
import { FaRegStar } from "react-icons/fa";

const food =
  "https://i.pinimg.com/564x/4c/71/01/4c7101fd5fd553cf80cc29f757134d64.jpg";
const OrderInfo = () => {
  const rating = {
    icon: FaRegStar,
    rating: 5,
  };
  return (
    <div className="current-order-information">
      <div className="current-order-page-switcher">
        <button className="page-switcher-btn">Current Order</button>
        <button className="page-switcher-btn">Order Track</button>
      </div>
      <table className="order-table">
        <thead className="order-thead">
          <tr className="order-tr">
            <th className=".order-th">Item</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="order-td">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ImageWraper image={food} size="75px" />
                <div>
                  <h2>RiccoFood</h2>
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <span>
                      <RatingCalculation rating={rating} />
                    </span>
                    <span>Review 1k</span>
                  </span>
                </div>
              </div>
            </td>
            <td>x1</td>
            <td>$ 12.56</td>
            <td>$ 12.56</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ImageWraper image={food} size="75px" />
                <div>
                  <h2>RiccoFood</h2>
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <span>
                      <RatingCalculation rating={rating} />
                    </span>
                    <span>Review 1k</span>
                  </span>
                </div>
              </div>
            </td>
            <td>x1</td>
            <td>$ 12.56</td>
            <td>$ 12.56</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ImageWraper image={food} size="75px" />
                <div>
                  <h2>RiccoFood</h2>
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <span>
                      <RatingCalculation rating={rating} />
                    </span>
                    <span>Review 1k</span>
                  </span>
                </div>
              </div>
            </td>
            <td>x1</td>
            <td>$ 12.56</td>
            <td>$ 12.56</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ImageWraper image={food} size="75px" />
                <div>
                  <h2>RiccoFood</h2>
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <span>
                      <RatingCalculation rating={rating} />
                    </span>
                    <span>Review 1k</span>
                  </span>
                </div>
              </div>
            </td>
            <td>x1</td>
            <td>$ 12.56</td>
            <td>$ 12.56</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ImageWraper image={food} size="75px" />
                <div>
                  <h2>RiccoFood</h2>
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <span>
                      <RatingCalculation rating={rating} />
                    </span>
                    <span>Review 1k</span>
                  </span>
                </div>
              </div>
            </td>
            <td>x1</td>
            <td>$ 12.56</td>
            <td>$ 12.56</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ImageWraper image={food} size="75px" />
                <div>
                  <h2>RiccoFood</h2>
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <span>
                      <RatingCalculation rating={rating} />
                    </span>
                    <span>Review 1k</span>
                  </span>
                </div>
              </div>
            </td>
            <td>x1</td>
            <td>$ 12.56</td>
            <td>$ 12.56</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ImageWraper image={food} size="75px" />
                <div>
                  <h2>RiccoFood</h2>
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <span>
                      <RatingCalculation rating={rating} />
                    </span>
                    <span>Review 1k</span>
                  </span>
                </div>
              </div>
            </td>
            <td>x1</td>
            <td>$ 12.56</td>
            <td>$ 12.56</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ImageWraper image={food} size="75px" />
                <div>
                  <h2>RiccoFood</h2>
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <span>
                      <RatingCalculation rating={rating} />
                    </span>
                    <span>Review 1k</span>
                  </span>
                </div>
              </div>
            </td>
            <td>x1</td>
            <td>$ 12.56</td>
            <td>$ 12.56</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ImageWraper image={food} size="75px" />
                <div>
                  <h2>RiccoFood</h2>
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <span>
                      <RatingCalculation rating={rating} />
                    </span>
                    <span>Review 1k</span>
                  </span>
                </div>
              </div>
            </td>
            <td>x1</td>
            <td>$ 12.56</td>
            <td>$ 12.56</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderInfo;
