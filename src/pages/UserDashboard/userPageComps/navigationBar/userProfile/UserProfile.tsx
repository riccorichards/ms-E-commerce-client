import { IoPersonOutline } from "react-icons/io5";
import { useAppSelector } from "../../../../../redux/hook";
import "./UserProfile.scss";

const UserProfile = () => {
  const customer = useAppSelector((state) => state.customer.customer);

  return (
    <div className="user-profile-wrapper">
      {customer && (
        <>
          <div className="image-wrapper">
            {customer.image ? (
              <img src={customer.image} alt="fake" className="profile-image" />
            ) : (
              <IoPersonOutline style={{ fontSize: "35px" }} />
            )}
          </div>
          <h2>{customer.username}</h2>
        </>
      )}
    </div>
  );
};

export default UserProfile;
