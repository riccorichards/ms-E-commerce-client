import "./TotalProfit.scss";
import { FaDollarSign } from "react-icons/fa";

const TotalProfit = () => {
  return (
    <div className="total-profit-wrapper">
      <div className="total-profile-header-wrapper">
        <div className="total-profile-header">
          <FaDollarSign />
          <h4>Total Profit</h4>
        </div>
      </div>
      <div className="total-profile-body">
        <span>$ 1,435,432</span>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </div>
    </div>
  );
};

export default TotalProfit;
