import React, { useRef } from "react";
import "./UploadImage.scss";
import { TbPhotoEdit } from "react-icons/tb";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { CustomerType } from "../../redux/type.slice";
import { uploadImage } from "../../redux/appCall/AuthAppCall";
import ImageWraper from "../ImageWraper";

const UploadImage = () => {
  const customer = useAppSelector(
    (state) => state.customer.customer
  ) as CustomerType;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const submitFile = (
    event: React.ChangeEvent<HTMLInputElement | undefined>
  ) => {
    const files = event.target.files;

    const formData = new FormData();

    if (files) {
      formData.append("upload", files[0]);
      formData.append("type", "profiles");
      formData.append("isCreated", "0");
      dispatch(uploadImage(formData));
    }
  };

  return (
    <div className="update-customer-image">
      <div className="customer-image-wrapper">
        <ImageWraper
          image={customer && customer.image}
          size="250px"
          nonCircle
          radiusSize="15px"
        />
        <div
          className="file-update-btn"
          onClick={() => inputRef.current?.click()}
        >
          <TbPhotoEdit />
        </div>
      </div>
      <input type="file" hidden ref={inputRef} onChange={submitFile} />
    </div>
  );
};

export default UploadImage;