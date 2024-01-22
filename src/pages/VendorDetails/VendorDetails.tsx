import "./VendorDetails.scss";
import VendorInfo from "./VendorInfo/VendorInfo";
import VendorGallery from "./VendorGallery/VendorGallery";
import VendorPopularFood from "./VendorPopularFood/VendorPopularFood";
import VendorTeam from "./VendorTeam/VendorTeam";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  getSpecVendor,
  getVendorCoords,
  getVendorFeeds,
} from "../../redux/appCall/VendorAppCall";
import ReservationModal from "./VendorInfo/ReservationModal/ReservationModal";
import FeedTemplate from "../../components/FeedTemplate/FeedTemplate";
import GoogleMapApis from "../../components/GoogleMapApis/GoogleMapApis";

const VendorDetails = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [letShowMap, setLetShowMap] = useState<boolean>(false);
  const { specVendor, vendor, vendorFeeds, coords } = useAppSelector(
    (state) => state.vendor
  );
  const { id } = useParams();
  const [isReservation, setIsReservetion] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      dispatch(getSpecVendor(id));
    } else {
      dispatch(getVendorFeeds(3));
    }
  }, [id]); //eslint-disable-line

  const targetFeedWrapper = specVendor?.feeds || vendorFeeds;
  const target = specVendor || vendor;
  useEffect(() => {
    if (vendor) {
      dispatch(getVendorCoords(vendor.address));
    } else if (specVendor) {
      dispatch(getVendorCoords(specVendor.address));
    }
  }, [specVendor, vendor, dispatch]);

  const currentUrl = window.location.href;
  const splitedUrl = currentUrl.split("/");

  useEffect(() => {
    if (id) {
      if (splitedUrl[splitedUrl.length - 1] === id) {
        setLetShowMap(true);
      }
    } else if (vendor) {
      if (splitedUrl[splitedUrl.length - 1] === "home") {
        setLetShowMap(true);
      }
    }
  }, [id, currentUrl, vendor, splitedUrl]);

  const handleMore = () => {
    navigate(`/customer/vendors/${id}/feedbacks`);
  };
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                position: "relative",
              }}
            >
              {targetFeedWrapper.slice(0, 3).map((feed) => (
                <FeedTemplate feed={feed} key={feed.feedId} />
              ))}
              {id && <button onClick={handleMore}>See more</button>}
            </div>
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
        {letShowMap && (
          <GoogleMapApis
            coords={coords}
            name={target?.name}
            image={target?.image}
            rating={target?.rating}
          />
        )}
      </div>
    </div>
  );
};

export default VendorDetails;
