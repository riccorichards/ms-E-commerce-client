import "./SubFooter.scss";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { TbShoppingCart } from "react-icons/tb";
import { MdChecklist } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SubFooter = () => {
  const navigate = useNavigate();

  const goSubC = () => {
    navigate("/customer/sub-category");
  };

  return (
    <div className="main_subcat-footer">
      <div className="sub-footer-item" onClick={() => goSubC()}>
        <FaRegEye />
      </div>
      <div className="sub-footer-item">
        <TbShoppingCart />
      </div>
      <div className="sub-footer-item">
        <FaRegHeart />
      </div>
      <div className="sub-footer-item">
        <MdChecklist />
      </div>
    </div>
  );
};
export default SubFooter;
