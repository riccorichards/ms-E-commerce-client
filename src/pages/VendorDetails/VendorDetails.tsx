import "./VendorDetails.scss";
import VendorInfo from "./VendorInfo/VendorInfo";
import VendorGallery from "./VendorGallery/VendorGallery";
import VendorPopularFood from "./VendorPopularFood/VendorPopularFood";
import VendorFeeds from "./VendorFeeds/VendorFeeds";
import VendorTeam from "./VendorTeam/VendorTeam";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getSpecVendor } from "../../redux/appCall/VendorAppCall";

const VendorDetails = () => {
  const dispatch = useAppDispatch();
  const { specVendor, vendor } = useAppSelector((state) => state.vendor);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getSpecVendor(id));
    }
  }, [id]); //eslint-disable-line

  return (
    <div className="vendor-details">
      <div className="vendor-introduction">
        <VendorInfo
          vendor={specVendor || vendor}
          isCustomer={Boolean(id)}
          id={id}
        />
        <VendorGallery />
      </div>
      <VendorPopularFood />
      <VendorTeam />
      <VendorFeeds />
    </div>
  );
};

export default VendorDetails;
