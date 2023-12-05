import "./Navigations.scss";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { MdHistoryEdu } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
const Navigations = () => {
  return (
    <div className="user-navigations-wrapper">
      <div className="nav-item">
        <div className="nav-icon">
          <IoHomeOutline />
        </div>
        Home
      </div>
      <div className="nav-item">
        <div className="nav-icon">
          <MdHistoryEdu />
        </div>
        Orders
      </div>
      <div className="nav-item">
        <div className="nav-icon">
          <MdOutlineFavoriteBorder />
        </div>
        Wishlist
      </div>
      <div className="nav-item">
        <div className="nav-icon">
          <IoSettingsOutline />
        </div>
        Settings
      </div>
    </div>
  );
};

export default Navigations;
