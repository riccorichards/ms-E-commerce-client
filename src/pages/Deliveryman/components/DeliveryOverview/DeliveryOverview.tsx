import "./DeliveryOverview.scss";
import { GiProfit } from "react-icons/gi";
import { VscFeedback } from "react-icons/vsc";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { useAppSelector } from "../../../../redux/hook";
import { useContext } from "react";
import DeliveryContext from "../../DeliveryContext";

const DeliveryOverview = () => {
  const { deliverymanOrders, deliveyman, ordersLen } = useAppSelector(
    (s) => s.deliveryman
  );

  const setOptions = useContext(DeliveryContext)?.setOptions;
  const options = useContext(DeliveryContext)?.options;

  if (!deliveyman) return null;
  const handleOption = (type: string) => {
    if (setOptions) {
      switch (type) {
        case "Earning":
          setOptions("Earning");
          break;
        case "Orders":
          setOptions("Orders");
          break;
        case "Feedbacks":
          setOptions("Feedbacks");
          break;
      }
    }
  };

  return (
    <main className="deliveryman-overview-wrapper">
      {deliveyman.feedCount > 0 ||
      (ordersLen && ordersLen > 0) ||
      (deliverymanOrders && deliverymanOrders?.length > 0) ? (
        <>
          <section
            className="deliveryman-overview-item"
            onClick={() => handleOption("Earning")}
            style={{ backgroundColor: options === "Earning" ? "#87ceeb" : "" }}
          >
            <h3>Earning</h3>
            <div className="deliveryman-overview-item-content">
              <GiProfit />
              <span>${ordersLen && ordersLen * 2.5}</span>
            </div>
          </section>
          <section
            className="deliveryman-overview-item"
            onClick={() => handleOption("Orders")}
            style={{ backgroundColor: options === "Orders" ? "#87ceeb" : "" }}
          >
            <h3>Orders</h3>
            <div className="deliveryman-overview-item-content">
              <FaAmericanSignLanguageInterpreting />
              <span>{ordersLen}</span>
            </div>
          </section>
          <section
            className="deliveryman-overview-item"
            onClick={() => handleOption("Feedbacks")}
            style={{
              backgroundColor: options === "Feedbacks" ? "#87ceeb" : "",
            }}
          >
            <h3>Feedback</h3>
            <div className="deliveryman-overview-item-content">
              <VscFeedback />
              <span>{deliveyman.feedCount}</span>
            </div>
          </section>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <h3>Data is not available</h3>
        </div>
      )}
    </main>
  );
};

export default DeliveryOverview;
