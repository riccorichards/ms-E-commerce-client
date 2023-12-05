import "./VendorFeeds.scss";
import ImageWraper from "./../../../components/ImageWraper";
import { FaRegStar } from "react-icons/fa";
import RatingCalculation from "../../../components/RatingCalculation";

const user =
  "https://i.pinimg.com/564x/29/a1/58/29a158734c206eede9b9ca36cf53a18a.jpg";

const fake = [
  {
    id: 1,
    image: user,
    username: "samantha",
    rating: 3,
    review:   '"the best restaurant..."',
    date: "02-19",
  },
  {
    id: 2,
    image: user,
    username: "samantha",
    rating: 5,
    review: "the best restaurant...",
    date: "02-19",
  },
  {
    id: 3,
    image: user,
    username: "samantha",
    rating: 4,
    review: "the best restaurant dfsdfsdf sdf ds fds fdsf dsf ds fdsf dsfd fds fdsf dsfds fs",
    date: "02-19",
  },
];

const VendorFeeds = () => {
  const rating = {
    icon: FaRegStar,
  };
  return (
    <div className="vendor-feeds-wrapper">
      <h1 style={{ borderBottom: "2px solid orangered", width: "fit-content" }}>
        Our clients say!!!
      </h1>
      <div className="feed-wrapper">
        {fake.map((review) => (
          <div className="vendor-feed">
            <div className="feed-header">
              <div className="feed-header-customer">
                <ImageWraper image={review.image} size="55px" />
                <h2>{review.username}</h2>
              </div>
              <span>{review.date}</span>
            </div>
            <span style={{ display: "flex" }}>
              <RatingCalculation
                rating={{ ...rating, rating: review.rating }}
              />
            </span>
            <span>{review.review}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorFeeds;
