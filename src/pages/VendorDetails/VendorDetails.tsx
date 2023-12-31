import "./VendorDetails.scss";
import VendorInfo from "./VendorInfo/VendorInfo";
import VendorGallery from "./VendorGallery/VendorGallery";
import VendorPopularFood from "./VendorPopularFood/VendorPopularFood";
import VendorTeam from "./VendorTeam/VendorTeam";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  getSpecVendor,
  getVendorSpecData,
} from "../../redux/appCall/VendorAppCall";
import ReservationModal from "./VendorInfo/ReservationModal/ReservationModal";
import FeedTemplate from "../../components/FeedTemplate/FeedTemplate";

const VendorDetails = () => {
  const dispatch = useAppDispatch();
  const { specVendor, vendor, vendorFeeds } = useAppSelector(
    (state) => state.vendor
  );
  const { id } = useParams();
  const [isReservation, setIsReservetion] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      dispatch(getSpecVendor(id));
    } else {
      dispatch(getVendorSpecData("feeds"));
    }
  }, [id]); //eslint-disable-line

  const targetFeedWrapper = specVendor?.feeds || vendorFeeds;

  return (
    <div className="vendor-details">
      <div className="vendor-introduction">
        <VendorInfo
          vendor={specVendor || vendor}
          isCustomer={Boolean(id)}
          id={id}
          setIsReservetion={setIsReservetion}
        />
        <VendorGallery />
        {isReservation && (
          <ReservationModal setIsReservetion={setIsReservetion} />
        )}
      </div>
      <VendorPopularFood />
      <VendorTeam />
      <div className="vendor-details-feedback-wrapper">
        <h1
          style={{ borderBottom: "2px solid orangered", width: "fit-content" }}
        >
          Our Customers feedbacks
        </h1>
        <div className="vendor-details-feedback">
          {targetFeedWrapper &&
            targetFeedWrapper.map((feed) => (
              <FeedTemplate feed={feed} key={feed.feedId} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;
