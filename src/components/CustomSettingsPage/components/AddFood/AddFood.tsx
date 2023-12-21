import "./AddFood.scss";
import AddFoodMainCat from "./AddFoodMainCat/AddFoodMainCat";

const AddFood = () => {
  return (
    <div className="add-food-wrapper">
      <h1>Add new Food</h1>
      <AddFoodMainCat />
      <div className="add-food"></div>
    </div>
  );
};

export default AddFood;
