import MainCatsTemp from "./MainCatsTemp/MainCatsTemp";
import "./MainCars.scss";

const fake =
  "https://i.pinimg.com/564x/9e/69/93/9e69932ac6b0d511ee7ce2f2bca5b4f8.jpg";

const fakeData = [
  { id: 1, image: fake, title: "Pizza" },
  { id: 2, image: fake, title: "Pizza" },
  { id: 3, image: fake, title: "Pizza" },
  { id: 4, image: fake, title: "Pizza" },
  { id: 5, image: fake, title: "Pizza" },
  { id: 6, image: fake, title: "Pizza" },
];
const MainCars = () => {
  return (
    <div className="main-cats-wrapper">
      {fakeData.map((food) => (
        <MainCatsTemp mainCat={food} key={food.id} />
      ))}
    </div>
  );
};

export default MainCars;
