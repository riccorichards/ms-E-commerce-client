import { IoCloseCircleSharp } from "react-icons/io5";
import ImageWraper from "../../../../../../../../components/ImageWraper";
import "./PerFoodInWishlist.scss";
const food =
  "https://i.pinimg.com/564x/5d/63/0a/5d630a7daf0feee0eea86a14a4e97b64.jpg";
const PerFoodInWishlist = () => {
  return (
    <div className="perfood-in-wishlist">
      <div className="remove-food-from-wishlist">
        <IoCloseCircleSharp />
      </div>
      <ImageWraper image={food} size="75px" />
      <div className="food-details-in-wishlist">
        <h2>Pizza</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          repudiandae ipsa exercitationem!
        </p>
        <span
          style={{ color: "orangered", fontSize: "24px", fontWeight: "700" }}
        >
          $ 12.59
        </span>
      </div>
    </div>
  );
};

export default PerFoodInWishlist;
