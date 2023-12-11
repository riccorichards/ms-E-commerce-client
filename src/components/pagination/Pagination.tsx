import { FC } from "react";
import "./Pagination.scss";

const Pagination: FC<{ num: number }> = ({ num }) => {
  const pages = [];
  for (let i = 1; i <= num; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination-wrapper">
      {pages.map((page) => (
        <button className="each-pagination-btn">{page}</button>
      ))}
    </div>
  );
};

export default Pagination;
