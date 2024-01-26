import { useEffect, useState } from "react";
import "./VendorOrders.scss";
import VendorOrderModal from "./VendorOrderModal/VendorOrderModal";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { getVendorOrders } from "../../../../redux/appCall/VendorAppCall";
import LinearVendorOrderTemplate from "./LinearVendorOrderTemplate";
import VendorOrderContext, { InitialRequstType } from "./VendorOrderContext";

const initialRequst: InitialRequstType = {
  orderId: null,
  orderDate: null,
  customerId: null,
  deliverymanName: null,
};

const VendorOrders = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [newRequest, setNewRequest] =
    useState<InitialRequstType>(initialRequst);

  const dispatch = useAppDispatch();
  const { vendorOrders } = useAppSelector((s) => s.vendor);

  useEffect(() => {
    dispatch(getVendorOrders(false));
  }, [dispatch]);

  if (!vendorOrders) return null;

  const values = { newRequest, setNewRequest, isOpen, setIsOpen };
  return (
    <VendorOrderContext.Provider value={values}>
      <section className="vendor-orders-wrapper">
        <h1>Vendor orders</h1>
        <div className="vendor-orders">
          {vendorOrders.map((order) => (
            <LinearVendorOrderTemplate order={order} key={order.orderId} />
          ))}
        </div>
        {isOpen && <VendorOrderModal setIsOpen={setIsOpen} />}
      </section>
    </VendorOrderContext.Provider>
  );
};

export default VendorOrders;
