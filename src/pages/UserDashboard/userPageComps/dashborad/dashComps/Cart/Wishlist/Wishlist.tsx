import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../redux/hook";
import PerFoodInWishlist from "../CartInfo/PerFoodInWishlist/PerFoodInWishlist";
import "./Wishlist.scss";
import { wishlistToggle } from "../../../../../../../redux/appCall/FoodAppCall";
import EmptyCartPlace from "../EmptyCartPlace";

const Wishlist = () => {
  const { customer } = useAppSelector((state) => state.customer);
  const dispatch = useAppDispatch();

  const deleteFoodFromWishlist = (productId: number) => {
    const data = {
      productId,
      userId: customer?._id || "",
    };
    dispatch(wishlistToggle(data));
  };

  return (
    <div className="wishlist-wrapper">
      {customer && customer.wishlist.length > 0 ? (
        customer.wishlist.map((food) => (
          <PerFoodInWishlist
            food={food}
            key={food.id}
            deleteFoodFromWishlist={deleteFoodFromWishlist}
          />
        ))
      ) : (
        <EmptyCartPlace title="Not Wishlisted Food" />
      )}
    </div>
  );
};

export default Wishlist;
