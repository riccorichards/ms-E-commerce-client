import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hook";
import { getVendorFeeds } from "../../../../../../redux/appCall/VendorAppCall";
import ImageWraper from "../../../../../../components/ImageWraper";
import "./LastFeeds.scss";
import { Link } from "react-router-dom";

const LastFeeds = () => {
  const dispatch = useAppDispatch();
  const { vendorFeeds, vendor } = useAppSelector((state) => state.vendor);

  useEffect(() => {
    dispatch(getVendorFeeds(20));
  }, [dispatch]);

  if (!vendorFeeds || !vendor) return null;
  function formatterTime(str: string) {
    return str.split("T")[0];
  }
  return (
    <section className="last-feed-wrapper-vendor-dashboard">
      {vendorFeeds.length > 0 ? (
        vendorFeeds.map((feed) => (
          <Link
            to="/vendor/settings/customer-feeds"
            style={{ color: "inherit", textDecoration: "none" }}
            key={feed.feedId}
          >
            <div className="last-feed-vendor-dashboard">
              <div style={{ display: "flex", gap: "5px" }}>
                <div>
                  <ImageWraper image={feed.authorImg} size="35px" />
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "60%",
                    gap: "5px",
                    flexDirection: "column",
                    flex: "2",
                  }}
                >
                  <h5>{feed.author}</h5>
                  <p
                    style={{
                      fontSize: "12px",
                      wordBreak: "break-word",
                    }}
                  >
                    "{feed.review.slice(0, 50) + "..."}"
                  </p>
                </div>
              </div>
              <div
                style={{ display: "flex", gap: "5px", alignItems: "center" }}
              >
                <div>
                  <ImageWraper image={feed.targetImg} size="35px" />
                </div>
                <h5 style={{ width: "60px" }}>{feed.targetTitle}</h5>
              </div>
              <span className="last-feed-id-wrapper">{`#000${feed.feedId}`}</span>
              <span className="last-feed-date-wrapper">
                {formatterTime(feed.createdAt)}
              </span>
            </div>
          </Link>
        ))
      ) : (
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <h5>
            <span style={{ color: "orangered" }}>{vendor.name}</span> does not
            has feedbacks yet!{" "}
          </h5>
        </section>
      )}
    </section>
  );
};

export default LastFeeds;
