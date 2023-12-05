import "./SingleFood.scss";
import FoodDetailes from "./singleFoodComps/FoodDetailes/FoodDetailes";
import SimilarFoods from "./singleFoodComps/SimilarFoods/SimilarFoods";

const SingleFood = () => {
  return (
    <div className="single-food-page">
      <SimilarFoods />
      <FoodDetailes />
    </div>
  );
};

export default SingleFood;
