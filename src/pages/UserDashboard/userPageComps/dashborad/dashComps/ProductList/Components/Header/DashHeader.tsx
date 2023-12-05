import "./DashHeader.scss";
import SubSearch from "./../../../../../../../../components/SubCat/subComps/search/SubSearch";

const DashHeader = () => {
  return (
    <div className="dashboard-header">
      <span className="meeter-text">
        Welcome to <span style={{ color: "orangered" }}>RiccoFood!</span>
      </span>
      <div className="dash-search-wrapper">
        <SubSearch />
      </div>
    </div>
  );
};

export default DashHeader;
