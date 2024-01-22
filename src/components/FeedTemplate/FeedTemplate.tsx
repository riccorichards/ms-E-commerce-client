import { FC, useContext, useState } from "react";
import ImageWraper from "./../ImageWraper";
import "./FeedTemplate.scss";
import RatingCalculation from "./../RatingCalculation";
import { FeedbackType } from "../../redux/type.slice";
import { FaRegStar } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import FeedContext from "../CustomSettingsPage/components/CustomerFeeds/FeedContext";

const timeFormat = (str: string) => {
  return str.split("T")[0];
};

const FeedTemplate: FC<{
  feed: FeedbackType;
  since?: string | undefined;
}> = ({ feed, since }) => {
  const [isOption, setIsOption] = useState<boolean>(false);

  const getFeedContext = useContext(FeedContext)!;
  const handleDeleteFeed = getFeedContext?.handleDeleteFeedProcess;

  if (!feed) return null;

  const rating = {
    icon: FaRegStar,
    rating: feed.vendorRating,
  };

  return (
    <div className="feed-template-wrapper">
      <div className="feed-template-header">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div>
            <ImageWraper image={feed.authorImg} size="50px" nonCircle />
          </div>
          <div className="customer-details-in-feed">
            <h5>{feed.author}</h5>
            <p style={{ fontSize: "12px" }}>{timeFormat(since || "")}</p>
          </div>
        </div>
        {getFeedContext && (
          <button
            className="feed-option-btn"
            onClick={() => setIsOption((prev) => !prev)}
          >
            <MdMoreHoriz />
          </button>
        )}
        {isOption && (
          <div className="feed-options-wrapper">
            <div
              className="feed-options"
              onClick={() => handleDeleteFeed(feed.feedId)}
            >
              <span>Remove</span>
              <button>
                <IoTrashOutline />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="decor-line-in-feed" />
      <div className="target-header-in-feed">
        <div className="vendor-details-in-feed">
          <div>
            <ImageWraper image={feed.targetImg} size="50px" nonCircle />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h5>{feed.targetTitle}</h5>
            {feed.vendorRating && (
              <p style={{ fontSize: "12px" }}>
                <RatingCalculation rating={rating} />
              </p>
            )}
          </div>
        </div>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            wordBreak: "break-all",
            fontSize: "14px",
            height: "5vh",
          }}
        >
          {`"${feed.review}"`}
        </p>
        <span style={{ fontSize: "12px", alignSelf: "flex-end" }}>
          {timeFormat(feed.createdAt)}
        </span>
      </div>
    </div>
  );
};

export default FeedTemplate;
