import "./UploadEmployeeImage.scss";
import ImageWraper from "./../../../../../components/ImageWraper";
import { FaCameraRetro } from "react-icons/fa";

const UploadEmployeeImage = () => {
  return (
    <div className="upload-employee-image">
      <ImageWraper image="" size="300px" />
      <div className="upload-employee-image-icon">
        <FaCameraRetro />
      </div>
    </div>
  );
};

export default UploadEmployeeImage;
