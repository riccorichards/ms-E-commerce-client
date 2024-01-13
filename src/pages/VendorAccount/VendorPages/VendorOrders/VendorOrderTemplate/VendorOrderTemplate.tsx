import ImageWraper from "../../../../../components/ImageWraper";
import "./VendorOrderTemplate.scss";
import RatingCalculation from "../../../../../components/RatingCalculation";
import { FaRegStar } from "react-icons/fa";
import { useContext, useEffect } from "react";
import VendorOrderHeader from "./VendorOrderHeader/VendorOrderHeader";
import VendorOrderItems from "./VendorOrderItems/VendorOrderItems";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hook";
import {
  getCustomerForVendorOrder,
  getVendorOrderItemsById,
} from "../../../../../redux/appCall/VendorAppCall";
import VendorOrderContext from "../VendorOrderContext";

const VendorOrderTemplate = () => {
  const { vendor } = useAppSelector((s) => s.vendor);
  const dispatch = useAppDispatch();

  const getVendorOrderContect = useContext(VendorOrderContext);

  const newRequest = getVendorOrderContect?.newRequest;

  useEffect(() => {
    if (newRequest?.orderId && newRequest?.customerId) {
      dispatch(getCustomerForVendorOrder(newRequest.customerId));
      dispatch(getVendorOrderItemsById(newRequest.orderId));
    }
  }, [newRequest?.orderId, newRequest?.customerId, dispatch]);

  if (!vendor || !getVendorOrderContect) return null;

  const rating = {
    icon: FaRegStar,
    rating: vendor.rating,
  };

  return (
    <div className="vendor-order-template-wrapper">
      <VendorOrderHeader />
      <VendorOrderItems />
      <div className="vendor-order-vendor-info">
        <div>
          <h3>{vendor.name}</h3>
          <RatingCalculation rating={rating} />
        </div>
        <ImageWraper image={vendor.image} size="45px" />
      </div>
    </div>
  );
};

export default VendorOrderTemplate;
