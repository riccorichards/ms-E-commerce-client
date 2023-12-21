import CustomSubCat from "../../../../../../../../components/CustomSubCat/CustomSubCat";
import { useAppSelector } from "../../../../../../../../redux/hook";
import "./SubCats.scss";
import SubCatHeader from "./subCatHeader/SubCatHeader";

const SubCats = () => {
  const subC = useAppSelector((state) => state.food.subC);

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
