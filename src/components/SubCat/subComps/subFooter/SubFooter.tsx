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
    <footer className="main_subcat-footer">
      <section className="sub-footer-item" onClick={() => goSubC()}>
        <FaRegEye />
      </section>
      <section className="sub-footer-item">
        <TbShoppingCart />
      </section>
      <section className="sub-footer-item">
        <FaRegHeart />
      </section>
      <section className="sub-footer-item">
        <MdChecklist />
      </section>
    </footer>
  );
};
export default SubFooter;
