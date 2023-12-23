import { FaRegStar } from "react-icons/fa";
import "./GridView.scss";
import FeedTemplate from "../../../../../FeedTemplate/FeedTemplate";
import Pagination from "../../../../../pagination/Pagination";

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

const GridView = () => {
  return (
    <div className="feeds-grid-view-wrapper">
      <div className="feeds-grid-view">
        {fakeFeed &&
          fakeFeed.map((feed) => (
            <FeedTemplate key={feed.id} feedType={feed} />
          ))}
      </div>
      <Pagination num={3} />
    </div>
  );
};

export default GridView;
