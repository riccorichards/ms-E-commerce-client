import { FC } from "react";
import "./ListFoodInSubCat.scss";
import ImageWraper from "./../../ImageWraper";

interface SubSingleProduct {
  title: string;
  image: string;
}

const ListFoodInSubCat: FC<{ foods: SubSingleProduct[] }> = ({ foods }) => {
  return (
    <div className="list-food-in-sub-cat">
      <main className="list-food-in-sub-cat-main">
        <ul className="list-food-in-sub-cat-main">
          {foods.map((food) => (
            <li key={food.title}>
              <h5>{food.title}</h5>
              <ImageWraper image={food.image} size="45px" />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default ListFoodInSubCat;
