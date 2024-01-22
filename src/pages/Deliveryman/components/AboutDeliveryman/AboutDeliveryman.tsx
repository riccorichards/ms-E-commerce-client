import ImageWraper from "../../../../components/ImageWraper";
import "./AboutDeliveryman.scss";
import { FaCameraRetro } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { AiOutlineLogout } from "react-icons/ai";
import { deliverymanlogOut } from "../../../../redux/appCall/DeliverymanAppCall";
import React, { useRef } from "react";
import { uploadImage } from "../../../../redux/appCall/AuthAppCall";

const AboutDeliveryman = () => {
  const { deliveyman } = useAppSelector((state) => state.deliveryman);
  const dispatch = useAppDispatch();
  const imageRef = useRef<HTMLInputElement | null>(null);
  if (!deliveyman) return null;

  const deliveryLogout = () => {
    dispatch(deliverymanlogOut());
    localStorage.removeItem("user");
  };

  const fileUploading = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    const formData = new FormData();
    if (file) {
      formData.append("upload", file[0]);
      formData.append("type", "profiles");
      formData.append("isSendToService", "0");
      formData.append("address", "deliveryman");
      dispatch(uploadImage(formData));
    }
  };
  return (
    <section className="about-deliveryman-wrapper">
      <header className="about-deliveryman-details">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>{deliveyman.name}</h1>
          <span>1k+ Revievs</span>
          <span>{deliveyman.createdAt}</span>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
          animi voluptates mollitia, perspiciatis, laboriosam quae repellat
          officiis molestias vero voluptatem assumenda placeat.
        </p>
        <span style={{ fontSize: "18px", textDecoration: "underline" }}>
          {deliveyman.email}
        </span>
      </header>
      <main>
        <div className="about-deliveryman-img">
          <ImageWraper image={deliveyman.image} size="320px" />
          <div
            className="deliveryman-upload-img"
            onClick={() => imageRef.current?.click()}
          >
            <FaCameraRetro />
          </div>
          <input type="file" hidden ref={imageRef} onChange={fileUploading} />
          <div className="deliveryman-logout" onClick={deliveryLogout}>
            <AiOutlineLogout />
          </div>
        </div>
      </main>
    </section>
  );
};

export default AboutDeliveryman;
