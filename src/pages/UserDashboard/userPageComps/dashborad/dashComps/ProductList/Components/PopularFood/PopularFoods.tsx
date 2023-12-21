import FoodCard from "../../../../../../../../components/FoodCard/FoodCard";
import PopularFoodsHeader from "./popularfoodHeader/PopularFoodsHeader";
import "./PopularFoods.scss";

const fakeImage =
  "https://i.pinimg.com/564x/b4/01/d0/b401d00f0bcacf136d267740ef994d90.jpg";

const fakeData = [
  { id: 1, image: fakeImage, title: "Pizza" },
  { id: 2, image: fakeImage, title: "Pizza" },
  { id: 3, image: fakeImage, title: "Pizza" },
  { id: 1, image: fakeImage, title: "Pizza" },
  { id: 2, image: fakeImage, title: "Pizza" },
  { id: 3, image: fakeImage, title: "Pizza" },
  { id: 4, image: fakeImage, title: "Pizza" },
];

const PopularFoods = () => {
  return (
    <div className="popular-food-wrappe">
      <PopularFoodsHeader />
      <div className="popular-foods">
        {fakeData.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default PopularFoods;
