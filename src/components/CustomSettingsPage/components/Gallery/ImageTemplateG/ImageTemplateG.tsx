import { FC } from "react";
import "./ImageTemplateG.scss";
import { IoIosMore } from "react-icons/io";
import { IoTrashBinOutline } from "react-icons/io5";
import { GalleryType } from "../../../../../redux/type.slice";

function readableTimeFormat(str: string) {
  const splitDateFormat = str.split("T");
  return {
    date: splitDateFormat[0],
    time: splitDateFormat[1].split(".")[0],
  };
}

const ImageTemplateG: FC<{
  image: GalleryType;
  removePhoto: (title: string) => void;
  isOpenOption: boolean;
  handleOpenOption: (imgId: string) => void;
}> = ({ image, handleOpenOption, isOpenOption, removePhoto }) => {
  return (
    <div className="gallery-image-template-wrapper">
      <img src={image.url} alt="img-gallery" className="img-gallery" />
      <div className="gallery-image-details">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "14px" }}>
            {readableTimeFormat(image.createdAt).date}
          </span>
          <span style={{ fontSize: "14px" }}>
            {readableTimeFormat(image.createdAt).time}
          </span>
        </div>
        <IoIosMore onClick={() => handleOpenOption(image._id)} />
        {isOpenOption && (
          <div
            className="gallery-img-option"
            onClick={() => removePhoto(image.title)}
          >
            <IoTrashBinOutline />
            Delete
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageTemplateG;
