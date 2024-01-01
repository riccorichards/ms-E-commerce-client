import { FC } from "react";
import FoodCard from "../../../components/FoodCard/FoodCard";
import "./VendorFood.scss";
import { ProductType } from "../../../redux/type.slice";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { foodToCart, wishlistToggle } from "../../../redux/appCall/FoodAppCall";

const VendorFood: FC<{ foods: ProductType[] | null }> = ({ foods }) => {
  const { customer } = useAppSelector((state) => state.customer);
  const dispatch = useAppDispatch();

  const handleWishlistToggle = (productId: number) => {
    const data = {
      productId,
      userId: customer?._id || "",
    };
    dispatch(wishlistToggle(data));
  };

  const isPickedFood = (id: number) => {
    return Boolean(
      customer && customer.wishlist.find((food) => food.id === id)
    );
  };

  const handleAddFoodToCart = (productId: number) => {
    const data = {
      productId,
      userId: customer?._id || "",
      unit: 1,
    };

    dispatch(foodToCart(data));
  };

  return (
    <div className="vendor-foods-wrapper">
      {foods &&
        foods.map((food) => (
          <FoodCard
            food={food}
            key={food.id}
            wishlistToggle={handleWishlistToggle}
            isPicked={isPickedFood(food.id)}
            addFoodToCart={handleAddFoodToCart}
          />
        ))}
    </div>
  );
};

export default VendorFood;
