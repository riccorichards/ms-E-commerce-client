import "./NavigationBar.scss";
import Navigations from "./navigations/Navigations";
import Promo from "./promo/Promo";
import UserProfile from "./userProfile/UserProfile";

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <UserProfile />
      <Navigations />
      <Promo />
    </div>
  );
};

export default NavigationBar;
