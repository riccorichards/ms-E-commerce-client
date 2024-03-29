import { FC } from "react";
import FoodCard from "../../../components/FoodCard/FoodCard";
import "./VendorFood.scss";
import { ProductType } from "../../../redux/type.slice";

const VendorFood: FC<{ foods: ProductType[] | null }> = ({ foods }) => {
  return (
    <section className="vendor-foods-wrapper">
      {foods &&
        foods
          .slice(0, 6)
          .map((food) => (
            <FoodCard food={food} key={food.id} from="mainDashboard" />
          ))}
    </section>
  );
};

export default VendorFood;
