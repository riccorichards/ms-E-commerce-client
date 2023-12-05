import SubCatTemplate from "../../../../../../../../components/SubCat/SubCatTemplate";
import "./SubCats.scss";
import SubCatHeader from "./subCatHeader/SubCatHeader";

const fakeData = [
  { id: 1, title: "Pizza" },
  { id: 2, title: "Pizza" },
];
const SubCats = () => {
  return (
    <div className="sub-cat-wrapper">
      <SubCatHeader />
      <div className="sub-cat-cards">
        {fakeData.map((sub) => (
          <SubCatTemplate sub={sub} key={sub.id} />
        ))}
      </div>
    </div>
  );
};

export default SubCats;
