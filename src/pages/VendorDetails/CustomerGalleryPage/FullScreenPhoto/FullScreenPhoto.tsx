import { FC } from "react";
import "./FullScreenPhoto.scss";
import { useAppSelector } from "@redux/hook";

const FullScreenPhoto: FC<{
  setOpenImageModal: (v: boolean) => void;
  chosenPhotoId: string | null;
}> = ({ setOpenImageModal, chosenPhotoId }) => {
  const { gallery } = useAppSelector((s) => s.vendor);

  if (!gallery) return null;

  const chosenPhoto = gallery.find((img) => img._id === chosenPhotoId);
  return (
    <div className="full-screen-photo-wrapper">
      <div className="full-screen-photo">
        <button onClick={() => setOpenImageModal(false)}>Close</button>
        {chosenPhoto && <img src={chosenPhoto.url} alt={chosenPhoto.title} />}
      </div>
    </div>
  );
};

export default FullScreenPhoto;
