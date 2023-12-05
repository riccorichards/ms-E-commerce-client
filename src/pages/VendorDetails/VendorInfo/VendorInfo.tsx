import RatingCalculation from "../../../components/RatingCalculation";
import ImageWraper from "./../../../components/ImageWraper";
import { FaRegStar } from "react-icons/fa";
import "./VendorInfo.scss";
import { FC } from "react";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoMdRestaurant } from "react-icons/io";
import {
  MdAlternateEmail,
  MdOutlineLocalPhone,
  MdOutlineLocationOn,
  MdAccessTime,
} from "react-icons/md";

type SocialMediaType = {
  id: number;
  icon: React.ElementType;
};
type VendorType = {
  id: number;
  name: string;
  email: string;
  about: string;
  phone: string;
  address: string;
  service: string;
  image: string;
  workingHrs: string;
  socialMedia: SocialMediaType[];
  rating: number;
};
const VendorInfo: FC<{ vendor: VendorType }> = ({ vendor }) => {
  const rating = {
    rating: vendor.rating,
    icon: FaRegStar,
  };

  return (
    <div className="vendor-info-wrapper">
      <div className="vendor-info-header">
        <ImageWraper image={vendor.image} size="75px" />
        <div className="vendor-info-name">
          <h2>RiccoFood</h2>
          {<RatingCalculation rating={rating} />}
        </div>
      </div>
      <div className="vendor-additional-info">
        <div className="vendor-info-about">
          <span style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <IoMdRestaurant /> {vendor.about}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <MdAccessTime />
            {vendor.workingHrs}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>Services</h2>
          <div className="vendor-service-wrapper">
            <span style={{ fontWeight: "900" }}>
              <MdMiscellaneousServices />
            </span>{" "}
            <div className="service">{vendor.service}</div>
          </div>
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
        <button className="vendor-info-action-btn">Order Now</button>
        <button className="vendor-info-action-btn">Menu</button>
        <button className="vendor-info-action-btn">Reservation</button>
      </div>
    </div>
  );
};

export default VendorInfo;
