import { FC } from "react";
import ImageWraper from "../../../ImageWraper";
import RatingCalculation from "../../../RatingCalculation";
import "../subBody/SubCatBody.scss";
import { FaRegHandPointRight, FaRegHandPointLeft } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { SubSingleProduct } from "../../../../redux/type.slice";

const SubCatBody: FC<{ product: SubSingleProduct | null }> = ({ product }) => {
  const rating = {
    icon: FaRegStar,
    rating: 5,
  };

  return (
    <div className="main_subcat-body">
      <div className="main_subcat-content">
        <div className="sub-content-item">
          <p>Details</p>
          <h3>{product?.title ? product.title : null}</h3>
          <p>{`$ ${product?.price ? product.price : null}`}</p>
        </div>
        <div className="sub-content-item">
          <p>Shipping fee</p>
          <h3>2.5 km</h3>
          <p>{`Distount $${product?.discount ? product.discount : null}`}</p>
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
          <ImageWraper
            image={product?.image ? product.image : undefined}
            size="155px"
          />
        </div>
      </div>
    </div>
  );
};

export default SubCatBody;
