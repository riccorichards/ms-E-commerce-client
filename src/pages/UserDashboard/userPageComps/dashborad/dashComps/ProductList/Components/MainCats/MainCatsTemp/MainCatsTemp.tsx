import { FC } from "react";
import "./MainCatsTemp.scss";
import { MainCType } from "../../../../../../../../../redux/type.slice";

const MainCatsTemp: FC<{
  mainCat: MainCType;
  OnClickType: (id: number) => void;
  isClicked: boolean;
}> = ({ mainCat, OnClickType, isClicked }) => {
  return (
    <div
      className={`each-main-cat-wrapper ${isClicked && "selectedCat"}`}
      onClick={() => OnClickType(mainCat.id)}
    >
      <img src={mainCat.image} alt={mainCat.title} />
      <h5>{mainCat.title}</h5>
    </div>
  );
};

export default MainCatsTemp;
