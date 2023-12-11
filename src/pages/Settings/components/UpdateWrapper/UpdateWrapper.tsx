import UpdateAddressInfo from "./UpdateAddressInfo/UpdateAddressInfo";
import UpdateBankInfo from "./UpdateBankInfo/UpdateBankInfo";
import UpdateBasicInfo from "./UpdateBasicInfo/UpdateBasicInfo";
import UpdateImage from "./UpdateImage/UpdateImage";
import "./UpdateWrapper.scss";

const UpdateWrapper = () => {
  return (
    <div className="update-profile-place">
      <UpdateImage />
      <UpdateBasicInfo />
      <UpdateAddressInfo />
      <UpdateBankInfo />
    </div>
  );
};

export default UpdateWrapper;
