import "./Cart.scss";

import CartInfo from "./CartInfo/CartInfo";
import CartPromo from "./CartPromo/CartPromo";
import UserBalance from "./UserBalance/UserBalance";

const Cart = () => {
  return (
    <div className="cart-wrapper">
      <UserBalance />
      <CartInfo />
      <CartPromo />
    </div>
  );
};

export default Cart;
