import ImageWraper from "../../../../components/ImageWraper";
import "./AboutDeliveryman.scss";
import { FaCameraRetro } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { AiOutlineLogout } from "react-icons/ai";
import { deliverymanlogOut } from "../../../../redux/appCall/DeliverymanAppCall";
import React, { useRef } from "react";
import { uploadImage } from "../../../../redux/appCall/AuthAppCall";
import Utils from "../../../../utils/utils";

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
      formData.append("toShare", "1");
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
          <span>{`${Utils.dateFormatter(deliveyman.createdAt).date} - ${
            Utils.dateFormatter(deliveyman.createdAt).time
          }`}</span>
        </div>

        <p>
          This is my life, and i love it. I'm faster and i can effectively take
          food from one restaurant to another and the last step delivery it to
          the customer.
        </p>

        <span style={{ fontSize: "18px", textDecoration: "underline" }}>
          {deliveyman.email}
        </span>
      </header>
      <main>
        <div className="about-deliveryman-img">
          <ImageWraper image={deliveyman.url} size="320px" />
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
