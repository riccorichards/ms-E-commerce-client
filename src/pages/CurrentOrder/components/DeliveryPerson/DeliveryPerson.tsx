import "./DeliveryPerson.scss";
import ImageWraper from "../../../../components/ImageWraper";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { useAppSelector } from "../../../../redux/hook";
function dateFormatter(str: string) {
  return str.split("T");
}

const DeliveryPerson = () => {
  const { deliverymanForOrder } = useAppSelector((state) => state.shopping);

  if (!deliverymanForOrder) return null;

  return (
    <div className="customer-info-wrapper">
      <ImageWraper image={deliverymanForOrder.image} size="100px" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>{deliverymanForOrder.name}</h2>
        <span>{dateFormatter(deliverymanForOrder.createdAt)[0]}</span>
      </div>
      <div className="status-wrapper">Delivery Guy</div>
      <div className="customer-contact-wrapper">
        <div className="customer-info-phone">
          <IoCallOutline />
          <span>+95 155 322 145</span>
        </div>
        <div className="customer-info-address">
          <div>
            <IoLocationOutline />
          </div>
          <span>{deliverymanForOrder.currentAddress}</span>
        </div>
      </div>
      <div className="status-wrapper">Vendors</div>
    </div>
  );
};

export default DeliveryPerson;
