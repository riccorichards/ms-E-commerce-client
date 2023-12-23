import { useAppSelector } from "../../../../redux/hook";
import ImageTemplateG from "./ImageTemplateG/ImageTemplateG";
import "./Gallery.scss";
import { IoImageOutline } from "react-icons/io5";
import { useState } from "react";
import ImageUpload from "./ImageUpload/ImageUpload";

const fake = [
  {
    id: 1,
    date: "1235-45-12",
    image:
      "https://i.pinimg.com/564x/04/be/f6/04bef61884051d5695ad0d2ce37632f2.jpg",
  },
  {
    id: 2,
    date: "1235-45-12",
    image:
      "https://i.pinimg.com/564x/04/be/f6/04bef61884051d5695ad0d2ce37632f2.jpg",
  },
  {
    id: 3,
    date: "1235-45-12",
    image:
      "https://i.pinimg.com/564x/04/be/f6/04bef61884051d5695ad0d2ce37632f2.jpg",
  },
  {
    id: 4,
    date: "1235-45-12",
    image:
      "https://i.pinimg.com/564x/04/be/f6/04bef61884051d5695ad0d2ce37632f2.jpg",
  },
  {
    id: 5,
    date: "1235-45-12",
    image:
      "https://i.pinimg.com/564x/04/be/f6/04bef61884051d5695ad0d2ce37632f2.jpg",
  },
  {
    id: 6,
    date: "1235-45-12",
    image:
      "https://i.pinimg.com/564x/04/be/f6/04bef61884051d5695ad0d2ce37632f2.jpg",
  },
  {
    id: 7,
    date: "1235-45-12",
    image:
      "https://i.pinimg.com/564x/04/be/f6/04bef61884051d5695ad0d2ce37632f2.jpg",
  },
  {
    id: 8,
    date: "1235-45-12",
    image:
      "https://i.pinimg.com/564x/04/be/f6/04bef61884051d5695ad0d2ce37632f2.jpg",
  },
];

const Gallery = () => {
  const { vendor } = useAppSelector((state) => state.vendor);
  const [imgIdWrapper, setImgIdWrapper] = useState<number | null>(null);
  const [isUpload, setIsUpload] = useState<boolean>(false);

  const handleOpenOption = (imgId: number) => {
    setImgIdWrapper(imgId === imgIdWrapper ? null : imgId);
  };

  return (
    <div className="gallery-wrapper">
      <header className="gallery-header-wrapper">
        <h1>
          {vendor?.name}'s <span style={{ color: "orangered" }}>Gallery</span>
        </h1>
        <button onClick={() => setIsUpload((prev) => !prev)}>
          <IoImageOutline /> Upload
        </button>
        <div
          className={`gallery-upload-image-wrapper${
            isUpload ? "gallery-upload-image-wrapper-show" : ""
          }`}
        >
          <ImageUpload />
        </div>
      </header>
      <main className="gallery">
        {fake &&
          fake.map((image) => (
            <ImageTemplateG
              image={image}
              key={image.id}
              isOpenOption={image.id === imgIdWrapper}
              handleOpenOption={handleOpenOption}
            />
          ))}
      </main>
    </div>
  );
};

export default Gallery;
