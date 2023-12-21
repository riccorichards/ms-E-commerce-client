import "./HoverFoodInfo.scss";
const HoverFoodInfo = () => {
  return (
    <div className="hover-food-info-wrapper">
      <div className="hover-food-info">
        <span>Details</span>
        <h4>food name</h4>
        <p>$ 15</p>
      </div>
      <div className="hover-food-info">
        <span>Shipping fee</span>
        <h4>2.5 km</h4>
        <p>Discount: $1.5</p>
      </div>
      <div className="hover-food-info">
        <span>Restaurant</span>
        <h4>name</h4>
        <p>rating</p>
      </div>
    </div>
  );
};

export default HoverFoodInfo;
