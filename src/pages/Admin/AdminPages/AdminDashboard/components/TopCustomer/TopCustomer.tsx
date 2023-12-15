import ImageWraper from "../../../../../../components/ImageWraper";
import "./TopCustomer.scss";
import { GiPodiumWinner } from "react-icons/gi";

const image =
  "https://i.pinimg.com/736x/80/2a/eb/802aeb74aff33833c32f850b096defe2.jpg";

const TopCustomer = () => {
  return (
    <div className="top-customer-wrapper">
      <div className="top-customer-header-wrapper">
        <div className="top-customer-header ">
          <GiPodiumWinner />
          <h3>Top Customer</h3>
        </div>
      </div>
      <div className="top-customer-header"></div>
      <table className="top-customer-table">
        <thead className="top-customer-thead">
          <tr className="top-customer-tr">
            <th className="top-customer-th">Customer</th>
            <th className="top-customer-th">Address</th>
            <th className="top-customer-th">Phone</th>
            <th className="top-customer-th">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr className="top-customer-tr">
            <td className="top-customer-td">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ImageWraper image={image} size="35px" />
                <h3>Anastasia</h3>
              </div>
            </td>
            <td className="top-customer-td">st. Holy Park №13</td>
            <td className="top-customer-td">+95 554 546</td>
            <td className="top-customer-td">ricco@gmail.com</td>
          </tr>
        </tbody>
        <tbody>
          <tr className="top-customer-tr">
            <td className="top-customer-td">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ImageWraper image={image} size="35px" />
                <h3>Anastasia</h3>
              </div>
            </td>
            <td className="top-customer-td">st. Holy Park №13</td>
            <td className="top-customer-td">+95 554 546</td>
            <td className="top-customer-td">ricco@gmail.com</td>
          </tr>
        </tbody>
        <tbody>
          <tr className="top-customer-tr">
            <td className="top-customer-td">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ImageWraper image={image} size="35px" />
                <h3>Anastasia</h3>
              </div>
            </td>
            <td className="top-customer-td">st. Holy Park №13</td>
            <td className="top-customer-td">+95 554 546</td>
            <td className="top-customer-td">ricco@gmail.com</td>
          </tr>
        </tbody>
        <tbody>
          <tr className="top-customer-tr">
            <td className="top-customer-td">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ImageWraper image={image} size="35px" />
                <h3>Anastasia</h3>
              </div>
            </td>
            <td className="top-customer-td">st. Holy Park №13</td>
            <td className="top-customer-td">+95 554 546</td>
            <td className="top-customer-td">ricco@gmail.com</td>
          </tr>
        </tbody>
        <tbody>
          <tr className="top-customer-tr">
            <td className="top-customer-td">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ImageWraper image={image} size="35px" />
                <h3>Anastasia</h3>
              </div>
            </td>
            <td className="top-customer-td">st. Holy Park №13</td>
            <td className="top-customer-td">+95 554 546</td>
            <td className="top-customer-td">ricco@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TopCustomer;
