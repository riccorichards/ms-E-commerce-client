import PerFoodInCart from "./PerFoodInCart/PerFoodInCart";
import "./CartInfo.scss";
import { IoIosCart } from "react-icons/io";
const CartInfo = () => {
  return (
    <div className="cart-info-wrapper">
      <div className="cart-info-header">
        <h1 className="h1-header-cart">My Cart</h1>
        <div className="cart-info-icon">
          <IoIosCart />
          <div className="shows-cart-food">02</div>
        </div>
      </div>
      <PerFoodInCart />
      <PerFoodInCart />
      <PerFoodInCart />
      <PerFoodInCart />
      <div className="checkout">
        <div className="checkout-details"></div>
      </div>
    </div>
  );
};

export default CartInfo;
