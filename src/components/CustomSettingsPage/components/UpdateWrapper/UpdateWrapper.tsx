import UploadImage from "../../../../components/UploadImage/UploadImage";
import { useAppSelector } from "../../../../redux/hook";
import UpdateAddressInfo from "./UpdateAddressInfo/UpdateAddressInfo";
import UpdateBankInfo from "./UpdateBankInfo/UpdateBankInfo";
import UpdateBasicInfo from "./UpdateBasicInfo/UpdateBasicInfo";
import "./UpdateWrapper.scss";

const UpdateWrapper = () => {
  const { customer } = useAppSelector((state) => state.customer);
  if (!customer) return null;
  return (
    <div className="update-profile-place">
      <UploadImage
        target={customer}
        address="customer"
        isSendToService="0"
        size="250px"
      />
      <UpdateBasicInfo />
      <UpdateAddressInfo />
      <UpdateBankInfo />
    </div>
  );
};

export default UpdateWrapper;
