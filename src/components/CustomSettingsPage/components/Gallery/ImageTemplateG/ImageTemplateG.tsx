import { FC } from "react";
import "./ImageTemplateG.scss";
import { IoIosMore } from "react-icons/io";
import { IoTrashBinOutline } from "react-icons/io5";

type ImgeType = {
  id: number;
  date: string;
  image: string;
};
const ImageTemplateG: FC<{
  image: ImgeType;
  isOpenOption: boolean;
  handleOpenOption: (imgId: number) => void;
}> = ({ image, handleOpenOption, isOpenOption }) => {
  return (
    <div className="gallery-image-template-wrapper">
      <img src={image.image} alt="img-gallery" className="img-gallery" />
      <div className="gallery-image-details">
        <span>{image.date}</span>
        <IoIosMore onClick={() => handleOpenOption(image.id)} />
        {isOpenOption && (
          <div className="gallery-img-option">
            <IoTrashBinOutline />
            Delete
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageTemplateG;
