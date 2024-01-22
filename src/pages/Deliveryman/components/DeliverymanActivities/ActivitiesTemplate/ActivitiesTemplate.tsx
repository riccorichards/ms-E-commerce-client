import { FC, useContext } from "react";
import "./ActivitiesTemplate.scss";
import ImageWraper from "../../../../../components/ImageWraper";
import { MdLocationPin, MdAlternateEmail } from "react-icons/md";
import DeliveryContext from "../../../DeliveryContext";
import { addressWrapper } from "../../../../../utils/utils";
import { OrderType } from "../../../../../redux/type.slice";

const ActivitiesTemplate: FC<{
  order: OrderType;
}> = ({ order }) => {
  const getDeliveryContext = useContext(DeliveryContext);
  const setIsMoreDetails = getDeliveryContext?.setIsMoreDetails;
  const setDeliveryOrderId = getDeliveryContext?.setDeliveryOrderId;

  const { customer } = order;

  const handleIsMore = (id: number) => {
    if (setIsMoreDetails && setDeliveryOrderId) {
      setIsMoreDetails(true);
      setDeliveryOrderId(id);
    }
  };

  return (
    <div className="activities-wrapper" onClick={() => handleIsMore(order.id)}>
      <div className="activities-details">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <span>
            <b>{order.id > 9 ? `#00${order.id}` : `#000${order.id}`}</b>
          </span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "12px" }}>
              {order.createdAt.split("T")[0]}
            </span>
            <span style={{ fontSize: "12px" }}>
              {order.createdAt.split("T")[1].split(".")[0]}
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <span>
            <b>Total amount</b>
          </span>
          <span>${order.total_amount.toFixed(2)}</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <span>
            <b>Items</b>
          </span>
          <span>x{order.orderItem.length}</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <span>
            <b>Status</b>
          </span>
          <span>{order.order_status}</span>
        </div>
      </div>

      <div className="activities-customer-info">
        <div style={{ display: "flex", gap: "10px" }}>
          <div>
            <ImageWraper image={customer.image} size="55px" />
          </div>
          <div>
            <h4>Ricco</h4>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MdLocationPin />
              </span>
              <span style={{ fontSize: "12px" }}>{customer.address}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MdAlternateEmail />
              </span>
              <span style={{ fontSize: "12px" }}>{customer.email}</span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          {addressWrapper(order.orderItem).map((address, index) => (
            <span style={{ fontSize: "11px" }} key={index}>
              {" "}
              {`${index + 1}: ${address}`}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesTemplate;
