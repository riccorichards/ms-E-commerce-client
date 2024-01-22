import AddressInfo from "./AddressInfo/AddressInfo";
import BankInfo from "./BankInfo/BankInfo";
import BasicInfo from "./BasicInfo/BasicInfo";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <main className="auth-path">
      <BasicInfo />
      <AddressInfo />
      <BankInfo />
    </main>
  );
};

export default SignUp;
