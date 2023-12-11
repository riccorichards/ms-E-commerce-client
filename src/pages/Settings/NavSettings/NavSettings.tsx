import { NavLink, useNavigate } from "react-router-dom";
import "./NavSettings.scss";
import { useAppDispatch } from "../../../redux/hook";
import { logOut } from "../../../redux/appCall/AuthAppCall";

const NavSettings = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    try {
      dispatch(logOut());
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  };

  return (
    <div className="nav-settings-wrapper">
      <NavLink
        to="/customer/settings"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <div className="nav-settigns-item">
          <h3>Update Profile</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus.
          </p>
        </div>
      </NavLink>
      <NavLink
        to="/customer/settings/my-feeds"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <div className="nav-settigns-item">
          <h3>My Feeds</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus.
          </p>
        </div>
      </NavLink>
      <NavLink
        to="/customer/settings/invoices"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <div className="nav-settigns-item">
          <h3>Invoices</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus.
          </p>
        </div>
      </NavLink>
      <div className="nav-settigns-item" onClick={() => handleLogOut()}>
        <h3>Log Out</h3>
      </div>
    </div>
  );
};

export default NavSettings;
