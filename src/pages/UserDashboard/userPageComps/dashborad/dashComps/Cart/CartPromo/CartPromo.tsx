import "./CartPromo.scss";
import burger from "../../../../../../../assets/images/burger.png";
const CartPromo = () => {
  return (
    <footer className="cart-promotion">
      <div className="promo-details">
        <h1>-50% Off</h1>
        <p>The Full price of burgers</p>
      </div>
      <img src={burger} alt="burger" className="burger-decor" />
    </footer>
  );
};

export default CartPromo;
