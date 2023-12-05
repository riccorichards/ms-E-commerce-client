import "./SubFooter.scss";
import { FaRegEye, FaRegHeart, FaRegUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
const SubFooter = () => {
  return (
    <div className="main_subcat-footer">
      <div className="sub-footer-item">
        <FaRegEye />
      </div>
      <div className="sub-footer-item">
        <FiShoppingBag />
      </div>
      <div className="sub-footer-item">
        <FaRegHeart />
      </div>
      <div className="sub-footer-item">
        <FaRegUser />
      </div>
    </div>
  );
};
export default SubFooter;
