import AddressInfo from "./AddressInfo/AddressInfo";
import BankInfo from "./BankInfo/BankInfo";
import BasicInfo from "./BasicInfo/BasicInfo";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <div className="auth-path">
      <BasicInfo />
      <AddressInfo />
      <BankInfo />
    </div>
  );
};

export default SignUp;
