import { useEffect } from "react";
import SubCatTemplate from "../../components/SubCat/SubCatTemplate";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

import "./AllSubCat.scss";
import { fetchSubCategories } from "../../redux/appCall/FoodAppCall";
import { useNavigate } from "react-router-dom";

const AllSubCat = () => {
  const navigate = useNavigate();
  const { subC } = useAppSelector((state) => state.food);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSubCategories());
  }, []); //eslint-disable-line

  const backToHome = () => {
    navigate("/customer/home");
  };
  return (
    <div className="all-sub-cat-page-wrapper">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>All Sub categories</h1>
        <button onClick={() => backToHome()}>Back To Home</button>
      </div>
      <div className="all-sub-cat-wrapper">
        {subC && subC.map((sub) => <SubCatTemplate sub={sub} key={sub.id} />)}
      </div>
    </div>
  );
};

export default AllSubCat;
