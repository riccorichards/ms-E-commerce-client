import "./VendorMenu.scss";
import { FaSearch } from "react-icons/fa";
import VendorSubCat from "./VendorSubCat/VendorSubCat";
import VendorFood from "./VendorFood/VendorFood";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import MainCars from "../UserDashboard/userPageComps/dashborad/dashComps/ProductList/Components/MainCats/MainCars";
import {
  fetchMainCategories,
  getVendorFoods,
} from "../../redux/appCall/FoodAppCall";
import { getSpecVendor } from "../../redux/appCall/VendorAppCall";
import { useParams } from "react-router-dom";

const VendorMenu = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { specVendor } = useAppSelector((state) => state.vendor);
  const { vendorFoods } = useAppSelector((state) => state.food);

  useEffect(() => {
    if (id) {
      dispatch(getSpecVendor(id));
    }
  }, []); //eslint-disable-line

  useEffect(() => {
    if (specVendor) {
      dispatch(getVendorFoods(specVendor.name));
    }
  }, [specVendor?.name]); //eslint-disable-line

  useEffect(() => {
    dispatch(fetchMainCategories());
  }, []); //eslint-disable-line

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
      <VendorSubCat />
      <h2 style={{ marginTop: "25px", alignSelf: "flex-start" }}>Foods</h2>
      <VendorFood foods={vendorFoods} />
    </div>
  );
};

export default VendorMenu;
