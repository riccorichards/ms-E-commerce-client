import { FC } from "react";
import ImageWraper from "./../ImageWraper";
import "./FeedTemplate.scss";
import RatingCalculation from "./../RatingCalculation";

interface FeedType {
  customerImg: string;
  name: string;
  since: string;
  targetImg: string;
  title: string;
  rating: { icon: React.ElementType; rating: number };
  text: string;
  date: string;
}

const FeedTemplate: FC<{ feedType: FeedType }> = ({ feedType }) => {
  return (
    <div className="feed-template-wrapper">
      <div className="feed-template-header">
        <ImageWraper image={feedType.customerImg} size="50px" nonCircle />
        <div className="customer-details-in-feed">
          <h3>{feedType.name}</h3>
          <p>{feedType.since}</p>
        </div>
      </div>
      <div className="decor-line-in-feed" />
      <div className="target-header-in-feed">
        <div className="vendor-details-in-feed">
          <ImageWraper image={feedType.targetImg} size="50px" nonCircle />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3>{feedType.title}</h3>
            <p>
              <RatingCalculation rating={feedType.rating} />
            </p>
          </div>
        </div>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            wordBreak: "break-all",
          }}
        >
          {`"${feedType.text}"`}
        </p>
        <span>{feedType.date}</span>
      </div>
    </div>
  );
};

export default FeedTemplate;
