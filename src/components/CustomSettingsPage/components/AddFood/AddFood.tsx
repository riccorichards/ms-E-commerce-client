import { useEffect, useState } from "react";
import "./AddFood.scss";
import AddFoodMainCat from "./AddFoodMainCat/AddFoodMainCat";
import AddFoodSubC from "./AddFoodSubC/AddFoodSubC";
import { fetchVendorSubCategories } from "../../../../redux/appCall/FoodAppCall";
import { useAppDispatch } from "../../../../redux/hook";
import AddFoodDetails from "./AddFoodDetails/AddFoodDetails";

const AddFood = () => {
  const [getMainCId, setGetMainCId] = useState<number | null>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchVendorSubCategories());
  }, []); //eslint-disable-line
  return (
    <div className="add-food-wrapper">
      <h2>
        Add new <span style={{ color: "orangered" }}>Food</span>
      </h2>
      <AddFoodMainCat setGetMainCId={setGetMainCId} />
      <AddFoodSubC mainCId={getMainCId} />
      <AddFoodDetails />
    </div>
  );
};

export default AddFood;
