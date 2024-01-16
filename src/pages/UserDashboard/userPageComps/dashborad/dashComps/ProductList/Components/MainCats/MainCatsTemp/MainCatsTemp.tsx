import { FC } from "react";
import "./MainCatsTemp.scss";
import { MainCType } from "../../../../../../../../../redux/type.slice";

const MainCatsTemp: FC<{
  mainCat: MainCType;
  OnClickType: (id: number, title: string) => void;
  isClicked: boolean;
}> = ({ mainCat, OnClickType, isClicked }) => {
  return (
    <div
      className={`each-main-cat-wrapper ${isClicked && "selectedCat"}`}
      onClick={() => OnClickType(mainCat.id, mainCat.title)}
    >
      <img src={mainCat.image} alt={mainCat.title} />
      <h5>{mainCat.title}</h5>
    </div>
  );
};

export default MainCatsTemp;
