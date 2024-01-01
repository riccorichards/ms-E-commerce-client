import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hook";
import "./FoodImage.scss";
import { uploadImage } from "../../../../../../redux/appCall/AuthAppCall";
import { FaCameraRetro } from "react-icons/fa";

const FoodImage = () => {
  const dispatch = useAppDispatch();
  const foodImageUrl = useAppSelector((state) => state.food.foodImageUrl);
  const imageRef = useRef<HTMLInputElement | null>(null);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    const formData = new FormData();
    if (file) {
      formData.append("upload", file[0]);
      formData.append("type", "profiles");
      formData.append("isSendToService", "0");
      dispatch(uploadImage(formData));
    }
  };
  return (
    <div className="add-food-image-wrapper">
      {foodImageUrl ? (
        foodImageUrl
      ) : (
        <div
          onClick={() => imageRef.current?.click()}
          className="add-food-image-btn"
        >
          <FaCameraRetro />
          <h5>Add Image for Food here...</h5>
          <input type="text" hidden onChange={handleUploadImage} />
        </div>
      )}
    </div>
  );
};

export default FoodImage;
