import DashHeader from "./Components/Header/DashHeader";
import MainCars from "./Components/MainCats/MainCars";
import PopularFoods from "./Components/PopularFood/PopularFoods";
import SubCats from "./Components/SubCats/SubCats";
import "./ProductList.scss";

const ProductList = () => {
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
