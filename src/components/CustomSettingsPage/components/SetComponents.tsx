import "./SetComponents.scss";
import { FC } from "react";
import SetCustomerComp from "./SetCustomerComp";
import SetVendorComp from "./SetVendorComp";

const SetComponents: FC<{ target: string }> = ({ target }) => {
  return (
    <div className="set-component-wrapper">
      {target === "customer" && <SetCustomerComp />}
      {target === "vendor" && <SetVendorComp />}
    </div>
  );
};

export default SetComponents;
