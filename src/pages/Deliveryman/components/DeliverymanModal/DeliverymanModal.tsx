import "./DeliverymanModal.scss";
import ImageWraper from "../../../../components/ImageWraper";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { FC, useContext, useEffect } from "react";
import { OrderType } from "../../../../redux/type.slice";
import DeliveryContext from "../../DeliveryContext";
import { getVendorForOrder } from "../../../../redux/appCall/ShoppingApiCall";
import RatingCalculation from "../../../../components/RatingCalculation";
import { FaRegStar } from "react-icons/fa";
import { resetVendorForOrder } from "../../../../redux/slice/shopping.slice";
import Utils from "../../../../utils/utils";
const DeliverymanModal: FC<{
  order: OrderType | null | undefined;
}> = ({ order }) => {
  const { deliverymanOrders } = useAppSelector((s) => s.deliveryman);
  const { vendorForOrder } = useAppSelector((s) => s.shopping);
  const dispatch = useAppDispatch();
  const getDeliveryContext = useContext(DeliveryContext);
  const setIsMoreDetails = getDeliveryContext?.setIsMoreDetails;

  useEffect(() => {
    if (order) {
      if (vendorForOrder.length < 1) {
        Utils.addressWrapper(order.orderItem).forEach((address) => {
          dispatch(getVendorForOrder(address));
        });
      }
      
    }
  }, [dispatch, vendorForOrder.length, order]);

  if (!deliverymanOrders || !order || !vendorForOrder) return null;

  const handleClose = () => {
    if (setIsMoreDetails) {
      setIsMoreDetails(false);
      dispatch(resetVendorForOrder());
    }
  };

  const { customer } = order;
  return (
    <main className="more-detailed-activities-wrapper">
      <div className="more-detailed-activities">
        <button onClick={handleClose}>Close</button>
        <header style={{ display: "flex", gap: "15px", height: "28vh" }}>
          <div className="more-detailed-customer-info">
            <div>
              <ImageWraper image={customer.image} size="100px" />
            </div>
            <h3>{Utils.capitalized(customer.username)}</h3>
            <span>{customer.address}</span>
            <span>{customer.email}</span>
          </div>
          <div className="more-detailed-vendors-info-wrapper">
            {vendorForOrder.map((vendor) => (
              <div className="more-detailed-vendor-info" key={vendor.name}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <div>
                    <ImageWraper image={vendor.image} size="90px" />
                  </div>
                  <div>
                    <h3>{vendor.name}</h3>
                    <RatingCalculation
                      rating={{ icon: FaRegStar, rating: vendor.rating }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <span>{vendor.address}</span>
                  <span>{vendor.email}</span>
                  <span>{vendor.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </header>
        <main className="more-detailed-activities-menu-wrapper">
          <h3>Menu</h3>
          <div className="more-detailed-activities-menu">
            {order.orderItem.map((food) => (
              <div
                className="more-detailed-activities-food"
                key={food.productId}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <div style={{ border: "5px solid" }}>
                    <ImageWraper image={food.product_image} size="75px" />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h4>{food.product_name}</h4>
                    <span>{food.product_address}</span>
                    <span>x{food.qty}</span>
                  </div>
                </div>
                <span>$ {food.product_price}</span>
              </div>
            ))}
          </div>
        </main>
        <footer className="more-detailed-activities-footer">
          ${order.total_amount.toFixed(2)}
        </footer>
      </div>
    </main>
  );
};
export default DeliverymanModal;
