import { useEffect } from "react";
import FoodCard from "../../../../../../../../components/FoodCard/FoodCard";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../../redux/hook";
import PopularFoodsHeader from "./popularfoodHeader/PopularFoodsHeader";
import "./PopularFoods.scss";
import {
  foodToCart,
  getPopularFoods,
  wishlistToggle,
} from "../../../../../../../../redux/appCall/FoodAppCall";

const PopularFoods = () => {
  const { popularF } = useAppSelector((state) => state.food);
  const dispatch = useAppDispatch();
  const { customer } = useAppSelector((state) => state.customer);
  useEffect(() => {
    dispatch(getPopularFoods());
  }, [dispatch]);

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
    <div className="popular-food-wrappe">
      <PopularFoodsHeader />
      <div className="popular-foods">
        {popularF &&
          popularF.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
              isPicked={isPickedFood(food.id)}
              wishlistToggle={handleWishlistToggle}
              addFoodToCart={handleAddFoodToCart}
            />
          ))}
      </div>
    </div>
  );
};

export default PopularFoods;
