import "./UploadEmployeeImage.scss";
import ImageWraper from "./../../../../../components/ImageWraper";
import { FaCameraRetro } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hook";
import React from "react";

const UploadEmployeeImage = () => {
  const { imageUrl } = useAppSelector((state) => state.admin);
  const dispatch = useAppDispatch();

  const filesubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    const formData = new FormData();
    if (file) {
      formData.append("upload", file[0]);
      formData.append("type", "profiles")
      formData.append("address", "profiles")
    }
  };
  return (
    <div className="upload-employee-image">
      <ImageWraper image="" size="300px" />
      <div className="upload-employee-image-icon">
        <FaCameraRetro />
      </div>
      <input type="file" hidden />
    </div>
  );
};

export default UploadEmployeeImage;
