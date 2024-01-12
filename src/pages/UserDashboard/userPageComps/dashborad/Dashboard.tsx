import { useState } from "react";
import { useAppSelector } from "../../../../redux/hook";
import "./Dashboard.scss";
import Cart from "./dashComps/Cart/Cart";
import NearestDeliverymen from "./dashComps/NearestDeliverymen/NearestDeliverymen";
import ProductList from "./dashComps/ProductList/ProductList";
import ShippingPage from "./dashComps/ShippingPage/ShippingPage";

const Dashboard = () => {
  const { nearestDeliveryman } = useAppSelector((state) => state.shopping);
  const [personName, setPersonName] = useState<string | null>(null);
  return (
    <div className="user-dashboard">
      {personName ? (
        <ShippingPage personName={personName} />
      ) : (
        <>
          <ProductList />
          <Cart />
          {nearestDeliveryman && (
            <NearestDeliverymen setPersonName={setPersonName} />
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
