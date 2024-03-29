import "./DeliveryPerson.scss";
import ImageWraper from "../../../../components/ImageWraper";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import React, { useContext, useEffect, useState } from "react";
import { addFeedback } from "../../../../redux/appCall/AuthAppCall";
import { NewFeedbackInputType } from "../../../../redux/type.slice";
import { FiEdit } from "react-icons/fi";
import SnackBarContext from "../../../../components/SnackBarContext";
import Utils from "../../../../../src/utils/utils";

const DeliveryPerson = () => {
  const { deliverymanForOrder } = useAppSelector((state) => state.shopping);
  const { customer } = useAppSelector((state) => state.customer);
  const [feedback, setFeedback] = useState<string>("");
  const [isfeedback, setIsFeedback] = useState<boolean>(false);
  const [feedErrorWrapper, setFeedErrorWrapper] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (feedback.trim().length > 3) {
      setFeedErrorWrapper(null);
    }
  }, [feedback]);

  const getSnackContext = useContext(SnackBarContext);
  const setType = getSnackContext?.setType;
  const setRunSnackBar = getSnackContext?.setRunSnackBar;

  if (!deliverymanForOrder) return null;

  const handlefeedback = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
  };

  const handleSendFeedback = () => {
    if (customer && deliverymanForOrder) {
      if (feedback.trim().length > 3 && feedback.trim().length < 150) {
        const newFeedback: NewFeedbackInputType = {
          userId: customer._id,
          author: customer.username,
          authorImg: customer.image || "",
          targetImg: deliverymanForOrder.image,
          targetTitle: deliverymanForOrder.name,
          address: "deliveryman",
          targetId: deliverymanForOrder.id,
          review: feedback,
        };
        dispatch(addFeedback(newFeedback));
        setIsFeedback(false);
        if (setType && setRunSnackBar) {
          setType("success");
          setRunSnackBar(true);
        }
      } else {
        setFeedErrorWrapper("Feedback should be between ==> 3-150 chars");
      }
    }
  };

  return (
    <section className="deliveryman-info-wrapper">
      <ImageWraper image={deliverymanForOrder.image} size="100px" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>{deliverymanForOrder.name}</h2>
        <span>{Utils.dateFormatter(deliverymanForOrder.createdAt).date}</span>
      </div>
      <div className="leave-feedback-to-deliveryman">
        <button
          className="open-leave-feedback-to-deliveryman-btn"
          onClick={() => setIsFeedback((prev) => !prev)}
        >
          <FiEdit />
        </button>
        {isfeedback && (
          <div className="create-new-feed-for-deliveryman">
            <textarea
              name=""
              id=""
              cols={5}
              rows={5}
              onChange={handlefeedback}
              placeholder="3-150 symbols"
            />
            {feedErrorWrapper && <p>{feedErrorWrapper}</p>}
            <button
              className="send-create-new-feed-for-deliveryman-btn"
              onClick={handleSendFeedback}
            >
              Send
            </button>
          </div>
        )}
      </div>
      <div className="status-wrapper">Delivery Guy</div>
      <div className="deliveryman-contact-wrapper">
        <div className="deliveryman-info-phone">
          <IoCallOutline />
          <span>+95 155 322 145</span>
        </div>
        <div className="deliveryman-info-address">
          <div>
            <IoLocationOutline />
          </div>
          <span>{deliverymanForOrder.currentAddress}</span>
        </div>
      </div>
      <div className="status-wrapper">Vendors</div>
    </section>
  );
};

export default DeliveryPerson;
