import { useEffect, useState } from "react";
import "./AllVendorFeeds.scss";
import Pagination from "../../../components/pagination/Pagination";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { getSpecVendorsFeeds } from "../../../redux/appCall/VendorAppCall";
import FeedTemplate from "../../../components/FeedTemplate/FeedTemplate";
import { useNavigate, useParams } from "react-router-dom";

const AllVendorFeeds = () => {
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const { vendorFeeds, vendorPagination } = useAppSelector((s) => s.vendor);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(getSpecVendorsFeeds({ vendorId: id, page }));
    }
  }, [dispatch, page, id]);

  if (!vendorFeeds || !vendorPagination) return null;

  const handleReturnBack = () => {
    navigate(`/customer/vendors/${id}`);
  };

  return (
    <div className="all-vendor-feeds-wrapper">
      <header className="all-vendor-feeds-header">
        <h2>Our customers' all feedbacks</h2>
        <button
          className="all-vendor-feeds-close-btn"
          onClick={handleReturnBack}
        >
          Close
        </button>
      </header>
      <main className="all-vendor-feeds-main">
        {vendorFeeds.map((feed) => (
          <FeedTemplate feed={feed} key={feed.feedId} />
        ))}
      </main>
      <Pagination setPage={setPage} totalPage={vendorPagination.totalPages} />
    </div>
  );
};

export default AllVendorFeeds;
