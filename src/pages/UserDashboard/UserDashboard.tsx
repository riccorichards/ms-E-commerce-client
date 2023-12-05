import "./UserDashboard.scss";
import NavigationBar from "./userPageComps/navigationBar/NavigationBar";
import VendorDetails from "./../VendorDetails/VendorDetails";

const UserDashboard = () => {
  return (
    <div className="user-dashboard-wrapper">
      <NavigationBar />
      <VendorDetails />
    </div>
  );
};

export default UserDashboard;
