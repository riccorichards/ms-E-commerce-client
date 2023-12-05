import VendorTemplate from "../../components/vendorTemplate/VendorTemplate";
import "./VendorList.scss";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

const fakeData = [
  {
    id: 1,
    name: "RiccoFood",
    email: "ricco@gmail.com",
    phone: "+995 555 555",
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
  },
];

const VendorList = () => {
  return (
    <div className="vendors-list">
      {fakeData.map((vendor) => (
        <VendorTemplate vendor={vendor} />
      ))}
    </div>
  );
};

export default VendorList;
