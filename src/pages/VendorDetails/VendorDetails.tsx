import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import "./VendorDetails.scss";
import VendorInfo from "./VendorInfo/VendorInfo";
import VendorGallery from "./VendorGallery/VendorGallery";
import VendorPopularFood from "./VendorPopularFood/VendorPopularFood";
import VendorFeeds from "./VendorFeeds/VendorFeeds";
import VendorTeam from "./VendorTeam/VendorTeam";

const fakeData = {
  id: 1,
  name: "RiccoFood",
  email: "ricco@gmail.com",
  about: "Cafe, Healthy Food, Beverages, Salad, Desserts",
  phone: "+995 555 555",
  service: "Delivery",
  address: "st. hopy park",
  image:
    "https://i.pinimg.com/564x/60/34/c5/6034c58ebb7e993f283b7e600b442c2b.jpg",
  workingHrs: "07:30-23:30",
  rating: 5,
  socialMedia: [
    {
      id: 1,
      icon: FaTwitterSquare,
    },
    {
      id: 2,
      icon: FaFacebookSquare,
    },
  ],
};

const VendorDetails = () => {
  return (
    <div className="vendor-details">
      <div className="vendor-introduction">
        <VendorInfo vendor={fakeData} />
        <VendorGallery />
      </div>
      <VendorPopularFood />
      <VendorTeam />
      <VendorFeeds />
    </div>
  );
};

export default VendorDetails;
