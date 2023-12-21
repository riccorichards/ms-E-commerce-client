import { NavLink, useNavigate } from "react-router-dom";
import "./NavSettings.scss";
import { useAppDispatch } from "../../../redux/hook";
import { logOut } from "../../../redux/appCall/AuthAppCall";
import { FC } from "react";

interface SetNavLInkType {
  target: string;
  title: string;
  desc: string;
}
const NavSettings: FC<{ setNavLink: SetNavLInkType[] }> = ({ setNavLink }) => {
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

  const defineEndpoint = (title: string) => {
    return title.toLocaleLowerCase().split(" ").join("-");
  };

  return (
    <div className="nav-settings-wrapper">
      {setNavLink.map((nav, index) => (
        <NavLink
          key={index}
          to={
            nav.title === "Update Profile"
              ? `/${nav.target === "vendor" ? "vendor" : "customer"}/settings`
              : `/${nav.target}/settings/${defineEndpoint(nav.title)}`
          }
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <div className="nav-settigns-item">
            <h3>{nav.title}</h3>
            <p>{nav.desc}</p>
          </div>
        </NavLink>
      ))}
      <div className="nav-settigns-item" onClick={() => handleLogOut()}>
        <h3>Log Out</h3>
      </div>
    </div>
  );
};

export default NavSettings;