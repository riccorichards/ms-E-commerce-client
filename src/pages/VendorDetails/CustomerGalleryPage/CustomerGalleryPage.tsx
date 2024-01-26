import { useNavigate, useParams } from "react-router-dom";
import "./CustomerGalleryPage.scss";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { getSpecVendor } from "@redux/appCall/VendorAppCall";
import ImageWraper from "@components/ImageWraper";
import RatingCalculation from "@components/RatingCalculation";
import { FaRegStar } from "react-icons/fa";
import FullScreenPhoto from "./FullScreenPhoto/FullScreenPhoto";

const CustomerGalleryPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { specVendor, gallery } = useAppSelector((s) => s.vendor);
  const navigate = useNavigate();
  const [openImageModal, setOpenImageModal] = useState<boolean>(false);
  const [chosenPhotoId, setChosenPhotoId] = useState<string | null>(null);
  useEffect(() => {
    if (id) {
      dispatch(getSpecVendor(id));
    }
  }, [id, dispatch]);

  if (!specVendor || !gallery) return null;

  const handleLeave = () => {
    navigate(`/customer/vendors/${id}`);
  };

  const handleClick = (id: string) => {
    setOpenImageModal((prev) => !prev);
    setChosenPhotoId(id);
  };

  return (
    <div className="customer-gallery-page-wrapper">
      <header className="customer-gallery-page-header">
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div>
            <ImageWraper size="70px" image={specVendor.image} />
          </div>
          <div>
            <h2>{specVendor.name}</h2>
            <RatingCalculation
              rating={{ icon: FaRegStar, rating: specVendor.rating }}
            />
          </div>
        </div>
        <button onClick={handleLeave}>Leave</button>
      </header>
      <main className="customer-gallery-page">
        <section className="customer-gallery-page-p1">
          <div className="customer-gallery-main-photo">
            <img
              src={gallery[0].url}
              alt={gallery[0].title}
              onClick={() => handleClick(gallery[0]._id)}
            />
          </div>
          {gallery.length >= 5 && (
            <div className="customer-gallery-others">
              {gallery.slice(1, 5).map((photo) => (
                <div className="other-photo-item" key={photo._id}>
                  <img
                    src={photo.url}
                    alt={photo.title}
                    onClick={() => handleClick(photo._id)}
                  />
                </div>
              ))}
            </div>
          )}
        </section>
        {gallery.length > 5 && (
          <section className="customer-gallery-page-p2">
            {gallery.slice(5).map((photo) => (
              <div className="gallery-page-p2" key={photo._id}>
                <img
                  src={photo.url}
                  alt={photo.title}
                  onClick={() => handleClick(photo._id)}
                />
              </div>
            ))}
          </section>
        )}
      </main>
      {openImageModal && (
        <FullScreenPhoto
          setOpenImageModal={setOpenImageModal}
          chosenPhotoId={chosenPhotoId}
        />
      )}
    </div>
  );
};

export default CustomerGalleryPage;
