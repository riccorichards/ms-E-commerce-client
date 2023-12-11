import "./MyFeeds.scss";
import { IoGridOutline } from "react-icons/io5";
import { TbLayoutList } from "react-icons/tb";
import FeedTemplate from "../../../../components/FeedTemplate/FeedTemplate";
import { FaRegStar } from "react-icons/fa";
import Pagination from "../../../../components/pagination/Pagination";

const profile =
  "https://i.pinimg.com/564x/a7/55/38/a755381d9d9efd881289fd0d77482bad.jpg";

const restaurant =
  "https://i.pinimg.com/564x/0f/0f/0e/0f0f0e575256ebbe5e600018ae83be2f.jpg";
const fakeFeed = [
  {
    id: 1,
    customerImg: profile,
    name: "Anastasia",
    since: "2022-12-07",
    title: "RiccoFood",
    targetImg: restaurant,
    rating: { icon: FaRegStar, rating: 4 },
    text: "This vendor is an amazing",
    date: "2023-12-25",
  },
  {
    id: 2,
    customerImg: profile,
    name: "Anastasia",
    since: "2022-12-07",
    title: "RiccoFood",
    targetImg: restaurant,
    rating: { icon: FaRegStar, rating: 4 },
    text: "This vendor is an amazing",
    date: "2023-12-25",
  },
  {
    id: 3,
    customerImg: profile,
    name: "Anastasia",
    since: "2022-12-07",
    title: "RiccoFood",
    targetImg: restaurant,
    rating: { icon: FaRegStar, rating: 4 },
    text: "This vendor is an amazing",
    date: "2023-12-25",
  },
  {
    id: 4,
    customerImg: profile,
    name: "Anastasia",
    since: "2022-12-07",
    title: "RiccoFood",
    targetImg: restaurant,
    rating: { icon: FaRegStar, rating: 4 },
    text: "This vendor is an amazing",
    date: "2023-12-25",
  },
  {
    id: 5,
    customerImg: profile,
    name: "Anastasia",
    since: "2022-12-07",
    title: "RiccoFood",
    targetImg: restaurant,
    rating: { icon: FaRegStar, rating: 4 },
    text: "This vendor is an amazing",
    date: "2023-12-25",
  },
];

const MyFeeds = () => {
  return (
    <div className="my-feeds-wrapper">
      <h2>My Feeds</h2>
      <div className="my-feeds-header">
        <input type="text" placeholder="Search your feeds here..." />
        <div className="my-feeds-view-switchers">
          <button className="view-btn">
            <TbLayoutList />
          </button>
          <button className="view-btn">
            <IoGridOutline />
          </button>
        </div>
      </div>
      <div className="my-feeds-content">
        {fakeFeed.map((feed) => (
          <div className="each-feed">
            <FeedTemplate feedType={feed} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignSelf: "flex-end" }}>
        <Pagination num={3} />
      </div>
    </div>
  );
};
export default MyFeeds;
