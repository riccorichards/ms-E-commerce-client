import { useEffect } from "react";
import DashHeader from "./Components/Header/DashHeader";
import MainCars from "./Components/MainCats/MainCars";
import PopularFoods from "./Components/PopularFood/PopularFoods";
import SubCats from "./Components/SubCats/SubCats";
import "./ProductList.scss";
import { useAppDispatch } from "../../../../../../redux/hook";
import { fetchMainCategories } from "../../../../../../redux/appCall/FoodAppCall";

const ProductList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMainCategories());
  }, []); //eslint-disable-line

  return (
    <div className="product-list">
      <DashHeader />
      <MainCars />
      <SubCats />
      <PopularFoods />
    </div>
  );
};

export default ProductList;
