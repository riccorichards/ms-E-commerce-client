import "./VendorOrderDeliveryman.scss";
import ImageWraper from "./../../../../../../components/ImageWraper";
import { useContext, useEffect } from "react";
import VendorOrderContext from "../../VendorOrderContext";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hook";
import { getDeliverymanForVendorOrder } from "../../../../../../redux/appCall/VendorAppCall";

const VendorOrderDeliveryman = () => {
  const getVendorOrderContect = useContext(VendorOrderContext);
  const deliverymanName = getVendorOrderContect?.newRequest.deliverymanName;
  const dispatch = useAppDispatch();
  const { orderDeliverymanInfo } = useAppSelector((s) => s.vendor);

  useEffect(() => {
    if (deliverymanName) {
      dispatch(getDeliverymanForVendorOrder(deliverymanName));
    }
  }, [deliverymanName, dispatch]);

  if (!orderDeliverymanInfo) return null;
  const { image, email, currentAddress, name } = orderDeliverymanInfo;
  return (
    <main className="vendor-order-deliveryman-wrapper">
      <div>
        <ImageWraper image={image} size="55px" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3>{name}</h3>
        <p>{email}</p>
        <p>{currentAddress}</p>
      </div>
    </main>
  );
};

export default VendorOrderDeliveryman;
