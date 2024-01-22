import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import ActivitiesTemplate from "./ActivitiesTemplate/ActivitiesTemplate";
import "./DeliverymanActivities.scss";
import { getdeliverymanOrders } from "../../../../redux/appCall/DeliverymanAppCall";

const DeliverymanActivities = () => {
  const dispatch = useAppDispatch();
  const { deliverymanOrders } = useAppSelector((s) => s.deliveryman);

  useEffect(() => {
    dispatch(getdeliverymanOrders({ isStats: false }));
  }, [dispatch]);

  if (!deliverymanOrders) return null;

  return (
    <section className="deliveryman-activity-wrapper">
      <div className="deliveryman-activities">
        {deliverymanOrders.map((order) => (
          <ActivitiesTemplate key={order.id} order={order} />
        ))}
      </div>
    </section>
  );
};

export default DeliverymanActivities;
