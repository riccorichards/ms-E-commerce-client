import FoodCard from "../../../components/FoodCard/FoodCard";
import Pagination from "../../../components/pagination/Pagination";
import "./VendorPopularFood.scss";

const fakeImage =
  "https://i.pinimg.com/564x/b4/01/d0/b401d00f0bcacf136d267740ef994d90.jpg";

const fakeData = [
  { id: 1, image: fakeImage, title: "Pizza" },
  { id: 2, image: fakeImage, title: "Pizza" },
  { id: 3, image: fakeImage, title: "Pizza" },
];

const VendorPopularFood = () => {
  return (
    <div className="vendor-popular-food-wrapper">
      <h1 style={{ borderBottom: "2px solid orangered", width: "fit-content" }}>
        Popular Foods
      </h1>
      <div className="vendor-popular-food">
        {fakeData.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
      <Pagination num={3} />
    </div>
  );
};

export default VendorPopularFood;
