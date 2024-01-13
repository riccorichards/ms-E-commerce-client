import RatingCalculation from "../../../components/RatingCalculation";
import ImageWraper from "./../../../components/ImageWraper";
import { FaInfoCircle, FaRegStar } from "react-icons/fa";
import "./VendorInfo.scss";
import { FC } from "react";
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
import { VendorType } from "../../../redux/type.slice";
import { Link, useNavigate } from "react-router-dom";

const VendorInfo: FC<{
  vendor: VendorType | null;
  isCustomer: boolean;
  id: string | undefined;
  setIsReservetion: (val: boolean) => void;
}> = ({ vendor, isCustomer, id, setIsReservetion }) => {
  const navigate = useNavigate();
  if (!vendor) return null;
  const rating = {
    rating: vendor.rating,
    icon: FaRegStar,
  };

  return (
    <div className="vendor-info-wrapper">
      <div className="vendor-info-header">
        <ImageWraper image={vendor.image} size="75px" />
        <div className="vendor-info-name">
          <h2>{vendor.name}</h2>
          {<RatingCalculation rating={rating} />}
        </div>
      </div>
      <div className="vendor-additional-info">
        <div className="vendor-info-about">
          <span style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <FaInfoCircle /> <span>{vendor.about}</span>
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <MdAccessTime />
            {vendor.workingHrs &&
              `${vendor?.workingHrs.workingDays}-${vendor?.workingHrs.weekend}`}
          </span>
        </div>
        <div>
          <h2>Our Social Medias</h2>
          {vendor.socialMedia &&
            vendor.socialMedia.map((url) =>
              url.title === "facebook" ? (
                <FaFacebookSquare key={url.title} />
              ) : url.title === "twitter" ? (
                <FaTwitterSquare key={url.title} />
              ) : (
                <FaInstagramSquare key={url.title} />
              )
            )}
        </div>
        <div className="vendor-info-contactus">
          <h2>Contact Us</h2>
          <span style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <MdOutlineLocalPhone /> {vendor.phone}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <MdAlternateEmail /> {vendor.email}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <MdOutlineLocationOn /> {vendor.address}
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
      </div>
    </div>
  );
};

export default VendorInfo;
