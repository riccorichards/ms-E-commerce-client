import "./CartPromo.scss";
import burger from "../../../../../../../assets/images/burger.png";
const CartPromo = () => {
  return (
    <div className="cart-promotion">
      <div className="promo-details">
        <h1>-50% Off</h1>
        <p>The Full price of burgers</p>
      </div>
      <img src={burger} alt="burger" className="burger-decor" />
    </div>
  );
};

export default CartPromo;
