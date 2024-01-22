import { FC } from "react";
import "./FoodTable.scss";
import { ProductType } from "../../../redux/type.slice";
import ImageWraper from "./../../../components/ImageWraper";
import { MdNoFood } from "react-icons/md";

const FoodTable: FC<{ foods: ProductType[] | null }> = ({ foods }) => {
  return (
    <section className="vendor-food-table-wrapper">
      {foods &&
        foods.slice(0, 5).map((food) => (
          <main key={food.id} className="vendor-food-table-item">
            <div className="table-food-id">{`#000${food.id}`}</div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div>
                <ImageWraper image={food.image} size="55px" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <h5>{food.title}</h5>
                <p style={{ fontSize: "14px" }}>{food.desc}</p>
                <p style={{ color: "orangered" }}>${food.price}</p>
              </div>
            </div>
            <button className="table-food-remove">
              <MdNoFood />
            </button>
          </main>
        ))}
    </section>
  );
};

export default FoodTable;
