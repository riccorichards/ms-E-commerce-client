import FoodCard from "../../../components/FoodCard/FoodCard";
import { useAppSelector } from "../../../redux/hook";
import "./VendorPopularFood.scss";

const VendorPopularFood = () => {
  const { specVendor, vendor } = useAppSelector((state) => state.vendor);

  const targetFoodWrapper = specVendor?.foods || vendor?.foods;

  return (
    <div className="vendor-popular-food-wrapper">
      <h1 style={{ borderBottom: "2px solid orangered", width: "fit-content" }}>
        Popular Foods
      </h1>
      <div className="vendor-popular-food">
        {targetFoodWrapper &&
          targetFoodWrapper
            .slice(5, 8)
            .map((food) => (
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
