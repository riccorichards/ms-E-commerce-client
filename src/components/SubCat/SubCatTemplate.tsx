import { FC } from "react";
import "./SubCatTemplate.scss";
import SubSearch from "./subComps/search/SubSearch";
import SubCatBody from "./subComps/subBody/SubCatBody";
import SubFooter from "./subComps/subFooter/SubFooter";
import { GetFilteredSubC } from "../../redux/type.slice";

const SubCatTemplate: FC<{ sub: GetFilteredSubC }> = ({ sub }) => {
  const product = sub.Products.length > 0 ? sub.Products[0] : null;

  return (
    <div className="main-subcat">
      <div className="main-subcat-header">
        <SubSearch />
        <h2>{sub.title}</h2>
      </div>
      <SubCatBody product={product ? product : null} />
      <p style={{ textAlign: "center" }}>{sub.desc}</p>
      <SubFooter />
    </div>
  );
};

export default SubCatTemplate;
