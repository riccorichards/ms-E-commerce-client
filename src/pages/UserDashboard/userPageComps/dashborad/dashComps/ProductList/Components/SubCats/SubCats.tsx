import CustomSubCat from "../../../../../../../../components/CustomSubCat/CustomSubCat";
import { useAppSelector } from "../../../../../../../../redux/hook";
import { GetFilteredSubC } from "../../../../../../../../redux/type.slice";
import "./SubCats.scss";

const SubCats = () => {
  const subC = useAppSelector((state) => state.food.subC) as GetFilteredSubC[];

  return (
    <section className="sub-cat-wrapper">
      <h1>Sub Categories</h1>
      <div className="sub-cat-cards">
        {subC && subC.map((sub) => <CustomSubCat sub={sub} key={sub.id} />)}
      </div>
    </section>
  );
};

export default SubCats;
