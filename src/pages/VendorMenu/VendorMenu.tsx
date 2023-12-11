import VendorMainCat from "./VendorMainCat/VendorMainCat";
import "./VendorMenu.scss";
import { FaSearch } from "react-icons/fa";
import VendorSubCat from "./VendorSubCat/VendorSubCat";
import VendorFood from "./VendorFood/VendorFood";
import Pagination from "../../components/pagination/Pagination";

const VendorMenu = () => {
  return (
    <div className="vendor-menu-wrapper">
      <h1>
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
      <h2>Categories</h2>
      <VendorMainCat />
      <h2 style={{ marginTop: "25px" }}>Sub-categories</h2>
      <VendorSubCat />
      <h2 style={{ marginTop: "25px" }}>Foods</h2>
      <VendorFood />
      <Pagination num={12} />
    </div>
  );
};

export default VendorMenu;
