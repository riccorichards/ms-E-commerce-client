import "./SingleInvoice.scss";

const SingleInvoice = () => {
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
            <h3>Anastasia</h3>
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
        </div>
        <div className="single-invoice-table-wrapper">
          <table className="single-invoice-table">
            <thead className="single-invoice-thead">
              <tr className="single-invoice-tr">
                <th className="single-invoice-th">#</th>
                <th className="single-invoice-th">Item</th>
                <th className="single-invoice-th">Description</th>
                <th className="single-invoice-th">Price</th>
                <th className="single-invoice-th">Discount</th>
                <th className="single-invoice-th">Shopping</th>
                <th className="single-invoice-th">Qty</th>
                <th className="single-invoice-th">Total</th>
              </tr>
            </thead>
            <tbody className="single-invoice-tbody">
              <tr className="single-invoice-tr">
                <td className="single-invoice-td">1</td>
                <td className="single-invoice-td">Tolma</td>
                <td className="single-invoice-td">
                  Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem
                  ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum
                  dolor sit amet, consectetur adipisicing.
                </td>
                <td className="single-invoice-td">$0</td>
                <td className="single-invoice-td">$2.59</td>
                <td className="single-invoice-td">$19.59</td>
                <td className="single-invoice-td">1</td>
                <td className="single-invoice-td">$19.59</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="single-invoice-sum">
          <div className="single-invoice-sum-item">
            <span style={{ fontWeight: "800" }}>SubTotal</span>
            <p>$56.59</p>
          </div>
          <div className="single-invoice-sum-item">
            <span style={{ fontWeight: "800" }}>Discount</span>
            <p>$0</p>
          </div>
          <div className="single-invoice-sum-item">
            <span style={{ fontWeight: "800" }}>Shopping</span>
            <p>$7.48</p>
          </div>
          <div className="single-invoice-sum-item">
            <span style={{ fontWeight: "800" }}>Total</span>
            <h3 style={{ fontWeight: "800" }}>$56.59</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleInvoice;
