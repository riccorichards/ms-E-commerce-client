import MainCatsTemp from "./MainCatsTemp/MainCatsTemp";
import "./MainCars.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../../redux/hook";
import { fetchMainCategorysSubCat } from "../../../../../../../../redux/appCall/FoodAppCall";
import { FC, useEffect, useState } from "react";

const MainCars: FC<{ setTitleWrapper?: (str: string) => void }> = ({
  setTitleWrapper,
}) => {
  const dispatch = useAppDispatch();
  const { mainC } = useAppSelector((state) => state.food);
  const [isSelected, setIsSelected] = useState<number | null>(null);

  useEffect(() => {
    if (mainC) {
      dispatch(fetchMainCategorysSubCat(mainC[0].id));
      setIsSelected(mainC[0].id);
      if (setTitleWrapper) {
        setTitleWrapper(mainC[0].title);
      }
    }
  }, [dispatch, mainC]); //eslint-disable-line

  const clickOnTheMainCat = (id: number, title: string) => {
    setIsSelected(id);
    dispatch(fetchMainCategorysSubCat(id));
    if (setTitleWrapper) {
      setTitleWrapper(title);
    }
  };

  return (
    <section className="main-cats-wrapper">
      {mainC &&
        mainC.map((mc) => (
          <MainCatsTemp
            mainCat={mc}
            key={mc.id}
            OnClickType={clickOnTheMainCat}
            isClicked={mc.id === isSelected}
          />
        ))}
    </section>
  );
};

export default MainCars;
