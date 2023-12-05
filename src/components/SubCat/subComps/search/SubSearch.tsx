import { CiSearch } from "react-icons/ci";
import "../search/SubSearch.scss";
const SubSearch = () => {
  return (
    <div className="search-wrapper">
      <div className="search-icon">
        <CiSearch />
      </div>
      <input type="search" placeholder="search..." className="search-input" />
    </div>
  );
};

export default SubSearch;
