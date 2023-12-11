import { FC } from "react";

const ImageWraper: FC<{
  image: string;
  size: string;
  nonCircle?: boolean;
  radiusSize?: string;
}> = ({ image, size, nonCircle, radiusSize }) => {
  return (
    <img
      src={image}
      style={{
        width: size,
        height: size,
        objectFit: "cover",
        borderRadius: nonCircle ? radiusSize : "50%",
      }}
      loading="lazy"
    />
  );
};
export default ImageWraper;
