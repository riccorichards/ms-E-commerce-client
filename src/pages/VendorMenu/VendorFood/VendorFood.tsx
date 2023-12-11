import FoodCard from "../../../components/FoodCard/FoodCard";
import "./VendorFood.scss";

const image =
  "https://i.pinimg.com/564x/60/98/d3/6098d395390ff624ba34dc24a8e1ba47.jpg";

const fakefood = [
  { id: 1, title: "", image: image },
  { id: 2, title: "", image: image },
  { id: 3, title: "", image: image },
  { id: 4, title: "", image: image },
  { id: 5, title: "", image: image },
  { id: 6, title: "", image: image },
];
const VendorFood = () => {
  return (
    <div className="vendor-foods-wrapper">
      {fakefood.map((food) => (
        <FoodCard food={food} key={food.id} />
      ))}
    </div>
  );
};

export default VendorFood;
