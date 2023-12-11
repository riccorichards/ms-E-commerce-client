import React, { FC } from "react";
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

type SocialMediaType = {
  id: number;
  icon: React.ElementType;
};
type VendorType = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  image: string;
  workingHrs: string;
  socialMedia: SocialMediaType[];
  rating: number;
};
const VendorTemplate: FC<{ vendor: VendorType }> = ({ vendor }) => {
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
          to={`/vendors${vendor.id}`}
          style={{ color: "inherit", textDecoration: "none" }}
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
          <MdOutlineLocationOn /> {vendor.address}
        </div>
        <div className="each-vendor-the-rest-items">
          <MdAccessTime />
          {vendor.workingHrs}
        </div>
        <div className="each-vendor-the-rest-items">
          {<RatingCalculation rating={rating} />}
        </div>
        <div className="each-vendor-the-rest-items-arr">
          {vendor.socialMedia.map((sm) => (
            <div className="the-rest-items-social" key={sm.id}>
              {<sm.icon />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorTemplate;
