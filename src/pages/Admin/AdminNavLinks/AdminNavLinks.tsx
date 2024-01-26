import { logOut } from "../../../redux/appCall/AuthAppCall";
import { useAppDispatch } from "../../../redux/hook";
import AdminHeader from "./AdminHeader/AdminHeader";
import AdminNavItem from "./AdminNavItem/AdminNavItem";
import "./AdminNavLinks.scss";
import { FaPowerOff } from "react-icons/fa";

const AdminNavLinks = () => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    try {
      dispatch(logOut());
      localStorage.removeItem("user");
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
      throw new Error("Unknown Error while LogOut");
    }
  };

  return (
    <nav className="admin-navlink-wrapper">
      <AdminHeader />
      <AdminNavItem />
      <button className="admin-logOut-btn" onClick={() => handleLogOut()}>
        <FaPowerOff />
      </button>
    </nav>
  );
};

export default AdminNavLinks;
