import "./DeliveryPerson.scss";
import ImageWraper from "../../../../components/ImageWraper";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";

const image =
  "https://i.pinimg.com/564x/a4/d9/c0/a4d9c0bf9f1f64cbea7636797ba101b6.jpg";
const DeliveryPerson = () => {
  return (
    <div className="customer-info-wrapper">
      <ImageWraper image={image} size="75px" />
      <h2>Robert Fox</h2>
      <div className="status-wrapper">Delivery Guy</div>
      <div className="customer-contact-wrapper">
        <div className="customer-info-phone">
          <IoCallOutline />
          <span>+95 155 322 145</span>
        </div>
        <div className="customer-info-address">
          <IoLocationOutline />
          <span>St. peterson N165</span>
        </div>
      </div>
      <div className="decor-underline" />
      <div className="note-order-wrapper">
        <h3>Note Order</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          officiis eum soluta, amet sint modi.
        </p>
      </div>
      <div className="decor-underline" />
    </div>
  );
};

export default DeliveryPerson;
