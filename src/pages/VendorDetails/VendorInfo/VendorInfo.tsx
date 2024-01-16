import RatingCalculation from "../../../components/RatingCalculation";
import ImageWraper from "./../../../components/ImageWraper";
import { FaInfoCircle, FaRegStar } from "react-icons/fa";
import "./VendorInfo.scss";
import React, { FC, useEffect, useState } from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

import {
  MdAlternateEmail,
  MdOutlineLocalPhone,
  MdOutlineLocationOn,
  MdAccessTime,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { addFeedback } from "../../../redux/appCall/AuthAppCall";
import { NewFeedbackInputType } from "../../../redux/type.slice";

const VendorInfo: FC<{
  isCustomer: boolean;
  id: string | undefined;
  setIsReservetion: (val: boolean) => void;
}> = ({ isCustomer, id, setIsReservetion }) => {
  const navigate = useNavigate();
  const { vendor, specVendor } = useAppSelector((s) => s.vendor);
  const { customer } = useAppSelector((s) => s.customer);
  const [isFeedback, setIsFeedback] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string>("");
  const [feedbackError, setFeedbackError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const target = vendor || specVendor;

  useEffect(() => {
    if (feedback.trim().length > 3 && feedback.trim().length < 150) {
      setFeedbackError(null);
    }
  }, [feedback]);

  if (!target) return null;

  const rating = {
    rating: target.rating,
    icon: FaRegStar,
  };

  const handleFeedback = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback(e.target.value);
  };

  const sendFeedback = () => {
    if (feedback.trim().length > 3 && feedback.trim().length < 150) {
      if (customer) {
        const newFeedback: NewFeedbackInputType = {
          userId: customer._id,
          author: customer.username,
          authorImg: customer.image || "",
          targetImg: target.image,
          targetTitle: target.name,
          address: "vendor",
          vendorRating: target.rating,
          forVendorId: target._id,
          review: feedback,
        };

        dispatch(addFeedback(newFeedback));
        setIsFeedback(false);
      }
    } else {
      setFeedbackError("Feedback should be between 3 - 150 symbols");
    }
  };

  return (
    <div className="vendor-info-wrapper">
      <div className="vendor-info-header">
        <ImageWraper image={target.image} size="75px" />
        <div className="vendor-info-name">
          <h2>{target.name}</h2>
          <RatingCalculation rating={rating} />
        </div>
      </div>
      <div className="vendor-additional-info">
        <div className="vendor-info-about">
          <span style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <FaInfoCircle /> <span>{target.about ? target.about : "N/A"}</span>
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <MdAccessTime />
            {target.workingHrs
              ? `${target.workingHrs.workingDays}-${target.workingHrs.weekend}`
              : "N/A"}
          </span>
        </div>
        <div>
          <h2>Our Social Medias</h2>
          {target.socialMedia.length < 0
            ? target.socialMedia.map((url) =>
                url.title === "facebook" ? (
                  <FaFacebookSquare key={url.title} />
                ) : url.title === "twitter" ? (
                  <FaTwitterSquare key={url.title} />
                ) : (
                  <FaInstagramSquare key={url.title} />
                )
              )
            : "N/A"}
        </div>
        <div className="vendor-info-contactus">
          <h2>Contact Us</h2>
          <span style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <MdOutlineLocalPhone /> {target.phone}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <MdAlternateEmail /> {target.email}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <MdOutlineLocationOn /> {target.address}
          </span>
        </div>
      </div>
      <div className="vendor-info-action-btns">
        {isCustomer ? (
          <Link
            to={`/customer/vendors/${id}/menu`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <button className="vendor-info-action-btn">Order Now</button>
          </Link>
        ) : (
          <button
            className="vendor-info-action-btn"
            onClick={() => navigate("/vendor/menu")}
          >
            Menu
          </button>
        )}
        <button
          className="vendor-info-action-btn"
          onClick={() => setIsReservetion(true)}
        >
          Reservation
        </button>
        {isCustomer && (
          <button
            className="vendor-info-action-btn"
            onClick={() => setIsFeedback(true)}
          >
            Add Feedback
          </button>
        )}
        {isFeedback && (
          <div className="create-new-feedback-for-vendor">
            <input
              type="text"
              placeholder="3-150 symbols"
              onChange={handleFeedback}
            />
            {feedbackError && <p>{feedbackError}</p>}
            <button onClick={sendFeedback}>Send</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorInfo;
