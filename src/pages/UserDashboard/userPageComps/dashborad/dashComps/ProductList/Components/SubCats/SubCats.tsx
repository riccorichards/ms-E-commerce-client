import CustomSubCat from "../../../../../../../../components/CustomSubCat/CustomSubCat";
import { useAppSelector } from "../../../../../../../../redux/hook";
import { GetFilteredSubC } from "../../../../../../../../redux/type.slice";
import "./SubCats.scss";
import SubCatHeader from "./subCatHeader/SubCatHeader";

const SubCats = () => {
  const subC = useAppSelector((state) => state.food.subC) as GetFilteredSubC[];

  return (
    <div className="sub-cat-wrapper">
      <SubCatHeader />
      <div className="sub-cat-cards">
        {subC && subC.map((sub) => <CustomSubCat sub={sub} key={sub.id} />)}
      </div>
    </div>
  );
};

export default SubCats;
