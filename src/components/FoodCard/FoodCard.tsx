import { FC } from "react";
import ImageWraper from "../ImageWraper";
import "./FoodCard.scss";
import { FaRegHeart } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";

type FoodType = {
  image: string;
  title: string;
};

const FoodCard: FC<{ food: FoodType }> = ({ food }) => {
  return (
    <div className="food-card-wrapper">
      <div className="food-image-wrapper">
        <ImageWraper image={food.image} size="100%" nonCircle />
      </div>
      <div className="food-content-wrapper">
        <div className="food-card-header">
          <h2>{food.title}</h2>
          <div className="food-prep-duration">
            <IoMdTime />
            <span style={{ fontWeight: "bold" }}>25 min</span>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure
          assumenda nulla qui modi itaque.
        </p>
      </div>
      <div className="shopping-option">
        <div className="price-wrapper">
          <span className="price-header">Price</span>
          <span style={{ fontWeight: "bold", fontSize: "24px" }}>$ 15.00</span>
        </div>
        <div className="food-action-wrapper">
          <div className="add-to-wishlist">
            <FaRegHeart />
          </div>
          <div className="add-to-cart-wrapper">
            <div className="add-to-cart">
              <span>Add to Cart</span>
              <div className="add-to-cart-icon">
                <IoMdAdd />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FoodCard;
