import { FC } from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const EmptyCartPlace: FC<{ title: string }> = ({ title }) => {
  return (
    <div
      style={{
        height: "30vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <IoFastFoodSharp style={{ fontSize: "24px" }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>{title}</h3>
          <span>
            Please choose a{" "}
            <Link to="/" style={{ color: "orangered" }}>
              food
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmptyCartPlace;
