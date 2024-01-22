import "./NewVendor.scss";
import UploadVendorImage from "./UploadVendorImage/UploadVendorImage";
import VendorForm from "./VendorForm/VendorForm";

const NewVendor = () => {
  return (
    <div className="new-vendor-wrapper">
      <h1>Create a new vendor</h1>
      <main className="new-vendor">
        <UploadVendorImage />
        <VendorForm />
      </main>
    </div>
  );
};

export default NewVendor;
