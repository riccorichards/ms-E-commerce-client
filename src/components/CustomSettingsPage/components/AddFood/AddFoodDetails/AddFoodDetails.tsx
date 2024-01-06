import "./AddFoodDetails.scss";
import AddFoodForm from "./AddFoodForm/AddFoodForm";
import FoodImage from "./FoodImage/FoodImage";

const AddFoodDetails = () => {
  return (
    <div className="add-food-details-wrapper" id="add-food">
      <FoodImage />
      <AddFoodForm />
    </div>
  );
};

export default AddFoodDetails;
