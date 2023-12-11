import "./UpdateBankInfo.scss";

import { TbEdit } from "react-icons/tb";

const UpdateBankInfo = () => {
  return (
    <div className="update-bank-info">
      <h3>Update your bank</h3>
      <form id="update-bank-form">
        <div className="update-bank-wrapper">
          <input type="text" placeholder="Debit cart" />
          <div className="update-item-btn">
            <TbEdit />
          </div>
        </div>
        <div className="update-bank-wrapper">
          <input type="text" placeholder="Your Bank" />
          <div className="update-item-btn">
            <TbEdit />
          </div>
        </div>
        <button className="update-bank-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default UpdateBankInfo;
