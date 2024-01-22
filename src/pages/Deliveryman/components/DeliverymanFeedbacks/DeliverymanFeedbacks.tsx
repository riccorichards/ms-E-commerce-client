import { useEffect } from "react";
import ImageWraper from "../../../../components/ImageWraper";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import "./DeliverymanFeedbacks.scss";
import { getdeliverymanFeeds } from "../../../../redux/appCall/DeliverymanAppCall";

const DeliverymanFeedbacks = () => {
  const { deliveryFeedbacks } = useAppSelector((s) => s.deliveryman);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getdeliverymanFeeds());
  }, [dispatch]);

  if (!deliveryFeedbacks) return null;

  return (
    <section className="deliveryman-feedbacks-wrapper">
      <main className="deliveryman-feedbacks">
        {deliveryFeedbacks.map((feed) => (
          <div className="deliveryman-feedback" key={feed.feedId}>
            <div className="deliveryman-feedback-customer-info">
              <div>
                <ImageWraper image={feed.authorImg} size="55px" />
              </div>
              <div
                style={{ display: "flex", gap: "5px", flexDirection: "column" }}
              >
                <h4>{feed.author}</h4>
                <span style={{ fontSize: "12px" }}>
                  {feed.createdAt.split("T")[0]}
                </span>
              </div>
            </div>
            <span>"{feed.review}"</span>
          </div>
        ))}
      </main>
    </section>
  );
};

export default DeliverymanFeedbacks;
