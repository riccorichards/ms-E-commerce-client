import React, { FC, useRef } from "react";
import "./UploadImage.scss";
import { TbPhotoEdit } from "react-icons/tb";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { uploadImage } from "../../redux/appCall/AuthAppCall";
import ImageWraper from "../ImageWraper";
import { EntireCustomerType, VendorType } from "../../redux/type.slice";

type TargetType = EntireCustomerType | VendorType;

const UploadImage: FC<{
  target?: TargetType;
  toShare: string;
  size: string;
  address: string;
}> = ({ target, toShare, size, address }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const { imageWrapper } = useAppSelector((state) => state.admin);

  const submitFile = (
    event: React.ChangeEvent<HTMLInputElement | undefined>
  ) => {
    const files = event.target.files;

    const formData = new FormData();

    if (files) {
      formData.append("upload", files[0]);
      formData.append("type", "profiles");
      formData.append("address", address);
      formData.append("toShare", toShare);
      dispatch(uploadImage(formData));
    }
  };
  return (
    <section className="update-customer-image">
      <div className="customer-image-wrapper">
        <ImageWraper
          image={
            target && target.url
              ? target.url
              : imageWrapper
              ? imageWrapper.url
              : undefined
          }
          size={size}
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
    </section>
  );
};

export default UploadImage;
