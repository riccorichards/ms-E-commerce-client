import "./PopularFoodsHeader.scss";
import { IoArrowRedoOutline } from "react-icons/io5";

const PopularFoodsHeader = () => {
  return (
    <div className="popular-food-header-wrapper">
      <h1>Popular food</h1>
      <button className="popular-food-header-btn">
        <span>See more</span> <IoArrowRedoOutline />
      </button>
    </div>
  );
};

export default PopularFoodsHeader;
