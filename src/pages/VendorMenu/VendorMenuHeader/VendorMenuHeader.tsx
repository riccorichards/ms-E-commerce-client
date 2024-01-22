import { FaSearch } from "react-icons/fa";
import { useAppSelector } from "../../../redux/hook";

const VendorMenuHeader = () => {
  const { vendor } = useAppSelector((state) => state.vendor);

  return (
    <header>
      <h1 style={{ alignSelf: "flex-start" }}>
        {vendor?.name}'s <span style={{ color: "orangered" }}>Menu</span>
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
    </header>
  );
};

export default VendorMenuHeader;
