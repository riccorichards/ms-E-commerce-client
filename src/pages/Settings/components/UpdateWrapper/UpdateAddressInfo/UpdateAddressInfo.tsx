import "./UpdateAddressInfo.scss";
import { TbEdit } from "react-icons/tb";

const UpdateAddressInfo = () => {
  return (
    <div className="customer-update-address">
      <h3>Update your address</h3>
      <form id="update-address-form">
        <div className="update-address-wrapper">
          <input type="text" placeholder="Street" />
          <div className="update-item-btn">
            <TbEdit />
          </div>
        </div>
        <div className="update-address-wrapper">
          <input type="text" placeholder="Postal code" />
          <div className="update-item-btn">
            <TbEdit />
          </div>
        </div>
        <div className="update-address-wrapper">
          <input type="text" placeholder="City" />
          <div className="update-item-btn">
            <TbEdit />
          </div>
        </div>
        <div className="update-address-wrapper">
          <input type="text" placeholder="Country" />
          <div className="update-item-btn">
            <TbEdit />
          </div>
        </div>
        <button className="update-address-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default UpdateAddressInfo;
