import React, { FC, useState } from "react";
import "./FoodCard.scss";
import { MdOutlineFavorite, MdFavoriteBorder } from "react-icons/md";
import { IoMdAdd, IoMdTime } from "react-icons/io";
import { ProductType } from "../../redux/type.slice";
import { FiEdit2 } from "react-icons/fi";
import { IoSend } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { IoAdd } from "react-icons/io5";
import ImageWraper from "./../ImageWraper";

const FoodCard: FC<{
  food: ProductType;
  wishlistToggle: (productId: number) => void;
  isPicked: boolean;
  addFoodToCart: (productId: number) => void;
  leaveFeed: (
    feedback: string,
    productId: number,
    foodImg: string,
    targetTitle: string
  ) => void;
}> = ({ food, wishlistToggle, isPicked, addFoodToCart, leaveFeed }) => {
  const [isFeed, setIsFeed] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isFoodsFeed, setIsFoodsFeed] = useState<boolean>(false);
  const handleSendFeedProcess = (
    foodId: number,
    foodImg: string,
    targetTitle: string
  ) => {
    leaveFeed(feedback || "", foodId, foodImg, targetTitle);
    setFeedback(null);
    setIsFeed(false);
  };

  return (
    <div className="food-card-wrapper">
      <div className="leave-feedback" onClick={() => setIsFeed(!isFeed)}>
        <FiEdit2 />
      </div>
      {isFeed && (
        <div className="food-feedback-wrapper">
          {isFoodsFeed ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                height: "10vh",
                overflowY: "auto",
                width: "100%",
              }}
            >
              {food.feedbacks && food.feedbacks.length > 0 ? (
                food.feedbacks.map((feed) => (
                  <React.Fragment key={feed.id}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "5px",
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          border: "3px solid #008080",
                          display: "flex",
                          borderRadius: "5px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <ImageWraper image={feed.authorImg} size="20px" />
                      </div>
                      <p style={{ fontSize: "12px" }}>"{feed.review}"</p>
                    </div>
                  </React.Fragment>
                ))
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <h5>Not found Feedback</h5>
                </div>
              )}
            </div>
          ) : (
            <textarea
              placeholder="3-150 symbols"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setFeedback(e.target.value)
              }
              rows={4}
            />
          )}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "5px",
              position: "absolute",
              left: "101.5%",
            }}
          >
            <button
              onClick={() =>
                handleSendFeedProcess(food.id, food.image, food.title)
              }
            >
              <IoSend />
            </button>
            <button
              onClick={() =>
                leaveFeed(feedback || "", food.id, food.image, food.title)
              }
              style={{ backgroundColor: isFoodsFeed ? "" : "orangered" }}
            >
              <IoAdd onClick={() => setIsFoodsFeed(false)} />
            </button>
            <button
              onClick={() =>
                leaveFeed(feedback || "", food.id, food.image, food.title)
              }
              style={{
                backgroundColor: isFoodsFeed ? "rgb(255, 179, 47)" : "",
              }}
            >
              <VscFeedback onClick={() => setIsFoodsFeed(true)} />
            </button>
          </div>
        </div>
      )}
      <div className="food-image-wrapper">
        <ImageWraper image={food.image} size="100%" nonCircle />
      </div>
      <div className="food-content-wrapper">
        <div className="food-card-header">
          <h4>{food.title}</h4>
          <div className="food-prep-duration">
            <IoMdTime />
            <span style={{ fontWeight: "600" }}>25 min</span>
          </div>
        </div>
        <p>{food.desc}</p>
      </div>
      <div className="shopping-option">
        <div className="price-wrapper">
          <span className="price-header">Price</span>
          <span
            style={{ fontWeight: "bold", fontSize: "24px" }}
          >{`$ ${food.price}`}</span>
        </div>
        <div className="food-action-wrapper">
          <div
            className="add-to-wishlist"
            onClick={() => wishlistToggle(food.id)}
          >
            {isPicked ? <MdOutlineFavorite /> : <MdFavoriteBorder />}
          </div>
          <div
            className="add-to-cart-wrapper"
            onClick={() => addFoodToCart(food.id)}
          >
            <div className="add-to-cart">
              <span>Add to Cart</span>
              <div className="add-to-cart-icon">
                <IoMdAdd />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FoodCard;
