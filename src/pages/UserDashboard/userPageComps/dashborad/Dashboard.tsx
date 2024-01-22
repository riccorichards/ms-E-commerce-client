import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../redux/hook";
import "./Dashboard.scss";
import Cart from "./dashComps/Cart/Cart";
import NearestDeliverymen from "./dashComps/NearestDeliverymen/NearestDeliverymen";
import ProductList from "./dashComps/ProductList/ProductList";
import ShippingPage from "./dashComps/ShippingPage/ShippingPage";
import Loader from "../../../../components/Loading/Loader";

const Dashboard = () => {
  const { nearestDeliveryman, status } = useAppSelector(
    (state) => state.shopping
  );
  const [personName, setPersonName] = useState<string | null>(null);
  const [isLoader, setIsLoader] = useState<boolean>(false);

  useEffect(() => {
    let loaderTimeOut: NodeJS.Timeout;
    if (status === "pending") {
      loaderTimeOut = setTimeout(() => {
        setIsLoader(true);
      }, 100);
    } else {
      setIsLoader(false);
    }

    return () => {
      clearTimeout(loaderTimeOut);
    };
  }, [status]);

  return (
    <main className="user-dashboard">
      {isLoader && <Loader />}
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
    </main>
  );
};

export default Dashboard;
