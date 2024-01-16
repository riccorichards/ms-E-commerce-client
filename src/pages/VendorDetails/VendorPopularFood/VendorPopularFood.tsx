import { useEffect } from "react";
import FoodCard from "../../../components/FoodCard/FoodCard";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import "./VendorPopularFood.scss";
import { getVendorFoods } from "../../../redux/appCall/FoodAppCall";

const VendorPopularFood = () => {
  const { specVendor, vendor } = useAppSelector((state) => state.vendor);
  const { vendorFoods } = useAppSelector((state) => state.food);
  const dispatch = useAppDispatch();
  const targetName = specVendor?.name || vendor?.name;

  useEffect(() => {
    if (targetName) {
      dispatch(getVendorFoods(targetName));
    }
  }, [targetName, dispatch]);

  if (!vendorFoods) return null;

  return (
    <div className="vendor-popular-food-wrapper">
      <h2 style={{ borderBottom: "2px solid orangered", width: "fit-content" }}>
        Popular Foods
      </h2>
      <div className="vendor-popular-food">
        {vendorFoods.map((food) => (
          <FoodCard
            key={typeof food === "object" ? food.title : food}
            food={food}
          />
        ))}
      </div>
    </div>
  );
};

export default VendorPopularFood;
