import ImageWraper from "./../../../../../ImageWraper";
import RatingCalculation from "../../../../../RatingCalculation";
import "./LinerView.scss";
import { useAppSelector } from "../../../../../../redux/hook";
import { FaRegStar } from "react-icons/fa";
import { LuDelete } from "react-icons/lu";
import { useContext } from "react";
import FeedContext from "../../FeedContext";

const timeFormat = (str: string) => {
  return str.split("T")[0];
};

const LinerView = () => {
  const { myFeeds, customer } = useAppSelector((state) => state.customer);

  const getFeedContext = useContext(FeedContext);
  if (!getFeedContext) return null;
  const handleRemoveFeed = getFeedContext.handleDeleteFeedProcess;
  if (!customer) return null;
  return (
    <div className="liner-view-wrapper">
      {myFeeds &&
        myFeeds.map((feed) => (
          <div className="liner-view" key={feed.feedId}>
            <span
              style={{ fontSize: "16px", color: "#008080" }}
            >{`#${feed.feedId}`}</span>
            <div className="show-author">
              <ImageWraper image={feed.authorImg} size="35px" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4>{feed.author}</h4>
                <span style={{ fontSize: "12px" }}>
                  {timeFormat(customer.createdAt)}
                </span>
              </div>
            </div>
            <p>"{feed.review}"</p>
            <div className="show-target">
              <ImageWraper image={feed.targetImg} size="35px" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h5>{feed.targetTitle}</h5>
                {feed.address === "vendor" && (
                  <span>
                    {
                      <RatingCalculation
                        rating={{
                          icon: FaRegStar,
                          rating: feed.vendorRating,
                        }}
                      />
                    }
                  </span>
                )}
              </div>
            </div>
            <span style={{ fontSize: "14px" }}>
              {timeFormat(feed.createdAt)}
            </span>
            <button
              className="remove-liner-feed"
              onClick={() => handleRemoveFeed(feed.feedId)}
            >
              <LuDelete />
            </button>
          </div>
        ))}
    </div>
  );
};

export default LinerView;
