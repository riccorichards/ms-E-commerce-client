import "./SubCatHeader.scss";
import { IoArrowRedoOutline } from "react-icons/io5";
const SubCatHeader = () => {
  return (
    <div className="sub-cat-header-wrapper">
      <h1>Pizza</h1>
      <button className="sub-cat-header-btn">
        <span>See more</span> <IoArrowRedoOutline />
      </button>
    </div>
  );
};
export default SubCatHeader;
