import { IoIosCart } from "react-icons/io";
import "./Cart.scss";

import CartInfo from "./CartInfo/CartInfo";
import CartPromo from "./CartPromo/CartPromo";
import { useAppSelector } from "../../../../../../redux/hook";
import { useState } from "react";

const Cart = () => {
  const { customer } = useAppSelector((state) => state.customer);
  const [showCart, setShowCart] = useState<boolean>(false);
  return (
    <>
      {!showCart ? (
        <div className="show-cart-info-icon" onClick={() => setShowCart(true)}>
          <button>
            <IoIosCart />
            <span>{customer?.cart.length}</span>
          </button>
        </div>
      ) : (
        <div className="cart-wrapper">
          <CartInfo setShowCart={setShowCart} />
          <CartPromo />
        </div>
      )}
    </>
  );
};

export default Cart;
