import ActivitiesTemplate from "./ActivitiesTemplate/ActivitiesTemplate";
import "./DeliverymanActivities.scss";

const DeliverymanActivities = () => {
  return (
    <div className="deliveryman-activity-wrapper">
      <h2>Last Activities</h2>
      <div className="deliveryman-activities">
        <ActivitiesTemplate />
      </div>
    </div>
  );
};

export default DeliverymanActivities;
