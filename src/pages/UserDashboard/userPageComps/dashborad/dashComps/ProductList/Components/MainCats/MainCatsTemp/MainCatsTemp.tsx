import { FC } from "react";
import "./MainCatsTemp.scss";

type MainCatsType = {
  image: string;
  title: string;
};

const MainCatsTemp: FC<{ mainCat: MainCatsType }> = ({ mainCat }) => {
  return (
    <div className="each-main-cat-wrapper">
      <img src={mainCat.image} alt="temp" />
      <h5>{mainCat.title}</h5>
    </div>
  );
};

export default MainCatsTemp;
