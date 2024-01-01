import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import "./VendorAccount.scss";
import VendorPages from "./VendorPages/VendorPages";
import { fetchVendor } from "../../redux/appCall/VendorAppCall";
import VendorNavLinks from "./VendorNavLinks/VendorNavLinks";

const VendorAccount = () => {
  const dispatch = useAppDispatch();
  const { imageUrl } = useAppSelector((state) => state.vendor);

  useEffect(() => {
    try {
      dispatch(fetchVendor());
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw error;
    }
  }, [imageUrl]); //eslint-disable-line

  return (
    <div className="vendor-account-dashboard-wrapper">
      <VendorNavLinks />
      <VendorPages />
    </div>
  );
};

export default VendorAccount;
