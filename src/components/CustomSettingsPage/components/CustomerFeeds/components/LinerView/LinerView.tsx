import ImageWraper from "./../../../../../ImageWraper";
import RatingCalculation from "../../../../../RatingCalculation";
import "./LinerView.scss";
import { useAppSelector } from "../../../../../../redux/hook";
import { FaRegStar } from "react-icons/fa";
import { LuDelete } from "react-icons/lu";
import { useContext } from "react";
import FeedContext from "../../FeedContext";
import Utils from "../../../../../../utils/utils";

const LinerView = () => {
  const { myFeeds, customer } = useAppSelector((state) => state.customer);
  const { vendorFeeds, vendor } = useAppSelector((state) => state.vendor);
  const getFeedContext = useContext(FeedContext);
  if (!customer && !vendor) return null;

  const targetFeeds = myFeeds || vendorFeeds;

  if (!getFeedContext) return null;
  const handleRemoveFeed = getFeedContext.handleDeleteFeedProcess;

  return (
    <main className="liner-view-wrapper">
      {targetFeeds &&
        targetFeeds.map((feed) => (
          <div className="liner-view" key={feed.feedId}>
            <span
              style={{ fontSize: "16px", color: "#008080" }}
            >{`#${feed.feedId}`}</span>
            <div className="show-author">
              <ImageWraper image={feed.authorImg} size="35px" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4>{feed.author}</h4>
                <span style={{ fontSize: "12px" }}>
                  {
                    Utils.dateFormatter(
                      customer?.createdAt || vendor?.createdAt || ""
                    ).date
                  }
                </span>
              </div>
            </div>
            <p style={{ width: "80%", textAlign: "center", fontSize: "14px" }}>
              "{feed.review}"
            </p>
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
            <span style={{ fontSize: "12px" }}>
              {Utils.dateFormatter(feed.createdAt).date}
            </span>
            <button
              className="remove-liner-feed"
              onClick={() => handleRemoveFeed(feed.feedId)}
            >
              <LuDelete />
            </button>
          </div>
        ))}
    </main>
  );
};

export default LinerView;
