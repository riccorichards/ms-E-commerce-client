import { FC, useEffect } from "react";
import "./SingleInvoice.scss";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hook";
import { findOrderById } from "../../../../../redux/appCall/ShoppingApiCall";

const SingleInvoice: FC<{ orderIdWrapper: number | null }> = ({
  orderIdWrapper,
}) => {
  const dispatch = useAppDispatch();
  const { order } = useAppSelector((s) => s.shopping);
  const { customer } = useAppSelector((s) => s.customer);

  useEffect(() => {
    if (orderIdWrapper) {
      dispatch(findOrderById(orderIdWrapper));
    }
  }, [orderIdWrapper, dispatch]);

  if (!order || !customer) return null;

  return (
    <div className="single-invoice-wrapper">
      <div className="single-invoice">
        <div className="single-invoice-header">
          <div className="single-invoice-header-from">
            <p style={{ fontWeight: "800" }}>From:</p>
            <h3>RiccoFood</h3>
            <p>
              <span style={{ fontWeight: "800" }}>Address:</span>
              Lorem, ipsum dolor.
            </p>
            <p>
              <span style={{ fontWeight: "800" }}>Email:</span>
              ricco@gmail.com
            </p>
            <p>
              <span style={{ fontWeight: "800" }}>Phone:</span>
              +95 153 135 23
            </p>
          </div>
          <div className="single-invoice-header-to">
            <p style={{ fontWeight: "800" }}>To:</p>
            <h3>{customer.username}</h3>
            <p>
              <span style={{ fontWeight: "800" }}>Address:</span>
              {customer.address.street}
            </p>
            <p>
              <span style={{ fontWeight: "800" }}>Email:</span>
              {customer.email}
            </p>
            <p>
              <span style={{ fontWeight: "800" }}>Phone:</span>
              +95 153 135 23
            </p>
          </div>
        </div>
        <div className="single-invoice-table-wrapper">
          <table className="single-invoice-table">
            <thead className="single-invoice-thead">
              <tr className="single-invoice-tr">
                <th className="single-invoice-th">#</th>
                <th className="single-invoice-th">Item</th>
                <th className="single-invoice-th">Price</th>
                <th className="single-invoice-th">Qty</th>
                <th className="single-invoice-th">Total</th>
              </tr>
            </thead>
            <tbody className="single-invoice-tbody">
              {order.orderItem.map((item) => (
                <tr className="single-invoice-tr" key={item.productId}>
                  <td className="single-invoice-td">{item.productId}#</td>
                  <td className="single-invoice-td">{item.product_name}</td>
                  <td className="single-invoice-td">${item.product_price}</td>
                  <td className="single-invoice-td">{item.qty}</td>
                  <td className="single-invoice-td">
                    ${(item.qty * parseFloat(item.product_price)).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="single-invoice-sum">
          <div className="single-invoice-sum-item">
            <span style={{ fontWeight: "800" }}>SubTotal</span>
            <p>${order.total_amount.toFixed(2)}</p>
          </div>
          <div className="single-invoice-sum-item">
            <span style={{ fontWeight: "800" }}>Discount</span>
            <p>$0</p>
          </div>
          <div className="single-invoice-sum-item">
            <span style={{ fontWeight: "800" }}>Shopping</span>
            <p>$2.50</p>
          </div>
          <div className="single-invoice-sum-item">
            <span style={{ fontWeight: "800" }}>Total</span>
            <h3 style={{ fontWeight: "800" }}>
              ${(order.total_amount + 2.5).toFixed(2)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleInvoice;
