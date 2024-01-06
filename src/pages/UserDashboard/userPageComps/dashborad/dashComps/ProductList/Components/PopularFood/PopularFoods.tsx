import { useEffect } from "react";
import FoodCard from "../../../../../../../../components/FoodCard/FoodCard";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../../redux/hook";
import PopularFoodsHeader from "./popularfoodHeader/PopularFoodsHeader";
import "./PopularFoods.scss";
import { getFoods } from "../../../../../../../../redux/appCall/FoodAppCall";

const PopularFoods = () => {
  const { foods } = useAppSelector((state) => state.food);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFoods());
  }, [dispatch]);

  return (
    <div className="popular-food-wrappe">
      <PopularFoodsHeader />
      <div className="popular-foods">
        {foods &&
          foods.map((food) => (
            <FoodCard key={food.id} food={food} from="mainDashboard" />
          ))}
      </div>
    </div>
  );
};

export default PopularFoods;
