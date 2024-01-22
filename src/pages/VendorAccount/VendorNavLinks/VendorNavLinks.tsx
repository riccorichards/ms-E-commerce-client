import { vendorLogOut } from "../../../redux/appCall/VendorAppCall";
import { useAppDispatch } from "../../../redux/hook";
import VendorHeader from "./VendorHeader/VendorHeader";
import VendorNavItem from "./VendorNavItem/VendorNavItem";
import "./VendorNavLinks.scss";
import { FaPowerOff } from "react-icons/fa";

const VendorNavLinks = () => {
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    try {
      dispatch(vendorLogOut());
      localStorage.removeItem("user");
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
      throw new Error("Unknown Error while LogOut");
    }
  };
  return (
    <aside className="vendor-navlink-wrapper">
      <VendorHeader />
      <VendorNavItem />
      <button className="vendor-logOut-btn" onClick={() => handleLogOut()}>
        <FaPowerOff />
      </button>
    </aside>
  );
};

export default VendorNavLinks;
