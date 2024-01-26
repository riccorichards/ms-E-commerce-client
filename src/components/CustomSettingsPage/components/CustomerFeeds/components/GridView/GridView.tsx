import "./GridView.scss";
import FeedTemplate from "../../../../../FeedTemplate/FeedTemplate";
import { useAppSelector } from "../../../../../../redux/hook";
import { VscFeedback } from "react-icons/vsc";

const GridView = () => {
  const { myFeeds, customer } = useAppSelector((state) => state.customer);
  const { vendorFeeds, vendor } = useAppSelector((state) => state.vendor);

  if (!customer && !vendor) return null;

  const targetFeeds = myFeeds || vendorFeeds;

  return (
    <main className="feeds-grid-view-wrapper">
      <div className="feeds-grid-view">
        {targetFeeds && targetFeeds.length > 0 ? (
          targetFeeds.map((feed) => (
            <FeedTemplate
              key={feed.feedId}
              feed={feed}
              since={
                customer?.createdAt ? customer.createdAt : vendor?.createdAt
              }
            />
          ))
        ) : (
          <div
            style={{
              width: "100%",
              height: "50vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                alignItems: "center",
              }}
            >
              <VscFeedback style={{ fontSize: "24px", color: "orangered" }} />
              <h4>Feeds are not available or not existing</h4>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default GridView;
