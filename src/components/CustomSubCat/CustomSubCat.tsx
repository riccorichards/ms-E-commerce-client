import "./CustomSubCat.scss";
import { FaInfo } from "react-icons/fa";
import { FaHandPointRight, FaHandPointLeft } from "react-icons/fa";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { TbShoppingCart } from "react-icons/tb";
import { MdChecklist } from "react-icons/md";
import ImageWraper from "./../ImageWraper";
import { FC, useState } from "react";
import { GetFilteredSubC } from "../../redux/type.slice";
import HoverFoodInfo from "./HoverFoodInfo/HoverFoodInfo";
import ListFoodInSubCat from "./ListFoodInSubCat/ListFoodInSubCat";

const CustomSubCat: FC<{ sub: GetFilteredSubC }> = ({ sub }) => {
  const product = sub.Products.length > 0 ? sub.Products[0] : null;
  const [isInfo, setIsinfo] = useState<boolean>(false);
  const [isList, setIsList] = useState<boolean>(false);

  const infoToggleI = () => {
    setIsinfo((prev) => !prev);
  };
  const listToggle = () => {
    setIsList((prev) => !prev);
  };
  return (
    <div className="custom-sub-category-wrapper">
      <div className="custom-sub-caterory-header">
        <h5>{sub.title}</h5>
        <div className="info-of-incoming-food" onClick={infoToggleI}>
          <FaInfo />
        </div>
        {isInfo && <HoverFoodInfo />}
      </div>
      <div className="custom-sub-caterory-body">
        <button className="foot-switcher-pointer-left">
          <FaHandPointLeft />
        </button>
        <ImageWraper image={product?.image} size="120px" />
        <button className="foot-switcher-pointer-right">
          <FaHandPointRight />
        </button>
        <p>01</p>
        <h5 style={{ textAlign: "center" }}>{product?.title}</h5>
      </div>
      <div className="custom-sub-caterory-footer">
        <button className="custom-sub-caterory-footer-item">
          <FaRegEye />
        </button>
        <button className="custom-sub-caterory-footer-item">
          <TbShoppingCart />
        </button>
        <button className="custom-sub-caterory-footer-item">
          <FaRegHeart />
        </button>
        <button
          className="custom-sub-caterory-footer-item"
          onClick={listToggle}
        >
          <MdChecklist />
        </button>
        {isList && <ListFoodInSubCat foods={sub.Products} />}
      </div>
    </div>
  );
};

export default CustomSubCat;
