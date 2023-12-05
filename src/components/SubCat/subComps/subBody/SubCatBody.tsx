import ImageWraper from "../../../ImageWraper";
import RatingCalculation from "../../../RatingCalculation";
import "../subBody/SubCatBody.scss";
import { FaRegHandPointRight, FaRegHandPointLeft } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const fakeImage =
  "https://i.pinimg.com/564x/17/56/18/1756187ac989790bf9cab63dc8f9b430.jpg";
const SubCatBody = () => {
  const rating = {
    icon: FaRegStar,
    rating: 5,
  };

  return (
    <div className="main_subcat-body">
      <div className="main_subcat-content">
        <div className="sub-content-item">
          <p>Details</p>
          <h3>Burger</h3>
          <p>$ 15.59</p>
        </div>
        <div className="sub-content-item">
          <p>Shipping fee</p>
          <h3>2.5 km</h3>
          <p>$ 0.59</p>
        </div>
        <div className="sub-content-item">
          <p>Vendor</p>
          <h3>Vendor name</h3>
          <span>{<RatingCalculation rating={rating} />}</span>
        </div>
        <div className="food-switcher">
          <button className="switcher-btn">
            <FaRegHandPointLeft />
          </button>
          <span>02</span>
          <button className="switcher-btn">
            <FaRegHandPointRight />
          </button>
        </div>
      </div>
      <div className="subcat-image">
        <div className="food-image-place">
          <ImageWraper image={fakeImage} size="185px" />
        </div>
      </div>
    </div>
  );
};

export default SubCatBody;
