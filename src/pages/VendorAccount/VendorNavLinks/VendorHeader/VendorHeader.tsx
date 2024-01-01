import { useAppSelector } from "../../../../redux/hook";
import "./VendorHeader.scss";

const VendorHeader = () => {
  const { vendor } = useAppSelector((state) => state.vendor);
  if (!vendor) return null;
  return (
    <div className="vendor-account-header-wrapper">
      <div className="image-wrapper">
        <img src={vendor.image} className="profile-image" />
      </div>
      <h3>{vendor.name}</h3>
    </div>
  );
};

export default VendorHeader;
