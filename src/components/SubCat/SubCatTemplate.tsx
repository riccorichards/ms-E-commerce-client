import { FC } from "react";
import "./SubCatTemplate.scss";
import SubCategories from "./subComps/categories/SubCategories";
import SubSearch from "./subComps/search/SubSearch";
import SubCatBody from "./subComps/subBody/SubCatBody";
import SubFooter from "./subComps/subFooter/SubFooter";

type SubType = {
  title: string;
};
const SubCatTemplate: FC<{ sub: SubType }> = ({ sub }) => {
  return (
    <div className="main-subcat">
      <div className="main-subcat-header">
        <SubSearch />
        <h2>{sub.title}</h2>
      </div>
      <SubCategories />
      <SubCatBody />
      <p style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <SubFooter />
    </div>
  );
};

export default SubCatTemplate;
