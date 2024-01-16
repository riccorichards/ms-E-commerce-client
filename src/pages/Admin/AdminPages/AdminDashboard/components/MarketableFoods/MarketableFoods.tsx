import { IoFastFood } from "react-icons/io5";
import "./MarketableFoods.scss";
import MarketableFoodTemplate from "./MarketableFoodTemplate/MarketableFoodTemplate";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hook";
import { useEffect } from "react";
import { getPopularFoods } from "../../../../../../redux/appCall/AdminAppCall";

const MarketableFoods = () => {
  const dispatch = useAppDispatch();
  const { popularItems } = useAppSelector((s) => s.admin);

  useEffect(() => {
    dispatch(getPopularFoods());
  }, [dispatch]);

  if (!popularItems) return null;

  return (
    <div className="marketable-foods-wrapper">
      <div className="marketable-header-wrapper">
        <div className="marketable-header">
          <IoFastFood />
          <h3>Marketable Foods</h3>
        </div>
      </div>
      <div className="marketable-body">
        {popularItems.popularItems.map((item) => (
          <MarketableFoodTemplate
            key={item.foodName}
            name={item.foodName}
            image={item.image}
            amount={popularItems.amount}
            length={item.length}
          />
        ))}
      </div>
    </div>
  );
};

export default MarketableFoods;
