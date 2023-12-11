import { useEffect, useState, MouseEvent } from "react";
import Pagination from "../../../../components/pagination/Pagination";
import "./Invoice.scss";
import SingleInvoice from "./SIngleInvoice/SingleInvoice";

const Invoice = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (event: MouseEvent) => {
    event.stopPropagation();
    setIsOpen(true);
  };

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

  return (
    <div className="invoice-wrapper">
      <h1>My Invoice</h1>
      <div className="table-wrapper">
        <table className="invoice-table">
          <thead className="invoice-thead">
            <tr className="invoice-tr">
              <th className="invoice-th">Invoice#</th>
              <th className="invoice-th">Vendor</th>
              <th className="invoice-th">Date</th>
              <th className="invoice-th">Amount</th>
              <th className="invoice-th">Discount</th>
              <th className="invoice-th">Shipping price</th>
              <th className="invoice-th">Total</th>
            </tr>
          </thead>
          <tbody className="invoice-tbody">
            <tr
              className="invoice-tr"
              style={{ cursor: "pointer" }}
              onClick={openModal}
            >
              <td className="invoice-td">INV-0001</td>
              <td className="invoice-td">RiccoFood</td>
              <td className="invoice-td">2023-12-06</td>
              <td className="invoice-td">$ 19.59</td>
              <td className="invoice-td">$ 0</td>
              <td className="invoice-td">$ 4.59</td>
              <td className="invoice-td">$ 19.59</td>
            </tr>
          </tbody>
          <tbody className="invoice-tbody">
            <tr
              className="invoice-tr"
              style={{ cursor: "pointer" }}
              onClick={openModal}
            >
              <td className="invoice-td">INV-0001</td>
              <td className="invoice-td">RiccoFood</td>
              <td className="invoice-td">2023-12-06</td>
              <td className="invoice-td">$ 19.59</td>
              <td className="invoice-td">$ 0</td>
              <td className="invoice-td">$ 4.59</td>
              <td className="invoice-td">$ 19.59</td>
            </tr>
          </tbody>
          <tbody className="invoice-tbody">
            <tr
              className="invoice-tr"
              style={{ cursor: "pointer" }}
              onClick={openModal}
            >
              <td className="invoice-td">INV-0001</td>
              <td className="invoice-td">RiccoFood</td>
              <td className="invoice-td">2023-12-06</td>
              <td className="invoice-td">$ 19.59</td>
              <td className="invoice-td">$ 0</td>
              <td className="invoice-td">$ 4.59</td>
              <td className="invoice-td">$ 19.59</td>
            </tr>
          </tbody>
          <tbody className="invoice-tbody">
            <tr
              className="invoice-tr"
              style={{ cursor: "pointer" }}
              onClick={openModal}
            >
              <td className="invoice-td">INV-0001</td>
              <td className="invoice-td">RiccoFood</td>
              <td className="invoice-td">2023-12-06</td>
              <td className="invoice-td">$ 19.59</td>
              <td className="invoice-td">$ 0</td>
              <td className="invoice-td">$ 4.59</td>
              <td className="invoice-td">$ 19.59</td>
            </tr>
          </tbody>
          <tbody className="invoice-tbody">
            <tr
              className="invoice-tr"
              style={{ cursor: "pointer" }}
              onClick={openModal}
            >
              <td className="invoice-td">INV-0001</td>
              <td className="invoice-td">RiccoFood</td>
              <td className="invoice-td">2023-12-06</td>
              <td className="invoice-td">$ 19.59</td>
              <td className="invoice-td">$ 0</td>
              <td className="invoice-td">$ 4.59</td>
              <td className="invoice-td">$ 19.59</td>
            </tr>
          </tbody>
          <tbody className="invoice-tbody">
            <tr
              className="invoice-tr"
              style={{ cursor: "pointer" }}
              onClick={openModal}
            >
              <td className="invoice-td">INV-0001</td>
              <td className="invoice-td">RiccoFood</td>
              <td className="invoice-td">2023-12-06</td>
              <td className="invoice-td">$ 19.59</td>
              <td className="invoice-td">$ 0</td>
              <td className="invoice-td">$ 4.59</td>
              <td className="invoice-td">$ 19.59</td>
            </tr>
          </tbody>
          <tbody className="invoice-tbody">
            <tr
              className="invoice-tr"
              style={{ cursor: "pointer" }}
              onClick={openModal}
            >
              <td className="invoice-td">INV-0001</td>
              <td className="invoice-td">RiccoFood</td>
              <td className="invoice-td">2023-12-06</td>
              <td className="invoice-td">$ 19.59</td>
              <td className="invoice-td">$ 0</td>
              <td className="invoice-td">$ 4.59</td>
              <td className="invoice-td">$ 19.59</td>
            </tr>
          </tbody>
          <tbody className="invoice-tbody">
            <tr
              className="invoice-tr"
              style={{ cursor: "pointer" }}
              onClick={openModal}
            >
              <td className="invoice-td">INV-0001</td>
              <td className="invoice-td">RiccoFood</td>
              <td className="invoice-td">2023-12-06</td>
              <td className="invoice-td">$ 19.59</td>
              <td className="invoice-td">$ 0</td>
              <td className="invoice-td">$ 4.59</td>
              <td className="invoice-td">$ 19.59</td>
            </tr>
          </tbody>
          <tbody className="invoice-tbody">
            <tr
              className="invoice-tr"
              style={{ cursor: "pointer" }}
              onClick={openModal}
            >
              <td className="invoice-td">INV-0001</td>
              <td className="invoice-td">RiccoFood</td>
              <td className="invoice-td">2023-12-06</td>
              <td className="invoice-td">$ 19.59</td>
              <td className="invoice-td">$ 0</td>
              <td className="invoice-td">$ 4.59</td>
              <td className="invoice-td">$ 19.59</td>
            </tr>
          </tbody>
          <tbody className="invoice-tbody">
            <tr
              className="invoice-tr"
              style={{ cursor: "pointer" }}
              onClick={openModal}
            >
              <td className="invoice-td">INV-0001</td>
              <td className="invoice-td">RiccoFood</td>
              <td className="invoice-td">2023-12-06</td>
              <td className="invoice-td">$ 19.59</td>
              <td className="invoice-td">$ 0</td>
              <td className="invoice-td">$ 4.59</td>
              <td className="invoice-td">$ 19.59</td>
            </tr>
          </tbody>
          <tbody className="invoice-tbody">
            <tr
              className="invoice-tr"
              style={{ cursor: "pointer" }}
              onClick={openModal}
            >
              <td className="invoice-td">INV-0001</td>
              <td className="invoice-td">RiccoFood</td>
              <td className="invoice-td">2023-12-06</td>
              <td className="invoice-td">$ 19.59</td>
              <td className="invoice-td">$ 0</td>
              <td className="invoice-td">$ 4.59</td>
              <td className="invoice-td">$ 19.59</td>
            </tr>
          </tbody>
          <tbody className="invoice-tbody">
            <tr
              className="invoice-tr"
              style={{ cursor: "pointer" }}
              onClick={openModal}
            >
              <td className="invoice-td">INV-0001</td>
              <td className="invoice-td">RiccoFood</td>
              <td className="invoice-td">2023-12-06</td>
              <td className="invoice-td">$ 19.59</td>
              <td className="invoice-td">$ 0</td>
              <td className="invoice-td">$ 4.59</td>
              <td className="invoice-td">$ 19.59</td>
            </tr>
          </tbody>
          <tbody className="invoice-tbody">
            <tr
              className="invoice-tr"
              style={{ cursor: "pointer" }}
              onClick={openModal}
            >
              <td className="invoice-td">INV-0001</td>
              <td className="invoice-td">RiccoFood</td>
              <td className="invoice-td">2023-12-06</td>
              <td className="invoice-td">$ 19.59</td>
              <td className="invoice-td">$ 0</td>
              <td className="invoice-td">$ 4.59</td>
              <td className="invoice-td">$ 19.59</td>
            </tr>
          </tbody>
          <tbody className="invoice-tbody">
            <tr
              className="invoice-tr"
              style={{ cursor: "pointer" }}
              onClick={openModal}
            >
              <td className="invoice-td">INV-0001</td>
              <td className="invoice-td">RiccoFood</td>
              <td className="invoice-td">2023-12-06</td>
              <td className="invoice-td">$ 19.59</td>
              <td className="invoice-td">$ 0</td>
              <td className="invoice-td">$ 4.59</td>
              <td className="invoice-td">$ 19.59</td>
            </tr>
          </tbody>
          <tbody className="invoice-tbody">
            <tr
              className="invoice-tr"
              style={{ cursor: "pointer" }}
              onClick={openModal}
            >
              <td className="invoice-td">INV-0001</td>
              <td className="invoice-td">RiccoFood</td>
              <td className="invoice-td">2023-12-06</td>
              <td className="invoice-td">$ 19.59</td>
              <td className="invoice-td">$ 0</td>
              <td className="invoice-td">$ 4.59</td>
              <td className="invoice-td">$ 19.59</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination num={4} />
      {isOpen && <SingleInvoice />}
    </div>
  );
};
export default Invoice;
