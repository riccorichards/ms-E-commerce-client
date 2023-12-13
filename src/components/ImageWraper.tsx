import { FC } from "react";
import { IoPersonOutline } from "react-icons/io5";

const ImageWraper: FC<{
  image: string | undefined;
  size: string;
  nonCircle?: boolean;
  radiusSize?: string;
}> = ({ image, size, nonCircle, radiusSize }) => {
  return image ? (
    <img
      src={image}
      alt=""
      style={{
        width: size,
        height: size,
        objectFit: "cover",
        borderRadius: nonCircle ? radiusSize : "50%",
      }}
      loading="lazy"
    />
  ) : (
    <IoPersonOutline style={{ fontSize: size }} />
  );
};

export default ImageWraper;
