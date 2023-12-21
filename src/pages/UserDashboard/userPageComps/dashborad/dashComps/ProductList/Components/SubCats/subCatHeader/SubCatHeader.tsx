import { useNavigate } from "react-router-dom";
import "./SubCatHeader.scss";
import { IoArrowRedoOutline } from "react-icons/io5";
const SubCatHeader = () => {
  const navigate = useNavigate();

  const goSubC = () => {
    navigate("/customer/home/sub-category");
  };

  return (
    <div className="sub-cat-header-wrapper">
      <h1>Sub Categories</h1>
      <button className="sub-cat-header-btn" onClick={() => goSubC()}>
        <span>See more</span> <IoArrowRedoOutline />
      </button>
    </div>
  );
};
export default SubCatHeader;
