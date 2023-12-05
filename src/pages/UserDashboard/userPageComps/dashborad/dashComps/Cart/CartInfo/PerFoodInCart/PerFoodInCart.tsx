import { useState } from "react";
import ImageWraper from "../../../../../../../../components/ImageWraper";
import "./PerFoodInCart.scss";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";

const fake =
  "https://i.pinimg.com/564x/34/f4/8f/34f48f5c56c938642b80b0555e5adf82.jpg";

const PerFoodInCart = () => {
  const [foodAmount, setFoodAmount] = useState(1);
  return (
    <div className="per-food-in-cart">
      <ImageWraper image={fake} size="100px" />
      <div className="food-details-in-cart">
        <h2>Pizza</h2>
        <div className="food-amount-controller">
          <button
            className="controller-btn"
            onClick={() => setFoodAmount((prev) => prev + 1)}
          >
            <FaPlus />
          </button>
          <span>{foodAmount}</span>
          <button
            className="controller-btn"
            onClick={() => setFoodAmount((prev) => prev - 1)}
          >
            <FaMinus />
          </button>
        </div>
      </div>
      <div className="remove-food-from-cart">
        <div className="trash-icon">
          <IoTrashOutline />
        </div>
        <span>$ 15.59</span>
      </div>
    </div>
  );
};

export default PerFoodInCart;
