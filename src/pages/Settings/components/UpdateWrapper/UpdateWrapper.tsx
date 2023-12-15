import UploadImage from "../../../../components/UploadImage/UploadImage";
import UpdateAddressInfo from "./UpdateAddressInfo/UpdateAddressInfo";
import UpdateBankInfo from "./UpdateBankInfo/UpdateBankInfo";
import UpdateBasicInfo from "./UpdateBasicInfo/UpdateBasicInfo";
import "./UpdateWrapper.scss";

const UpdateWrapper = () => {
  return (
    <div className="update-profile-place">
      <UploadImage />
      <UpdateBasicInfo />
      <UpdateAddressInfo />
      <UpdateBankInfo />
    </div>
  );
};

export default UpdateWrapper;
