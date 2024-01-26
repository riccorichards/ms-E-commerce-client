import { FC } from "react";
import "./ImageTemplateG.scss";
import { IoIosMore } from "react-icons/io";
import { IoTrashBinOutline } from "react-icons/io5";
import { GalleryType } from "../../../../../redux/type.slice";
import Utils from "../../../../../../src/utils/utils";
import { RiProfileLine } from "react-icons/ri";
import { useAppDispatch } from "@redux/hook";
import { updateVendorProfile } from "@redux/appCall/VendorAppCall";

const ImageTemplateG: FC<{
  image: GalleryType;
  removePhoto: (title: string) => void;
  isOpenOption: boolean;
  handleOpenOption: (imgId: string) => void;
}> = ({ image, handleOpenOption, isOpenOption, removePhoto }) => {
  const dispatch = useAppDispatch();

  const handleUpdateProfile = (photoTitle: string) => {
    dispatch(updateVendorProfile(photoTitle));
  };

  return (
    <div className="gallery-image-template-wrapper">
      <img src={image.url} alt="img-gallery" className="img-gallery" />
      <div className="gallery-image-details">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "14px" }}>
            {Utils.dateFormatter(image.createdAt).date}
          </span>
          <span style={{ fontSize: "14px" }}>
            {Utils.dateFormatter(image.createdAt).time}
          </span>
        </div>
        <IoIosMore onClick={() => handleOpenOption(image._id)} />
        {isOpenOption && (
          <div className="gallery-img-option">
            <button onClick={() => removePhoto(image.title)}>
              <IoTrashBinOutline style={{ fontSize: "18px" }} />
              Delete
            </button>
            <button onClick={() => handleUpdateProfile(image.title)}>
              <RiProfileLine style={{ fontSize: "18px" }} />
              <span style={{ textAlign: "start" }}>Pick as a profile</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageTemplateG;
