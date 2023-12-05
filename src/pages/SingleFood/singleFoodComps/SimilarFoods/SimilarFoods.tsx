import "./SimilarFoods.scss";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import ImageWraper from "./../../../../components/ImageWraper";

const fake =
  "https://i.pinimg.com/564x/78/15/d1/7815d11808a74c01f083bd525971c346.jpg";

const SimilarFoods = () => {
  return (
    <div className="similar-food-wrapper">
      <div className="main-single-food">
        <img src={fake} alt="test" className="main-food" />
      </div>
      <div className="another-food-from-subcat">
        <div className="request-btns">
          <GrFormPrevious />
        </div>
        <div className="another-food-content">
          <div className="another-food-content-item">
            <ImageWraper image={fake} size="100px" />
            <span>Example 1</span>
          </div>
          <div className="another-food-content-item">
            <ImageWraper image={fake} size="100px" />
            <span>Example 1</span>
          </div>
          <div className="another-food-content-item">
            <ImageWraper image={fake} size="100px" />
            <span>Example 1</span>
          </div>
        </div>
        <div className="request-btns">
          <GrFormNext />
        </div>
      </div>
    </div>
  );
};

export default SimilarFoods;
