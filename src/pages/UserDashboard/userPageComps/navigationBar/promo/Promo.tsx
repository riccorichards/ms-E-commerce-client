import "./Promo.scss";
import delivery from "../../../../../assets/images/delivery.png";
const Promo = () => {
  return (
    <footer className="promo-wrapper">
      <img src={delivery} alt="deliveryman" className="promo-deliveryman" />
      <span className="text-promo">Faster Delivery!</span>
    </footer>
  );
};

export default Promo;
