import { useEffect } from "react";
import FoodCard from "../../../../../../../../components/FoodCard/FoodCard";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../../redux/hook";
import PopularFoodsHeader from "./popularfoodHeader/PopularFoodsHeader";
import "./PopularFoods.scss";
import {
  addFeedToFood,
  foodToCart,
  getFoods,
  wishlistToggle,
} from "../../../../../../../../redux/appCall/FoodAppCall";
import { NewFeedbackInputType } from "../../../../../../../../redux/type.slice";

const PopularFoods = () => {
  const { foods } = useAppSelector((state) => state.food);
  const dispatch = useAppDispatch();
  const { customer } = useAppSelector((state) => state.customer);

  useEffect(() => {
    dispatch(getFoods());
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

  const handleLeaveFeedback = (
    feedback: string,
    productId: number,
    foodImg: string,
    targetTitle: string
  ) => {
    if (
      feedback &&
      feedback.trim().length > 3 &&
      feedback.trim().length < 150
    ) {
      if (customer) {
        const newFeedback: NewFeedbackInputType = {
          userId: customer._id,
          author: customer.username,
          authorImg: customer.image || "",
          targetImg: foodImg,
          targetTitle: targetTitle,
          address: "product",
          targetId: productId,
          review: feedback,
        };
        dispatch(addFeedToFood(newFeedback));
      }
    }
  };

  return (
    <div className="popular-food-wrappe">
      <PopularFoodsHeader />
      <div className="popular-foods">
        {foods &&
          foods.map((food) => (
            <FoodCard
              leaveFeed={handleLeaveFeedback}
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
