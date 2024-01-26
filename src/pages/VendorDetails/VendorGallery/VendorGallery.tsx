import "./VendorGallery.scss";
import { SiAmazoncloudwatch } from "react-icons/si";
import { FaRegEye } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { useEffect } from "react";
import { getVendorGallery } from "@redux/appCall/VendorAppCall";
import { useNavigate, useParams } from "react-router-dom";
import { CiImageOff } from "react-icons/ci";

const VendorGallery = () => {
  const dispatch = useAppDispatch();
  const { gallery, specVendor, vendor } = useAppSelector((s) => s.vendor);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      if (specVendor) {
        dispatch(getVendorGallery(specVendor._id));
      }
    } else if (vendor) {
      dispatch(getVendorGallery(vendor._id));
    }
  }, [dispatch, id, specVendor, vendor]);

  if (!gallery) return null;

  const handleNavigation = () => {
    if (id) {
      navigate(`/customer/vendors/${id}/gallery`);
    } else {
      navigate(`/vendor/settings/gallery`);
    }
  };
  return (
    <div className="verdor-gallery">
      <h2>Gallery</h2>
      {gallery.length > 0 ? (
        <div className="gallery-wrapper">
          <div className="first-one-wrapper">
            <div className="hover-btn-wrapper">
              <button onClick={handleNavigation}>
                <SiAmazoncloudwatch />
              </button>
              <button>
                <FaRegEye />
              </button>
            </div>
            <img src={gallery[0].url} alt="img1" className="first-one" />
          </div>
          <div className="other-images">
            <div className="left-image-wrapper">
              {gallery.length > 1 && (
                <img src={gallery[1].url} alt="img1" className="left-image" />
              )}
            </div>
            <div className="right-image-wrapper">
              {gallery.length > 2 && (
                <img src={gallery[2].url} alt="img1" className="right-image" />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
            borderRadius: "15px",
            marginTop: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <CiImageOff style={{ fontSize: "24px", color: "orangered" }} />
            <h3>Gallery is empty</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorGallery;
