import "./AddFoodDetails.scss";
import AddFoodForm from "./AddFoodForm/AddFoodForm";
import FoodImage from "./FoodImage/FoodImage";

const AddFoodDetails = () => {
  return (
    <section className="add-food-details-wrapper" id="add-food">
      <FoodImage />
      <AddFoodForm />
    </section>
  );
};

export default AddFoodDetails;
