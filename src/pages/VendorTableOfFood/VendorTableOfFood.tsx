import "./VendorTableOfFood.scss";
import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import MainCars from "../UserDashboard/userPageComps/dashborad/dashComps/ProductList/Components/MainCats/MainCars";
import {
  fetchMainCategories,
  getVendorFoods,
} from "../../redux/appCall/FoodAppCall";
import VendorSubCatList from "./VendorSubCatList/VendorSubCatList";
import FoodTable from "./FoodTable/FoodTable";

const VendorTableOfFood = () => {
  const dispatch = useAppDispatch();
  const { vendor } = useAppSelector((state) => state.vendor);
  const { vendorFoods } = useAppSelector((state) => state.food);
  useEffect(() => {
    dispatch(fetchMainCategories());
  }, []); //eslint-disable-line

  useEffect(() => {
    if (vendor) {
      dispatch(getVendorFoods(vendor.name));
    }
  }, [dispatch, vendor]);

  if (!vendor) return null;

  return (
    <div className="vendor-menu-wrapper">
      <h1 style={{ alignSelf: "flex-start" }}>
        RiccoFood's <span style={{ color: "orangered" }}>Menu</span>
      </h1>
      <div className="vendor-menu-search-wrapper">
        <input
          type="text"
          placeholder="Enter a food name or use '@' for sub-categories"
          className="vendor-menu-search"
        />
        <button className="vendor-menu-search-btn">
          <FaSearch />
        </button>
      </div>
      <h2 style={{ alignSelf: "flex-start" }}>Categories</h2>
      <MainCars />
      <h3 style={{ marginTop: "25px", alignSelf: "flex-start" }}>
        Sub-categories
      </h3>
      <VendorSubCatList />
      <h2 style={{ marginTop: "25px", alignSelf: "flex-start" }}>Foods</h2>
      <FoodTable foods={vendorFoods} />
    </div>
  );
};

export default VendorTableOfFood;
