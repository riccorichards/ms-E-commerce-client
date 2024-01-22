import PerFoodInCart from "./PerFoodInCart/PerFoodInCart";
import "./CartInfo.scss";
import { IoIosCart } from "react-icons/io";
import { FC, useState } from "react";
import Wishlist from "../Wishlist/Wishlist";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../redux/hook";
import EmptyCartPlace from "../EmptyCartPlace";
import { foodToCart } from "../../../../../../../redux/appCall/FoodAppCall";
import { sendCartToServer } from "../../../../../../../redux/appCall/ShoppingApiCall";

const CartInfo: FC<{ setShowCart: (val: boolean) => void }> = ({
  setShowCart,
}) => {
  const [isCart, setIsCart] = useState<boolean>(true);
  const { customer } = useAppSelector((state) => state.customer);
  const dispatch = useAppDispatch();

  if (!customer) return null;

  function handleUpdateFoodInCart(productId: number, type: string) {
    const existingFood = customer?.cart.find((food) => food.id === productId);
    if (existingFood && Boolean(existingFood)) {
      if (type === "dec") {
        const newUnit = existingFood.unit > 1 ? existingFood.unit - 1 : 0;
        dispatch(
          foodToCart({
            productId,
            userId: customer?._id || "",
            unit: newUnit,
          })
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

  const totalPrice = customer.cart.reduce(
    (acc, food) => acc + parseFloat(food.price) * food.unit,
    0
  );

  const handleSendCartProcess = () => {
    const transformedCartItems = customer.cart.map((food) => ({
      productId: food.id,
      product_name: food.title,
      product_address: food.address,
      product_price: food.price,
      product_image: food.image,
      qty: food.unit,
    }));

    const sendingCartData = {
      total_amount: totalPrice,
      customerId: customer._id,
      cartItems: transformedCartItems,
    };
    dispatch(sendCartToServer(sendingCartData));
  };
  return (
    <div className="cart-info-wrapper">
      <>
        {" "}
        <button className="close-cart-btn" onClick={() => setShowCart(false)}>
          Close
        </button>
        <h2>Your account</h2>
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
            {customer && customer.cart.length > 0 && (
              <button className="checkout" onClick={handleSendCartProcess}>
                Check out <span>{totalPrice.toFixed(2)}$</span>
              </button>
            )}
          </div>
        ) : (
          <Wishlist />
        )}
      </>
    </div>
  );
};

export default CartInfo;
