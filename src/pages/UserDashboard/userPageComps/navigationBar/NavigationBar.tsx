import "./NavigationBar.scss";
import Navigations from "./navigations/Navigations";
import Promo from "./promo/Promo";
import UserProfile from "./userProfile/UserProfile";

const NavigationBar = () => {
  return (
    <aside className="navigation-bar">
      <UserProfile />
      <Navigations />
      <Promo />
    </aside>
  );
};

export default NavigationBar;
