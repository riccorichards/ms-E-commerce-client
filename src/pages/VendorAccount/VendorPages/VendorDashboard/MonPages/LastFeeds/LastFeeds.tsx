import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hook";
import { getVendorSpecData } from "../../../../../../redux/appCall/VendorAppCall";
import ImageWraper from "../../../../../../components/ImageWraper";
import "./LastFeeds.scss";

const LastFeeds = () => {
  const dispatch = useAppDispatch();
  const { vendorFeeds } = useAppSelector((state) => state.vendor);

  useEffect(() => {
    dispatch(getVendorSpecData("feeds"));
  }, []); //eslint-disable-line

  if (!vendorFeeds) return null;

  function formatterTime(str: string) {
    return str.split("T")[0];
  }
  return (
    <div className="last-feed-wrapper-vendor-dashboard">
      {vendorFeeds.map((feed) => (
        <div className="last-feed-vendor-dashboard" key={feed.feedId}>
          <div style={{ display: "flex", gap: "5px" }}>
            <div>
              <ImageWraper image={feed.authorImg} size="35px" />
            </div>
            <div
              style={{ display: "flex", gap: "5px", flexDirection: "column" }}
            >
              <h5>{feed.author}</h5>
              <p style={{ fontSize: "14px" }}>"{feed.review}"</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <ImageWraper image={feed.targetImg} size="35px" />
            <h5>{feed.targetTitle}</h5>
          </div>
          <span className="last-feed-id-wrapper">{`#000${feed.feedId}`}</span>
          <span className="last-feed-date-wrapper">
            {formatterTime(feed.createdAt)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default LastFeeds;
