import UpdateVendorForm from "./UpdateVendorForm/UpdateVendorForm";
import "./UpdateVendorInfo.scss";
import UpdateWorkHrsAndImage from "./UpdateWorkHrsAndImage/UpdateWorkHrsAndImage";

const UpdateVendorInfo = () => {
  return (
    <section className="update-vendor-info-wrapper">
      <UpdateWorkHrsAndImage />
      <UpdateVendorForm />
    </section>
  );
};

export default UpdateVendorInfo;
