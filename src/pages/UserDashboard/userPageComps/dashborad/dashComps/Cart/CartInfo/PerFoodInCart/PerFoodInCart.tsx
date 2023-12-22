import { FC } from "react";
import ImageWraper from "../../../../../../../../components/ImageWraper";
import "./PerFoodInCart.scss";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { FoodCardType } from "../../../../../../../../redux/type.slice";

const PerFoodInCart: FC<{
  food: FoodCardType;
  handleUpdateCart: (productId: number, type: string) => void;
  removeFood: (productId: number) => void;
}> = ({ food, handleUpdateCart, removeFood }) => {
  return (
    <div className="per-food-in-cart">
      <div>
        <ImageWraper image={food.image} size="80px" />
      </div>
      <div className="food-details-in-cart">
        <h4>{food.title}</h4>
        <div className="food-amount-controller">
          <button
            className="controller-btn"
            onClick={() => handleUpdateCart(food.id, "inc")}
          >
            <FaPlus />
          </button>
          <span>{food.unit}</span>
          <button
            className="controller-btn"
            onClick={() => handleUpdateCart(food.id, "dec")}
          >
            <FaMinus />
          </button>
        </div>
      </div>
      <div className="remove-food-from-cart">
        <div className="trash-icon" onClick={() => removeFood(food.id)}>
          <IoTrashOutline />
        </div>
        <span>{`$ ${(parseFloat(food.price) * food.unit).toFixed(2)}`}</span>
      </div>
    </div>
  );
};

export default PerFoodInCart;
