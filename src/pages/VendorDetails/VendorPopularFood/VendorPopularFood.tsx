import { useEffect } from "react";
import FoodCard from "../../../components/FoodCard/FoodCard";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import "./VendorPopularFood.scss";
import { getVendorFoods } from "@redux/appCall/VendorAppCall";

const VendorPopularFood = () => {
  const { specVendor, vendor } = useAppSelector((state) => state.vendor);
  const { vendorFoods } = useAppSelector((state) => state.food);
  const dispatch = useAppDispatch();
  const targetId = specVendor?._id || vendor?._id;

  useEffect(() => {
    if (targetId) {
      dispatch(getVendorFoods(targetId));
    }
  }, [targetId, dispatch]);

  if (!vendorFoods) return null;

  return (
    <section className="vendor-popular-food-wrapper">
      <h2 style={{ borderBottom: "2px solid orangered", width: "fit-content" }}>
        Popular Foods
      </h2>
      <main className="vendor-popular-food">
        {vendorFoods.map((food) => (
          <FoodCard key={food.title} food={food} />
        ))}
      </main>
    </section>
  );
};

export default VendorPopularFood;
