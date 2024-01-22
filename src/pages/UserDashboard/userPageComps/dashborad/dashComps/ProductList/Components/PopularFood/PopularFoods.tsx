import { useEffect, useState } from "react";
import FoodCard from "../../../../../../../../components/FoodCard/FoodCard";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../../redux/hook";
import "./PopularFoods.scss";
import { getFoods } from "../../../../../../../../redux/appCall/FoodAppCall";
import Pagination from "../../../../../../../../components/pagination/Pagination";

const PopularFoods = () => {
  const { foods, foodPagination } = useAppSelector((state) => state.food);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    dispatch(getFoods(page));
  }, [dispatch, page]);

  if (!foods || !foodPagination) return null;
  return (
    <div className="popular-food-wrappe">
      <h1>Foods</h1>
      <div className="popular-foods">
        {foods &&
          foods.map((food) => (
            <FoodCard key={food.id} food={food} from="mainDashboard" />
          ))}
      </div>
      <Pagination totalPage={foodPagination.totalPages} setPage={setPage} />
    </div>
  );
};

export default PopularFoods;
