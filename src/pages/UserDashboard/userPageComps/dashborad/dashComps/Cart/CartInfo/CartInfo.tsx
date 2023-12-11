import PerFoodInCart from "./PerFoodInCart/PerFoodInCart";
import "./CartInfo.scss";
import { IoIosCart } from "react-icons/io";
import { useState } from "react";
import Wishlist from "../Wishlist/Wishlist";
const CartInfo = () => {
  const [isCart, setIsCart] = useState(true);
  return (
    <div className="cart-info-wrapper">
      <div className="cart-info-header">
        <div className="cart-info-switcher">
          <button
            className="cart-info-switcher-btn"
            onClick={() => setIsCart(true)}
          >
            My Cart
          </button>
          <button
            className="cart-info-switcher-btn"
            onClick={() => setIsCart(false)}
          >
            My Wishlist
          </button>
        </div>
        <div className="cart-info-icon">
          <IoIosCart />
          <div className="shows-cart-food">02</div>
        </div>
      </div>
      {isCart ? (
        <>
          <PerFoodInCart />
          <PerFoodInCart />
          <PerFoodInCart />
          <PerFoodInCart />
        </>
      ) : (
        <Wishlist />
      )}

      <div className="checkout">
        <div className="checkout-details"></div>
      </div>
    </div>
  );
};

export default CartInfo;
