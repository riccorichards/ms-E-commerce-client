const fakeMain = [
  {
    title: "SeaFood",
    desc: "Shrimp Scampi – A dish made with",
    image:
      "https://i.pinimg.com/564x/3e/a8/a7/3ea8a7d1ca2ec27f185a1c667b94464f.jpg",
  },
  {
    title: "SeaFood",
    desc: "Shrimp Scampi – A dish made with",
    image:
      "https://i.pinimg.com/564x/3e/a8/a7/3ea8a7d1ca2ec27f185a1c667b94464f.jpg",
  },
  {
    title: "Poultry",
    desc: "Shrimp Scampi – A dish made with",
    image:
      "https://i.pinimg.com/564x/34/6c/a7/346ca7cd21be118d8567ecb25029c009.jpg",
  },
  {
    title: "SeaFood",
    desc: "Shrimp Scampi – A dish made with",
    image:
      "https://i.pinimg.com/564x/3e/a8/a7/3ea8a7d1ca2ec27f185a1c667b94464f.jpg",
  },
  {
    title: "Poultry",
    desc: "Shrimp Scampi – A dish made with",
    image:
      "https://i.pinimg.com/564x/34/6c/a7/346ca7cd21be118d8567ecb25029c009.jpg",
  },
];
import "./AddFoodMainCat.scss";
import { IoAddSharp } from "react-icons/io5";

const AddFoodMainCat = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h4>Choose Main Category</h4>
      <div className="add-food-categories">
        {fakeMain.map((cat) => (
          <div className="add-food-categories-items">
            <img src={cat.image} alt="" />
            <h3>{cat.title}</h3>
            <p>{cat.desc}</p>
          </div>
        ))}
      </div>
      <button className="add-custom-main-category">
        <IoAddSharp />
      </button>
    </div>
  );
};

export default AddFoodMainCat;
