import { useEffect, useState, MouseEvent } from "react";
import "./Invoice.scss";
import SingleInvoice from "./SIngleInvoice/SingleInvoice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { getOrderList } from "../../../../redux/appCall/ShoppingApiCall";
import Pagination from "../../../pagination/Pagination";

const Invoice = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { ordersList, orderPagination } = useAppSelector((s) => s.shopping);
  const [orderIdWrapper, setOrderIdWrapper] = useState<number | null>(null);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    dispatch(getOrderList(page));
  }, [dispatch, page]);

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isOpen]); //eslint-disable-line

  if (!ordersList || !orderPagination) return null;

  const openModal = (event: MouseEvent, id: number) => {
    event.stopPropagation();
    setIsOpen(true);
    setOrderIdWrapper(id);
  };

  return (
    <main className="invoice-wrapper">
      <h1>My Invoice</h1>
      <div className="table-wrapper">
        <table className="invoice-table">
          <thead className="invoice-thead">
            <tr className="invoice-tr">
              <th className="invoice-th">Invoice#</th>
              <th className="invoice-th">Date</th>
              <th className="invoice-th">Amount</th>
              <th className="invoice-th">Shipping</th>
              <th className="invoice-th">Total</th>
            </tr>
          </thead>
          <tbody className="invoice-tbody">
            {ordersList.map((order) => (
              <tr
                key={order.orderId}
                className="invoice-tr"
                style={{ cursor: "pointer" }}
                onClick={(e: MouseEvent) => openModal(e, order.orderId)}
              >
                <td className="invoice-td">{`INV-000${order.orderId}`}</td>
                <td className="invoice-td">{order.createdAt.split("T")[0]}</td>
                <td className="invoice-td">{order.total_amount.toFixed(2)}</td>
                <td className="invoice-td">$ 2.50</td>
                <td className="invoice-td">
                  $ {(order.total_amount + 2.5).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isOpen && <SingleInvoice orderIdWrapper={orderIdWrapper} />}
      {orderPagination.totalPages > 1 && (
        <Pagination totalPage={orderPagination.totalPages} setPage={setPage} />
      )}
    </main>
  );
};
export default Invoice;
