import UpdateVendorForm from "./UpdateVendorForm/UpdateVendorForm";
import "./UpdateVendorInfo.scss";
import UpdateWorkHrsAndImage from "./UpdateWorkHrsAndImage/UpdateWorkHrsAndImage";

const UpdateVendorInfo = () => {
  return (
    <div className="update-vendor-info-wrapper">
      <UpdateWorkHrsAndImage />
      <UpdateVendorForm />
    </div>
  );
};

export default UpdateVendorInfo;
