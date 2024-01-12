import "./DeliveryOverview.scss";
import { GiProfit } from "react-icons/gi";
import { VscFeedback } from "react-icons/vsc";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";

const DeliveryOverview = () => {
  return (
    <div className="deliveryman-overview-wrapper">
      <div className="deliveryman-overview-item">
        <h3>Earning</h3>
        <div className="deliveryman-overview-item-content">
          <GiProfit />
          <span>$15, 450</span>
        </div>
      </div>
      <div className="deliveryman-overview-item">
        <h3>Orders</h3>
        <div className="deliveryman-overview-item-content">
          <FaAmericanSignLanguageInterpreting />
          <span>159</span>
        </div>
      </div>
      <div className="deliveryman-overview-item">
        <h3>Feedback</h3>
        <div className="deliveryman-overview-item-content">
          <VscFeedback />
          <span>1,097</span>
        </div>
      </div>
    </div>
  );
};

export default DeliveryOverview;
