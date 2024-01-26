import { useAppSelector } from "../../../../redux/hook";
import "./AdminHeader.scss";

const AdminHeader = () => {
  const { customer } = useAppSelector((state) => state.customer);
  if (!customer) return null;
  const { image, username } = customer;
  return (
    <header className="admin-header-wrapper">
      <div className="image-wrapper">
        <img src={image} className="profile-image" />
      </div>
      <h3>{username}</h3>
    </header>
  );
};

export default AdminHeader;
