import "./GridView.scss";
import FeedTemplate from "../../../../../FeedTemplate/FeedTemplate";
import { useAppSelector } from "../../../../../../redux/hook";

const GridView = () => {
  const { myFeeds, customer } = useAppSelector((state) => state.customer);
  const { vendorFeeds, vendor } = useAppSelector((state) => state.vendor);

  if (!customer && !vendor) return null;

  const targetFeeds = myFeeds || vendorFeeds;

  return (
    <div className="feeds-grid-view-wrapper">
      <div className="feeds-grid-view">
        {targetFeeds &&
          targetFeeds.map((feed) => (
            <FeedTemplate
              key={feed.feedId}
              feed={feed}
              since={
                customer?.createdAt ? customer.createdAt : vendor?.createdAt
              }
            />
          ))}
      </div>
    </div>
  );
};

export default GridView;
