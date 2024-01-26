import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hook";
import "./FoodImage.scss";
import { uploadImage } from "../../../../../../redux/appCall/AuthAppCall";
import { FaCameraRetro } from "react-icons/fa";

const FoodImage = () => {
  const dispatch = useAppDispatch();
  const { foodImage } = useAppSelector((state) => state.food);
  const imageRef = useRef<HTMLInputElement | null>(null);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    const formData = new FormData();
    if (file) {
      formData.append("upload", file[0]);
      formData.append("type", "foods");
      formData.append("address", "product");
      formData.append("toShare", "1");
      dispatch(uploadImage(formData));
    }
  };
  return (
    <section className="add-food-image-wrapper">
      {foodImage?.url ? (
        <img style={{ width: "100%", height: "100%" }} src={foodImage.url} />
      ) : (
        <div
          onClick={() => imageRef.current?.click()}
          className="add-food-image-btn"
        >
          <FaCameraRetro />
          <h5>Add Image for Food here...</h5>
          <input
            type="file"
            ref={imageRef}
            hidden
            onChange={handleUploadImage}
          />
        </div>
      )}
    </section>
  );
};

export default FoodImage;
