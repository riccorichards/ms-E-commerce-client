import { FC } from "react";
import "./HoverFoodInfo.scss";
import { ProductType } from "../../../redux/type.slice";
import RatingCalculation from "./../../RatingCalculation";
import { FaRegStar } from "react-icons/fa";

const HoverFoodInfo: FC<{ food: ProductType }> = ({ food }) => {
  return (
    <div className="hover-food-info-wrapper">
      <div className="hover-food-info">
        <span>Details</span>
        <h4>{food.title}</h4>
        <p>{`$ ${food.price}`}</p>
      </div>
      <div className="hover-food-info">
        <span>Shipping fee</span>
        <h4>2.5 km</h4>
        <p>Discount: {`$ ${food.discount}`}</p>
      </div>
      <div className="hover-food-info">
        <span>Restaurant</span>
        <h4>{food.vendor_name}</h4>
        <p>
          <RatingCalculation
            rating={{ icon: FaRegStar, rating: food.vendor_rating }}
          />
        </p>
      </div>
    </div>
  );
};

export default HoverFoodInfo;
