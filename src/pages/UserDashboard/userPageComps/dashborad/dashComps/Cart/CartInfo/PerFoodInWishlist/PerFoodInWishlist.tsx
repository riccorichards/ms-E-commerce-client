import { IoCloseCircleSharp } from "react-icons/io5";
import ImageWraper from "../../../../../../../../components/ImageWraper";
import "./PerFoodInWishlist.scss";
import { FC } from "react";
import { ProductType } from "../../../../../../../../redux/type.slice";

const PerFoodInWishlist: FC<{
  food: ProductType;
  deleteFoodFromWishlist: (productId: number) => void;
}> = ({ food, deleteFoodFromWishlist }) => {
  return (
    <div className="perfood-in-wishlist">
      <div
        className="remove-food-from-wishlist"
        onClick={() => deleteFoodFromWishlist(food.id)}
      >
        <IoCloseCircleSharp />
      </div>
      <div>
        <ImageWraper image={food.image} size="75px" />
      </div>
      <div className="food-details-in-wishlist">
        <h4>{food.title}</h4>
        <p>{food.desc}</p>
        <span
          style={{ color: "orangered", fontSize: "24px", fontWeight: "700" }}
        >
          {`$ ${food.price}`}
        </span>
      </div>
    </div>
  );
};

export default PerFoodInWishlist;
