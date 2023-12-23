import { FaRegStar } from "react-icons/fa";
import ImageWraper from "./../../../../../ImageWraper";
import RatingCalculation from "../../../../../RatingCalculation";
import "./LinerView.scss";
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

const LinerView = () => {
  return (
    <div className="liner-view-wrapper">
      {fakeFeed.map((feed) => (
        <div className="liner-view" key={feed.id}>
          <span
            style={{ fontSize: "18px", color: "#008080" }}
          >{`#${feed.id}`}</span>
          <ImageWraper image={feed.customerImg} size="45px" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3>{feed.name}</h3>
            <span>{feed.since}</span>
          </div>
          <p>{feed.text}</p>
          <ImageWraper image={feed.targetImg} size="45px" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3>{feed.title}</h3>
            <span>{<RatingCalculation rating={feed.rating} />}</span>
          </div>
          <span>{feed.date}</span>
        </div>
      ))}
      <Pagination num={5} />
    </div>
  );
};

export default LinerView;
