import "./VendorGallery.scss";
import { SiAmazoncloudwatch } from "react-icons/si";
import { FaRegEye } from "react-icons/fa";

const img1 =
  "https://i.pinimg.com/564x/60/34/c5/6034c58ebb7e993f283b7e600b442c2b.jpg";
const img2 =
  "https://i.pinimg.com/564x/88/90/da/8890da089c9e39cecb82b71c3e9b0cee.jpg";
const img3 =
  "https://i.pinimg.com/564x/76/19/9e/76199ed6bbc20bd7a44b7f41dcc53feb.jpg";

const VendorGallery = () => {
  return (
    <div className="verdor-gallery">
      <h2>Gallery</h2>
      <div className="gallery-wrapper">
        <div className="first-one-wrapper">
          <div className="hover-btn-wrapper">
            <button>
              <SiAmazoncloudwatch />
            </button>
            <button>
              <FaRegEye />
            </button>
          </div>
          <img src={img1} alt="img1" className="first-one" />
        </div>
        <div className="other-images">
          <div className="left-image-wrapper">
            <img src={img2} alt="img1" className="left-image" />
          </div>
          <div className="right-image-wrapper">
            <img src={img3} alt="img1" className="right-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorGallery;
