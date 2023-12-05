import "./UserProfile.scss";

const fakeImage =
  "https://i.pinimg.com/564x/18/cd/50/18cd50b133c95a5fc7e041b598ed831e.jpg";

const UserProfile = () => {
  return (
    <div className="user-profile-wrapper">
      <div className="image-wrapper">
        <img src={fakeImage} alt="fake" className="profile-image" />
      </div>
      <h2>Anastasia Elb</h2>
    </div>
  );
};

export default UserProfile;
