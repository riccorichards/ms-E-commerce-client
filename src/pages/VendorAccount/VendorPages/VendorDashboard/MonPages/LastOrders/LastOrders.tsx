import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hook";
import "./LastOrders.scss";
import { getVendorOrders } from "../../../../../../redux/appCall/VendorAppCall";
import ImageWraper from "../../../../../../components/ImageWraper";
import { OrderCustomerInfo } from "../../../../../../redux/type.slice";
import Utils from "../../../../../../utils/utils";

const LastOrders = () => {
  const dispatch = useAppDispatch();
  const { lastOrders } = useAppSelector((s) => s.vendor);

  useEffect(() => {
    dispatch(getVendorOrders(true));
  }, [dispatch]);

  if (!lastOrders) return null;

  return (
    <section className="last-orders-wrapper">
      {lastOrders.length > 0 &&
        lastOrders.map((order) => (
          <main className="last-order" key={order.orderId}>
            <div>
              <ImageWraper image={order.customer.image} size="40px" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                width: "120px",
              }}
            >
              <span>{(order.customer as OrderCustomerInfo).username}</span>
              <span style={{ fontSize: "12px" }}>
                {(order.customer as OrderCustomerInfo).email}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                alignItems: "center",
              }}
            >
              <span>Total</span>
              <span>${order.total_amount.toFixed(2)}</span>
            </div>
            <div
              style={{
                fontSize: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <span>{Utils.dateFormatter(order.createdAt).date}</span>
              <span>{Utils.dateFormatter(order.createdAt).time}</span>
            </div>
          </main>
        ))}
    </section>
  );
};

export default LastOrders;
