import PerFoodInCart from "./PerFoodInCart/PerFoodInCart";
import "./CartInfo.scss";
import { IoIosCart } from "react-icons/io";
import { useState } from "react";
import Wishlist from "../Wishlist/Wishlist";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../redux/hook";
import EmptyCartPlace from "../EmptyCartPlace";
import { foodToCart } from "../../../../../../../redux/appCall/FoodAppCall";

const CartInfo = () => {
  const [isCart, setIsCart] = useState<boolean>(true);
  const { customer } = useAppSelector((state) => state.customer);
  const dispatch = useAppDispatch();

  function handleUpdateFoodInCart(productId: number, type: string) {
    const existingFood = customer?.cart.find((food) => food.id === productId);
    if (existingFood && Boolean(existingFood)) {
      if (type === "dec") {
        const newUnit = existingFood.unit > 1 ? existingFood.unit - 1 : 0;
        dispatch(
          foodToCart({ productId, userId: customer?._id || "", unit: newUnit })
        );
      } else {
        dispatch(
          foodToCart({
            productId,
            userId: customer?._id || "",
            unit: existingFood.unit + 1,
          })
        );
      }
    }
  }

  function handleDeleteFoodInCart(productId: number) {
    const existingFood = customer?.cart.find((food) => food.id === productId);
    if (existingFood && Boolean(existingFood)) {
      dispatch(foodToCart({ productId, userId: customer?._id || "", unit: 0 }));
    }
  }

  return (
    <div className="cart-info-wrapper">
      <div className="cart-info-header">
        <div className="cart-info-switcher">
          <button
            className="cart-info-switcher-btn"
            onClick={() => setIsCart(true)}
            style={{
              backgroundColor: isCart ? "orangered" : "",
            }}
          >
            My Cart
          </button>
          <button
            className="cart-info-switcher-btn"
            onClick={() => setIsCart(false)}
            style={{ backgroundColor: !isCart ? "orangered" : "" }}
          >
            My Wishlist
          </button>
        </div>
        <div className="cart-info-icon">
          <IoIosCart />
          <div className="shows-cart-food">{customer?.cart.length}</div>
        </div>
      </div>
      {isCart ? (
        <div className="cart-foods-place">
          {customer?.cart && customer.cart.length > 0 ? (
            customer.cart.map((food) => (
              <PerFoodInCart
                key={food.id}
                food={food}
                handleUpdateCart={handleUpdateFoodInCart}
                removeFood={handleDeleteFoodInCart}
              />
            ))
          ) : (
            <EmptyCartPlace title="Not Food in the cart" />
          )}
          <button className="checkout">Check out</button>
        </div>
      ) : (
        <Wishlist />
      )}
    </div>
  );
};

export default CartInfo;
