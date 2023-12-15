//import { useAppSelector } from "../../../../redux/hook";
import "./AdminHeader.scss";

const image =
  "https://i.pinimg.com/564x/82/18/1f/82181f1d36fb0eaba87bf3ff8c1d54d0.jpg";

const AdminHeader = () => {
  //const { customer } = useAppSelector((state) => state.customer);
  return (
    <div className="admin-header-wrapper">
			<div className="image-wrapper">
				<img src={image} className="profile-image" />
			</div>
      <h3>Anastasia</h3>
    </div>
  );
};

export default AdminHeader;
