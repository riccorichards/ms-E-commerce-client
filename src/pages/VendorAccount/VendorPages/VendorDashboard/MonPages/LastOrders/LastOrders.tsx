import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hook";
import "./LastOrders.scss";
import { getVendorOrders } from "../../../../../../redux/appCall/VendorAppCall";
import ImageWraper from "../../../../../../components/ImageWraper";
import { OrderCustomerInfo } from "../../../../../../redux/type.slice";

const LastOrders = () => {
  const dispatch = useAppDispatch();
  const { vendorOrders } = useAppSelector((s) => s.vendor);

  useEffect(() => {
    dispatch(getVendorOrders(true));
  }, [dispatch]);

  if (!vendorOrders) return null;

  return (
    <div className="last-orders-wrapper">
      {vendorOrders.length > 0 &&
        vendorOrders.map((order) => (
          <div className="last-order" key={order.orderId}>
            <div>
              <ImageWraper
                image={(order.customer as OrderCustomerInfo).image}
                size="40px"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                width:'120px'
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
              <span>{order.createdAt.split("T")[0]}</span>
              <span>{order.createdAt.split("T")[1].split(".")[0]}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default LastOrders;
