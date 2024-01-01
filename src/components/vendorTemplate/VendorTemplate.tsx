import { FC } from "react";
import "./VendorTemplate.scss";
import { IoMdRestaurant } from "react-icons/io";
import {
  MdAlternateEmail,
  MdOutlineLocalPhone,
  MdOutlineLocationOn,
  MdAccessTime,
} from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import RatingCalculation from "../RatingCalculation";
import { Link } from "react-router-dom";
import { VendorListType } from "../../redux/type.slice";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const VendorTemplate: FC<{ vendor: VendorListType }> = ({ vendor }) => {
  const rating = {
    icon: FaRegStar,
    rating: vendor.rating,
  };
  return (
    <div className="each-vendor">
      <div className="each-vendor-image-wrapper">
        <img src={vendor.image} alt="vendor" className="each-vendor-image" />
      </div>
      <div className="each-vendor-the-rest">
        <Link
          to={`/customer/vendors/${vendor._id}`}
          style={{
            color: "#fff",
          }}
        >
          <div className="each-vendor-the-rest-items">
            <IoMdRestaurant /> {vendor.name}
          </div>
        </Link>
        <div className="each-vendor-the-rest-items">
          <MdAlternateEmail /> {vendor.email}
        </div>
        <div className="each-vendor-the-rest-items">
          <MdOutlineLocalPhone /> {vendor.phone}
        </div>
        <div className="each-vendor-the-rest-items">
          <MdOutlineLocationOn />{" "}
          {`${vendor.address.country}, ${vendor.address.city}, ${vendor.address.street}`}
        </div>
        <div className="each-vendor-the-rest-items">
          <MdAccessTime />
          {`${vendor.workingHrs.workingDays}-${vendor.workingHrs.weekend}`}
        </div>
        <div className="each-vendor-the-rest-items">
          {<RatingCalculation rating={rating} />}
        </div>
        <div className="each-vendor-the-rest-items-arr">
          {vendor.socialUrls &&
            vendor.socialUrls.map((sm) => (
              <div className="the-rest-items-social" key={sm.title}>
                {sm.title === "facebook" ? (
                  <FaFacebookSquare />
                ) : sm.title === "twitter" ? (
                  <FaTwitterSquare />
                ) : (
                  <FaInstagramSquare />
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default VendorTemplate;
