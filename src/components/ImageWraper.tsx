import { FC } from "react";

const ImageWraper: FC<{ image: string; size: string }> = ({ image, size }) => {
  return (
    <img
      src={image}
      style={{
        width: size,
        height: size,
        objectFit: "cover",
        borderRadius: "50%",
      }}
    />
  );
};
export default ImageWraper;
