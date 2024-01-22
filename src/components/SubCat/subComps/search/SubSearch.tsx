import { CiSearch } from "react-icons/ci";
import "../search/SubSearch.scss";

//function debounce<F extends (...args: unknown[]) => unknown>(
//  func: F,
//  delay: number
//): (...args: Parameters<F>) => void {
//  let debounceTimer: NodeJS.Timeout | null;

//  return function (this: ThisParameterType<F>, ...args: Parameters<F>): void {
//    if (debounceTimer !== null) {
//      clearTimeout(debounceTimer);
//    }
//    debounceTimer = setTimeout(() => func.apply(this, args), delay);
//  };
//}

const SubSearch = () => {
  return (
    <section className="search-wrapper">
      <div className="search-icon">
        <CiSearch />
      </div>
      <input type="search" placeholder="search..." className="search-input" />
    </section>
  );
};

export default SubSearch;
