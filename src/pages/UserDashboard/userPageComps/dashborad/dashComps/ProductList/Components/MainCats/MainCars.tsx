import MainCatsTemp from "./MainCatsTemp/MainCatsTemp";
import "./MainCars.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../../redux/hook";
import { fetchMainCategorysSubCat } from "../../../../../../../../redux/appCall/FoodAppCall";
import { useEffect, useState } from "react";

const MainCars = () => {
  const dispatch = useAppDispatch();
  const { mainC } = useAppSelector((state) => state.food);
  const [isSelected, setIsSelected] = useState<number | null>(null);

  useEffect(() => {
    if (mainC) {
      dispatch(fetchMainCategorysSubCat(mainC[0].id));
      setIsSelected(mainC[0].id);
    }
  }, [dispatch, mainC]);

  const clickOnTheMainCat = (id: number) => {
    setIsSelected(id);
    dispatch(fetchMainCategorysSubCat(id));
  };

  return (
    <div className="main-cats-wrapper">
      {mainC &&
        mainC.map((mc) => (
          <MainCatsTemp
            mainCat={mc}
            key={mc.id}
            OnClickType={clickOnTheMainCat}
            isClicked={mc.id === isSelected}
          />
        ))}
    </div>
  );
};

export default MainCars;
