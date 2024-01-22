import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import "./VendorInfo.scss";
import { MdAlternateEmail } from "react-icons/md";
import ImageWraper from "./../../../../components/ImageWraper";
import RatingCalculation from "../../../../components/RatingCalculation";
import { FaRegStar } from "react-icons/fa";
import { useAppSelector } from "../../../../redux/hook";
import { useState } from "react";

const VendorInfo = () => {
  const { vendorForOrder } = useAppSelector((state) => state.shopping);
  const [vendorIndex, setVendorIndex] = useState<number>(0);

  if (vendorForOrder.length === 0) return null;

  const vendor = vendorForOrder[vendorIndex];

  const handleVendorDisplay = (i: number) => {
    setVendorIndex(i);
  };

  return (
    <section className="current-order-vendor-info">
      <div className="current-order-vendor-info-header">
        <div>
          <ImageWraper image={vendor.image} size="75px" />
        </div>
        <div className="current-order-vendor-title">
          <h2>{vendor.name}</h2>
          {
            <RatingCalculation
              rating={{ icon: FaRegStar, rating: vendor.rating }}
            />
          }
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          width: "80%",
        }}
      >
        <div style={{ display: "flex", gap: "15px" }}>
          <div>
            <IoCallOutline />
          </div>
          <span>{vendor.phone}</span>
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <div>
            <MdAlternateEmail />
          </div>
          <span style={{ wordBreak: "break-all" }}>{vendor.email}</span>
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <div>
            <IoLocationOutline />
          </div>
          <span>{vendor.address}</span>
        </div>
      </div>
      <div className="current-order-vendor-switcher-wrapper">
        {vendorForOrder.map((_, i) => (
          <div
            className="vendor-info-switcher"
            key={i}
            onClick={() => handleVendorDisplay(i)}
            style={{ backgroundColor: i === vendorIndex ? "orangered" : "" }}
          />
        ))}
      </div>
    </section>
  );
};

export default VendorInfo;
