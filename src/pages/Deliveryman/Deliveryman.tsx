import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hook";
import "./Deliveryman.scss";
import AboutDeliveryman from "./components/AboutDeliveryman/AboutDeliveryman";
import DeliveryOverview from "./components/DeliveryOverview/DeliveryOverview";
import DeliverymanActivities from "./components/DeliverymanActivities/DeliverymanActivities";
import { getDeliveryman } from "../../redux/appCall/DeliverymanAppCall";
import RefreshToken from "../../components/RefreshToken";

const Deliveryman = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDeliveryman());
  }, []); //eslint-disable-line

  return (
    <div className="deliveryman-dashboard-wrapper">
      <RefreshToken port="8005" />
      <div className="deliveryman-dashboard-left">
        <AboutDeliveryman />
        <DeliveryOverview />
      </div>
      <div className="deliveryman-dashboard-right">
        <DeliverymanActivities />
      </div>
    </div>
  );
};

export default Deliveryman;
