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
  getVendorCoords,
  getVendorSpecData,
} from "../../redux/appCall/VendorAppCall";
import ReservationModal from "./VendorInfo/ReservationModal/ReservationModal";
import FeedTemplate from "../../components/FeedTemplate/FeedTemplate";
import GoogleMapApis from "../../components/GoogleMapApis/GoogleMapApis";

const VendorDetails = () => {
  const dispatch = useAppDispatch();
  const { specVendor, vendor, vendorFeeds, coords } = useAppSelector(
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

  useEffect(() => {
    if (vendor) {
      dispatch(getVendorCoords(vendor.address));
    } else if (specVendor) {
      dispatch(getVendorCoords(specVendor.address));
    }
  }, [specVendor, vendor, dispatch]);

  return (
    <div className="vendor-details">
      <div className="vendor-introduction">
        <VendorInfo
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
        <h2
          style={{ borderBottom: "2px solid orangered", width: "fit-content" }}
        >
          Our Customers feedbacks
        </h2>
        <div className="vendor-details-feedback">
          {targetFeedWrapper && targetFeedWrapper.length > 0 ? (
            targetFeedWrapper.map((feed) => (
              <FeedTemplate feed={feed} key={feed.feedId} />
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
              <h3>Not added feedback Yet!!!</h3>
            </div>
          )}
        </div>
      </div>
      <div>
        <GoogleMapApis coords={coords} />
      </div>
    </div>
  );
};

export default VendorDetails;
