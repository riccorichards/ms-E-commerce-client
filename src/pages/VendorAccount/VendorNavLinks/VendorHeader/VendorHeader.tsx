import { useAppSelector } from "../../../../redux/hook";
import "./VendorHeader.scss";

const VendorHeader = () => {
  const { vendor } = useAppSelector((state) => state.vendor);
  if (!vendor) return null;
  const { url } = vendor;
  return (
    <header className="vendor-account-header-wrapper">
      <div className="image-wrapper">
        <img src={(url && url) || ""} className="profile-image" />
      </div>
      <h3>{vendor.name}</h3>
    </header>
  );
};

export default VendorHeader;
