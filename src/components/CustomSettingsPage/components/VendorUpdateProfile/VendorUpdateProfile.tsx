import { useAppSelector } from "../../../../redux/hook";
import "./VendorUpdateProfile.scss";
import UpdateProfileSide from "./components/UpdateProfileSide/UpdateProfileSide";

const VendorUpdateProfile = () => {
  const { vendor } = useAppSelector((state) => state.vendor);

  return (
    <div className="vendor-update-profile-wrapper">
      <h2>
        {vendor?.name}'s{" "}
        <span style={{ color: "orangered" }}>Update Profile</span>
      </h2>
      <main className="vendor-update-profile-components">
        <UpdateProfileSide />
      </main>
    </div>
  );
};

export default VendorUpdateProfile;
