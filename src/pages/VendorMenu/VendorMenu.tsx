import "./VendorMenu.scss";
import VendorSubCat from "./VendorSubCat/VendorSubCat";
import VendorFood from "./VendorFood/VendorFood";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import MainCars from "../UserDashboard/userPageComps/dashborad/dashComps/ProductList/Components/MainCats/MainCars";
import { fetchMainCategories } from "../../redux/appCall/FoodAppCall";
import {
  getSpecVendor,
  getVendorFoods,
} from "../../redux/appCall/VendorAppCall";
import { useParams } from "react-router-dom";
import VendorMenuHeader from "./VendorMenuHeader/VendorMenuHeader";

const VendorMenu = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { specVendor } = useAppSelector((state) => state.vendor);
  const { vendorFoods } = useAppSelector((state) => state.food);

  useEffect(() => {
    if (id) {
      dispatch(getSpecVendor(id));
    }
  }, [id, dispatch]);

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
      <VendorMenuHeader />
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
