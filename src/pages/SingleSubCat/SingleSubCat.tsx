import { useEffect } from "react";
import SubCatTemplate from "../../components/SubCat/SubCatTemplate";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

import "./SingleSubCat.scss";
import { fetchSubCategories } from "../../redux/appCall/FoodAppCall";
import { GetFilteredSubC } from "../../redux/type.slice";

const SingleSubCat = () => {
  const subC = useAppSelector((state) => state.food.subC) as GetFilteredSubC[];
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSubCategories());
  }, []); //eslint-disable-line

  return (
    <div className="single-sub-cat-wrapper">
      <h1>All Sub categories</h1>
      <div className="all-sub-cat-wrapper">
        {subC && subC.map((sub) => <SubCatTemplate sub={sub} key={sub.id} />)}
      </div>
    </div>
  );
};

export default SingleSubCat;
