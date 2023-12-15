import { IoFastFood } from "react-icons/io5";
import "./MarketableFoods.scss";
import MarketableFoodTemplate from "./MarketableFoodTemplate/MarketableFoodTemplate";

const MarketableFoods = () => {
  return (
    <div className="marketable-foods-wrapper">
      <div className="marketable-header-wrapper">
        <div className="marketable-header">
          <IoFastFood />
          <h3>Marketable Foods</h3>
        </div>
      </div>
      <div className="marketable-body">
        <MarketableFoodTemplate />
        <MarketableFoodTemplate />
        <MarketableFoodTemplate />
      </div>
    </div>
  );
};

export default MarketableFoods;
