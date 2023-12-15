import "./NewVendor.scss";
import UploadVendorImage from "./UploadVendorImage/UploadVendorImage";
import VendorForm from "./VendorForm/VendorForm";

const NewVendor = () => {
  return (
    <div className="new-vendor-wrapper">
      <h1>Create a new vendor</h1>
      <div className="new-vendor">
        <UploadVendorImage />
        <VendorForm />
      </div>
    </div>
  );
};

export default NewVendor;
