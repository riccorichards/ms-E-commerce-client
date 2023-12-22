import { FC } from "react";
import ImageWraper from "../ImageWraper";
import "./FoodCard.scss";
import { MdOutlineFavorite, MdFavoriteBorder } from "react-icons/md";
import { IoMdAdd, IoMdTime } from "react-icons/io";
import { ProductType } from "../../redux/type.slice";

const FoodCard: FC<{
  food: ProductType;
  wishlistToggle: (productId: number) => void;
  isPicked: boolean;
  addFoodToCart: (productId: number) => void;
}> = ({ food, wishlistToggle, isPicked, addFoodToCart }) => {
  return (
    <div className="food-card-wrapper">
      <div className="food-image-wrapper">
        <ImageWraper image={food.image} size="100%" nonCircle />
      </div>
      <div className="food-content-wrapper">
        <div className="food-card-header">
          <h4>{food.title}</h4>
          <div className="food-prep-duration">
            <IoMdTime />
            <span style={{ fontWeight: "600" }}>25 min</span>
          </div>
        </div>
        <p>{food.desc}</p>
      </div>
      <div className="shopping-option">
        <div className="price-wrapper">
          <span className="price-header">Price</span>
          <span
            style={{ fontWeight: "bold", fontSize: "24px" }}
          >{`$ ${food.price}`}</span>
        </div>
        <div className="food-action-wrapper">
          <div
            className="add-to-wishlist"
            onClick={() => wishlistToggle(food.id)}
          >
            {isPicked ? <MdOutlineFavorite /> : <MdFavoriteBorder />}
          </div>
          <div
            className="add-to-cart-wrapper"
            onClick={() => addFoodToCart(food.id)}
          >
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
