import "./UploadVendorImage.scss";
import ImageWraper from "../../../../../components/ImageWraper";
import { FaCameraRetro } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hook";
import React, { useRef } from "react";
import { uploadVendorImage } from "../../../../../redux/appCall/AdminAppCall";

const UploadVendorImage = () => {
  const image = useAppSelector((state) => state.admin.imageUrl);
  const imageRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement | undefined>) => {
    const file = e.target.files;
    const formData = new FormData();
    if (file) {
      formData.append("upload", file[0]);
      formData.append("type", "profiles");
      formData.append("isCreated", "1");
    }
    dispatch(uploadVendorImage(formData));
  };

  const style = { color: "orangered", fontWeight: "700" };

  return (
    <section className="upload-vendor-image">
      <div
        style={{
          border: "5px solid #008080",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ImageWraper
          image={image ? image : ""}
          size="290px"
          nonCircle
          radiusSize="0"
        />
      </div>
      <div
        className="upload-vendor-image-icon"
        onClick={() => imageRef.current?.click()}
      >
        <FaCameraRetro />
      </div>
      <input type="file" hidden ref={imageRef} onChange={handleUpload} />
      <p>
        Valide Extensions <span style={style}>jpeg</span>/
        <span style={style}>jpg</span>/<span style={style}>png</span>
      </p>
    </section>
  );
};

export default UploadVendorImage;
