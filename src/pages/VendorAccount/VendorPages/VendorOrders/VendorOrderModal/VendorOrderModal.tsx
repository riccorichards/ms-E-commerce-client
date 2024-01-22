import { FC } from "react";
import "./VendorOrderModal.scss";
import VendorOrderHeaderInfo from "./VendorOrderCustomerInfo/VendorOrderHeaderInfo";
import VendorOrderDeliveryman from "./VendorOrderDeliveryman/VendorOrderDeliveryman";
import VendorOrderItems from "./VendorOrderItems/VendorOrderItems";
const VendorOrderModal: FC<{ setIsOpen: (v: boolean) => void }> = ({
  setIsOpen,
}) => {
  return (
    <section className="vendor-order-modal-wrapper">
      <div className="vendor-order-modal-content">
        <button onClick={() => setIsOpen(false)}>Close</button>
        <VendorOrderHeaderInfo />
        <div
          style={{ width: "100%", height: "1px", backgroundColor: "grey" }}
        />
        <VendorOrderDeliveryman />
        <div
          style={{ width: "100%", height: "1px", backgroundColor: "grey" }}
        />
        <VendorOrderItems />
      </div>
    </section>
  );
};

export default VendorOrderModal;
