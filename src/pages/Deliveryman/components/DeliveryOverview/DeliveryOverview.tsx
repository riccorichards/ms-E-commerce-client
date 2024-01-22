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

  if (!deliveyman || !deliverymanOrders || !ordersLen) return null;

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
    <div className="deliveryman-overview-wrapper">
      <div
        className="deliveryman-overview-item"
        onClick={() => handleOption("Earning")}
        style={{ backgroundColor: options === "Earning" ? "#87ceeb" : "" }}
      >
        <h3>Earning</h3>
        <div className="deliveryman-overview-item-content">
          <GiProfit />
          <span>${ordersLen * 2.5}</span>
        </div>
      </div>
      <div
        className="deliveryman-overview-item"
        onClick={() => handleOption("Orders")}
        style={{ backgroundColor: options === "Orders" ? "#87ceeb" : "" }}
      >
        <h3>Orders</h3>
        <div className="deliveryman-overview-item-content">
          <FaAmericanSignLanguageInterpreting />
          <span>{ordersLen}</span>
        </div>
      </div>
      <div
        className="deliveryman-overview-item"
        onClick={() => handleOption("Feedbacks")}
        style={{ backgroundColor: options === "Feedbacks" ? "#87ceeb" : "" }}
      >
        <h3>Feedback</h3>
        <div className="deliveryman-overview-item-content">
          <VscFeedback />
          <span>{deliveyman.feedCount}</span>
        </div>
      </div>
    </div>
  );
};

export default DeliveryOverview;
