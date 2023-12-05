import SubCatTemplate from "../../components/SubCat/SubCatTemplate";
import Pagination from "../../components/pagination/Pagination";

import "./SingleSubCat.scss";

const fakeData = [
  { id: 1, title: "Pizza" },
  { id: 2, title: "Pizza" },
  { id: 3, title: "Pizza" },
];
const SingleSubCat = () => {
  return (
    <div className="single-sub-cat-wrapper">
      <h1>
        Sub categories from the{" "}
        <span style={{ color: "orangered" }}>Main category</span>
      </h1>
      <div className="all-sub-cat-wrapper">
        {fakeData.map((sub) => (
          <SubCatTemplate sub={sub} key={sub.id} />
        ))}
      </div>
      <Pagination num={5} />
    </div>
  );
};

export default SingleSubCat;
