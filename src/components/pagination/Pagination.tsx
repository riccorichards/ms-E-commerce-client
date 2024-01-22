import { FC } from "react";
import "./Pagination.scss";

const Pagination: FC<{ totalPage: number; setPage: (val: number) => void }> = ({
  totalPage,
  setPage,
}) => {
  const pages = [];
  for (let i = 1; i <= totalPage; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination-wrapper">
      {pages.map((page) => (
        <button
          className="each-pagination-btn"
          key={page}
          onClick={() => setPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
