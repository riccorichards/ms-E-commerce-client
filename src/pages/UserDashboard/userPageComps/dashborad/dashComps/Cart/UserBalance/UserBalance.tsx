import "./UserBalance.scss";
import { TiArrowUpOutline, TiArrowDownOutline } from "react-icons/ti";
const UserBalance = () => {
  return (
    <div className="user-balance-wrapper">
      <h1 className="underline-to-your-info">Your Information</h1>
      <div className="balance-wrapper">
        <div className="info-of-balance">
          <h3>Balance</h3>
          <span className="cash-in-the-cart">$ 12.00</span>
          <div className="deposit-withdraw">
            <button className="deposit-withdraw-btn">
              <span>Deposit</span>
              <div className="deposit-withdraw-btn-icon">
                <TiArrowDownOutline />
              </div>
            </button>
            <button className="deposit-withdraw-btn">
              <span>Withdraw</span>
              <div className="deposit-withdraw-btn-icon">
                <TiArrowUpOutline />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBalance;
