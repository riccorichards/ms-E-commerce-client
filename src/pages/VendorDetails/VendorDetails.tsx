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
      dispatch(getVendorFeeds({ id, amount: 3 }));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (vendor) {
      dispatch(getVendorFeeds({ id: vendor._id, amount: 3 }));
    }
  }, [vendor, dispatch]);

  const target = specVendor || vendor;

  useEffect(() => {
    if (target?.address) {
      if (vendor) {
        dispatch(getVendorCoords(vendor.address));
      } else if (specVendor) {
        dispatch(getVendorCoords(specVendor.address));
      }
    }
  }, [specVendor, vendor, dispatch, target?.address]);

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
    <main className="vendor-details">
      <section className="vendor-introduction">
        <VendorInfo
          isCustomer={Boolean(id)}
          id={id}
          setIsReservetion={setIsReservetion}
        />
        <VendorGallery />
        {isReservation && (
          <ReservationModal setIsReservetion={setIsReservetion} />
        )}
      </section>
      <VendorPopularFood />
      <VendorTeam />
      <section className="vendor-details-feedback-wrapper">
        <h2
          style={{ borderBottom: "2px solid orangered", width: "fit-content" }}
        >
          Our Customers feedbacks
        </h2>
        <main className="vendor-details-feedback">
          {vendorFeeds && vendorFeeds.length > 0 ? (
            <section
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: vendorFeeds.length > 2 ? "space-between" : "",
                gap: vendorFeeds.length <= 2 ? "15px" : "",
                width: "100%",
                position: "relative",
              }}
            >
              {vendorFeeds.slice(0, 3).map((feed) => (
                <FeedTemplate feed={feed} key={feed.feedId} />
              ))}
              {id && <button onClick={handleMore}>See more</button>}
            </section>
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
              <h3>Not added feedback Yet!!!</h3>
            </section>
          )}
        </main>
      </section>
      <section>
        {0 && target?.address && letShowMap && (
          <GoogleMapApis
            coords={coords}
            name={target?.name}
            image={target?.url}
            rating={target?.rating}
          />
        )}
      </section>
    </main>
  );
};

export default VendorDetails;
