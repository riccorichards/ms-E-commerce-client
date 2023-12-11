import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import "./VendorInfo.scss";
import { MdAlternateEmail } from "react-icons/md";
import ImageWraper from "./../../../../components/ImageWraper";
import RatingCalculation from "../../../../components/RatingCalculation";
import { FaRegStar } from "react-icons/fa";

const image =
  "https://i.pinimg.com/564x/04/be/f6/04bef61884051d5695ad0d2ce37632f2.jpg";
const VendorInfo = () => {
  const rating = {
    icon: FaRegStar,
    rating: 5,
  };
  return (
    <div className="current-order-vendor-info">
      <div className="current-order-vendor-info-header">
        <ImageWraper image={image} size="75px" />
        <div className="current-order-vendor-title">
          <h2>RiccoFood</h2>
          {<RatingCalculation rating={rating} />}
        </div>
      </div>
      <div className="current-order-vendor-header-additional-info">
        <div className="current-vendor-info-phone">
          <IoCallOutline />
          <span>+95 155 322 145</span>
        </div>
        <div className="current-vendor-info-email">
          <MdAlternateEmail />
          <span>ricco@richards.com</span>
        </div>
        <div className="current-vendor-info-address">
          <IoLocationOutline />
          <span>St. peterson N165</span>
        </div>
      </div>
    </div>
  );
};

export default VendorInfo;
