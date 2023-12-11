import { useRef } from "react";
import ImageWraper from "../../../../../components/ImageWraper";
import "./UpdateImage.scss";
import { TbPhotoEdit } from "react-icons/tb";

const image =
  "https://i.pinimg.com/564x/87/14/e2/8714e204d7108d36bcf31bd44bb6ad3b.jpg";

const UpdateImage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className="update-customer-image">
      <div className="customer-image-wrapper">
        <ImageWraper image={image} size="250px" nonCircle radiusSize="15px" />
        <div className="file-update-btn">
          <TbPhotoEdit />
        </div>
      </div>
      <input type="file" hidden ref={inputRef} />
    </div>
  );
};

export default UpdateImage;
