import "./DashHeader.scss";
import SubSearch from "./../../../../../../../../components/SubCat/subComps/search/SubSearch";

const DashHeader = () => {
  return (
    <header className="dashboard-header">
      <span className="meeter-text">
        Welcome to <span style={{ color: "orangered" }}>RiccoFood!</span>
      </span>
      <div className="dash-search-wrapper">
        <SubSearch />
      </div>
    </header>
  );
};

export default DashHeader;
