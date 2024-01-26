import { useEffect } from "react";
import VendorTemplate from "../../components/vendorTemplate/VendorTemplate";
import "./VendorList.scss";

import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getAllVendors } from "../../redux/appCall/VendorAppCall";

const VendorList = () => {
  const dispatch = useAppDispatch();
  const { vendorList } = useAppSelector((state) => state.vendor);

  useEffect(() => {
    dispatch(getAllVendors());
  }, []); //eslint-disable-line

  return (
    <div className="vendors-list">
      {vendorList &&
        vendorList.map((vendor) => (
          <VendorTemplate vendor={vendor} key={vendor._id} />
        ))}
    </div>
  );
};

export default VendorList;
