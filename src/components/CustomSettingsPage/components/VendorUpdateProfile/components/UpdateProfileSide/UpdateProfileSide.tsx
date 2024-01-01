import AddVendorAddress from "./AddVendorAddress/AddVendorAddress";
import "./UpdateProfileSide.scss";
import UpdateVendorInfo from "./UpdateVendorInfo/UpdateVendorInfo";
import UploadVendorBio from "./UploadVendorBio";
import VendorSocialUrl from "./VendorSocialUrl/VendorSocialUrl";

const UpdateProfileSide = () => {
  return (
    <div className="update-profile-side-wrapper">
      <UpdateVendorInfo />
      <UploadVendorBio />
      <AddVendorAddress />
      <VendorSocialUrl />
    </div>
  );
};

export default UpdateProfileSide;
