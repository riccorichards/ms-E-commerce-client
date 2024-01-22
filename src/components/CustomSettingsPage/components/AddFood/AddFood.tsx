import { useEffect, useState } from "react";
import "./AddFood.scss";
import AddFoodMainCat from "./AddFoodMainCat/AddFoodMainCat";
import AddFoodSubC from "./AddFoodSubC/AddFoodSubC";
import { fetchVendorSubCategories } from "../../../../redux/appCall/FoodAppCall";
import { useAppDispatch } from "../../../../redux/hook";
import AddFoodDetails from "./AddFoodDetails/AddFoodDetails";
import AddFoodContext from "./AddFoodContext";

const AddFood = () => {
  const [getMainCId, setGetMainCId] = useState<number | null>(null);
  const [getSubCId, setGetSubCId] = useState<number | null>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchVendorSubCategories());
  }, []); //eslint-disable-line

  const addFoodValues = { getSubCId, setGetSubCId, getMainCId, setGetMainCId };
  return (
    <AddFoodContext.Provider value={addFoodValues}>
      <h2>
        Add new <span style={{ color: "orangered" }}>Food</span>
      </h2>
      <main className="add-food-wrapper">
        <AddFoodMainCat />
        <AddFoodSubC />
        <AddFoodDetails />
      </main>
    </AddFoodContext.Provider>
  );
};

export default AddFood;
