import { FC } from "react";
import { cancelOrderingProcess } from "../../../../../../redux/appCall/ShoppingApiCall";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hook";
import ImageWraper from "./../../../../../../components/ImageWraper";
import "./NearestDeliverymen.scss";

const NearestDeliverymen: FC<{
  setPersonName: (val: string | null) => void;
}> = ({ setPersonName }) => {
  const { nearestDeliveryman, orderId } = useAppSelector(
    (state) => state.shopping
  );
  const dispatch = useAppDispatch();
  if (!nearestDeliveryman) return null;

  const handleCancel = () => {
    if (orderId) {
      dispatch(cancelOrderingProcess(orderId));
    }
  };
  return (
    <main className="nearest-deliveryman-wrapper">
      <section className="nearest-deliveryman-container">
        <button onClick={handleCancel}>Cancel Order</button>
        <h3>Choose the nearest deliverymen</h3>
        {nearestDeliveryman &&
          nearestDeliveryman.map((perosn) => (
            <div
              className="nearest-deliveryman"
              key={perosn.lat}
              onClick={() => setPersonName(perosn.name)}
            >
              <ImageWraper image={perosn.image} size="155px" />
              <h4>{perosn.name}</h4>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>{perosn.lat}</span>
                <span>{perosn.lng}</span>
              </div>
            </div>
          ))}
      </section>
    </main>
  );
};

export default NearestDeliverymen;
