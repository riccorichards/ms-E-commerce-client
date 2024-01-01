import "./GridView.scss";
import FeedTemplate from "../../../../../FeedTemplate/FeedTemplate";
import { useAppSelector } from "../../../../../../redux/hook";

const GridView = () => {
  const { myFeeds, customer } = useAppSelector((state) => state.customer);

  if (!customer) return null;

  return (
    <div className="feeds-grid-view-wrapper">
      <div className="feeds-grid-view">
        {myFeeds &&
          myFeeds.map((feed) => (
            <FeedTemplate
              key={feed.review}
              feed={feed}
              since={customer.createdAt}
            />
          ))}
      </div>
    </div>
  );
};

export default GridView;
