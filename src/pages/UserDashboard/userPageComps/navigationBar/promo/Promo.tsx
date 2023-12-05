import "./Promo.scss";
import delivery from "../../../../../assets/images/delivery.png";
const Promo = () => {
  return (
    <div className="promo-wrapper">
      <img src={delivery} alt="deliveryman" className="promo-deliveryman" />
      <span className="text-promo">Faster Delivery!</span>
    </div>
  );
};

export default Promo;
