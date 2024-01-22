import "./CustomSubCat.scss";
import { FaInfo } from "react-icons/fa";
import { FaHandPointRight, FaHandPointLeft } from "react-icons/fa";
import { TbShoppingCart } from "react-icons/tb";
import {
  MdChecklist,
  MdFavoriteBorder,
  MdOutlineFavorite,
} from "react-icons/md";
import ImageWraper from "./../ImageWraper";
import { FC, useState } from "react";
import { GetFilteredSubC } from "../../redux/type.slice";
import HoverFoodInfo from "./HoverFoodInfo/HoverFoodInfo";
import ListFoodInSubCat from "./ListFoodInSubCat/ListFoodInSubCat";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { foodToCart, wishlistToggle } from "../../redux/appCall/FoodAppCall";

const CustomSubCat: FC<{ sub: GetFilteredSubC }> = ({ sub }) => {
  const [index, setIndex] = useState<number>(0);
  const product = sub.Products.length > 0 ? sub.Products[index] : null;
  const dispatch = useAppDispatch();
  const { customer } = useAppSelector((state) => state.customer);
  const [isInfo, setIsinfo] = useState<boolean>(false);
  const [isList, setIsList] = useState<boolean>(false);
  const isPickedFood = (id: number) => {
    return Boolean(
      customer && customer.wishlist.find((food) => food.id === id)
    );
  };
  if (!product) return null;

  const infoToggle = () => {
    setIsinfo((prev) => !prev);
  };
  const listToggle = () => {
    setIsList((prev) => !prev);
  };

  const handleWishlistToggle = (productId: number) => {
    const data = {
      productId,
      userId: customer?._id || "",
    };
    dispatch(wishlistToggle(data));
  };

  const handleAddFoodToCart = (productId: number) => {
    const data = {
      productId,
      userId: customer?._id || "",
      unit: 1,
    };

    dispatch(foodToCart(data));
  };

  const maxLength = sub.Products.length;

  function handleFoodSwitcher(type: string) {
    if (type === "right" && index < maxLength - 1) {
      setIndex((prev) => prev + 1);
    } else if (type === "left" && index > 0) {
      setIndex((prev) => prev - 1);
    }
  }

  return (
    <main className="custom-sub-category-wrapper">
      <header className="custom-sub-caterory-header">
        <h5>{sub.title}</h5>
        <div className="info-of-incoming-food" onClick={infoToggle}>
          <FaInfo />
        </div>
        {isInfo && <HoverFoodInfo food={product} />}
      </header>
      <section className="custom-sub-caterory-body">
        <button
          className="foot-switcher-pointer-left"
          onClick={() => handleFoodSwitcher("left")}
        >
          <FaHandPointLeft />
        </button>
        <ImageWraper image={product.image} size="120px" />
        <button
          className="foot-switcher-pointer-right"
          onClick={() => handleFoodSwitcher("right")}
        >
          <FaHandPointRight />
        </button>
        <h5 style={{ textAlign: "center" }}>{product.title}</h5>
      </section>
      <footer className="custom-sub-caterory-footer">
        <button
          className="custom-sub-caterory-footer-item"
          onClick={() => handleAddFoodToCart(product.id)}
        >
          <TbShoppingCart />
        </button>
        <button
          className="custom-sub-caterory-footer-item"
          onClick={() => handleWishlistToggle(product.id)}
        >
          {isPickedFood(product.id) ? (
            <MdOutlineFavorite />
          ) : (
            <MdFavoriteBorder />
          )}
        </button>
        <button
          className="custom-sub-caterory-footer-item"
          onClick={listToggle}
        >
          <MdChecklist />
        </button>
        {isList && <ListFoodInSubCat foods={sub.Products} />}
        <div className="food-number">{`0${index + 1}`}</div>
      </footer>
    </main>
  );
};

export default CustomSubCat;
