import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import "./VendorAccount.scss";
import VendorPages from "./VendorPages/VendorPages";
import { fetchVendor } from "../../redux/appCall/VendorAppCall";
import VendorNavLinks from "./VendorNavLinks/VendorNavLinks";
import RefreshToken from "../../components/RefreshToken";

const VendorAccount = () => {
  const dispatch = useAppDispatch();
  const { imageUrl } = useAppSelector((state) => state.vendor);

  useEffect(() => {
    dispatch(fetchVendor());
  }, [imageUrl]); //eslint-disable-line

  return (
    <div className="vendor-account-dashboard-wrapper">
      <RefreshToken port="8004" />
      <VendorNavLinks />
      <VendorPages />
    </div>
  );
};

export default VendorAccount;
