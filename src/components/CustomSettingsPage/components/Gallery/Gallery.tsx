import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import ImageTemplateG from "./ImageTemplateG/ImageTemplateG";
import "./Gallery.scss";
import { IoImageOutline } from "react-icons/io5";
import React, { useEffect, useRef, useState } from "react";
import { FiCameraOff } from "react-icons/fi";
import {
  getVendorGallery,
  removeGalleryImg,
  uploadGalleryImg,
} from "../../../../redux/appCall/VendorAppCall";

const Gallery = () => {
  const dispatch = useAppDispatch();
  const { vendor, gallery } = useAppSelector((state) => state.vendor);
  const { imageUrl } = useAppSelector((state) => state.vendor);
  const [imgIdWrapper, setImgIdWrapper] = useState<string | null>(null);
  const imageRef = useRef<HTMLInputElement | null>(null);

  const handleOpenOption = (imgId: string) => {
    setImgIdWrapper(imgId === imgIdWrapper ? null : imgId);
  };

  useEffect(() => {
    if (vendor) {
      dispatch(getVendorGallery(vendor._id));
    }
  }, [imageUrl, vendor]); //eslint-disable-line

  if (!vendor || !gallery) return null;

  const fileSubmition = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    const formData = new FormData();

    if (file) {
      formData.append("upload", file[0]);
      formData.append("type", "gallery");
      formData.append("toShare", "1");
      formData.append("address", "vendor");
      dispatch(uploadGalleryImg(formData));
    }
  };

  const handleRemovePhoto = (title: string) => {
    dispatch(removeGalleryImg(title));
  };

  return (
    <div className="gallery-wrapper">
      <header className="gallery-header-wrapper">
        <h2>
          {vendor.name}'s <span style={{ color: "orangered" }}>Gallery</span>
        </h2>
        <button onClick={() => imageRef.current?.click()}>
          <IoImageOutline /> Upload
        </button>
        <input ref={imageRef} type="file" hidden onChange={fileSubmition} />
      </header>
      <main className="gallery">
        {gallery.length > 0 ? (
          gallery.map((image) => (
            <ImageTemplateG
              removePhoto={handleRemovePhoto}
              image={image}
              key={image._id}
              isOpenOption={image._id === imgIdWrapper}
              handleOpenOption={handleOpenOption}
            />
          ))
        ) : (
          <div className="empty-gallery-grid">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <FiCameraOff style={{ color: "orangered", fontSize: "18px" }} />
              <span style={{ textAlign: "center" }}>There is no Image</span>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Gallery;
