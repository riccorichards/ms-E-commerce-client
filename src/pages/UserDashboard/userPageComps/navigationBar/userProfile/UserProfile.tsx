import { useAppSelector } from "../../../../../redux/hook";
import { CustomerType } from "../../../../../redux/type.slice";
import "./UserProfile.scss";

const UserProfile = () => {
  const customer = useAppSelector(
    (state) => state.customer.customer
  ) as CustomerType;

  return (
    <div className="user-profile-wrapper">
      {customer && (
        <>
          <div className="image-wrapper">
            <img src={customer.image} alt="fake" className="profile-image" />
          </div>
          <h2>{customer.username}</h2>
        </>
      )}
    </div>
  );
};

export default UserProfile;
