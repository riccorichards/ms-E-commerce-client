import "./UpdateBasicInfo.scss";
import { TbEdit } from "react-icons/tb";

const UpdateBasicInfo = () => {
  return (
    <div className="customer-basic-update">
      <h3>Update your profile</h3>
      <form id="customer-form">
        <div className="customer-update-input-wrapper">
          <input type="text" placeholder="Username" />
          <div className="update-item-btn">
            <TbEdit />
          </div>
        </div>
        <div className="customer-update-input-wrapper">
          <input type="text" placeholder="Email" />
          <div className="update-item-btn">
            <TbEdit />
          </div>
        </div>
        <div className="customer-update-input-wrapper">
          <input type="text" placeholder="Password" />
          <div className="update-item-btn">
            <TbEdit />
          </div>
        </div>
        <button className="basic-update-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default UpdateBasicInfo;
