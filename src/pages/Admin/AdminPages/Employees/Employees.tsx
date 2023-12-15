import ImageWraper from "../../../../components/ImageWraper";
import Pagination from "../../../../components/pagination/Pagination";
import "./Employees.scss";
import { FaRunning } from "react-icons/fa";

const image =
  "https://i.pinimg.com/736x/80/2a/eb/802aeb74aff33833c32f850b096defe2.jpg";

const Employees = () => {
  return (
    <div className="employees-wrapper">
      <div className="employee-header">
        <h1>List Of Employees</h1>
        <div className="filter-section">
          <input
            type="text"
            placeholder="Search to your desire, like '@':name"
          />
          <button className="run-search">
            <FaRunning />
          </button>
        </div>
      </div>
      <div className="employee-body">
        <table className="employees-table">
          <thead className="employees-thead">
            <tr className="employees-tr">
              <th className="employees-th">ID</th>
              <th className="employees-th">Employee</th>
              <th className="employees-th">Address</th>
              <th className="employees-th">Phone</th>
              <th className="employees-th">Email</th>
              <th className="employees-th">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="employees-tr">
              <td className="employees-td">#00023</td>
              <td className="employees-td">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <ImageWraper image={image} size="35px" />
                  <h3>Anastasia</h3>
                </div>
              </td>
              <td className="employees-td">st. Holy Park №13</td>
              <td className="employees-td">+95 554 546</td>
              <td className="employees-td">ricco@gmail.com</td>
              <td className="employees-td">work</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="employees-tr">
              <td className="employees-td">#00023</td>
              <td className="employees-td">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <ImageWraper image={image} size="35px" />
                  <h3>Anastasia</h3>
                </div>
              </td>
              <td className="employees-td">st. Holy Park №13</td>
              <td className="employees-td">+95 554 546</td>
              <td className="employees-td">ricco@gmail.com</td>
              <td className="employees-td">work</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="employees-tr">
              <td className="employees-td">#00023</td>
              <td className="employees-td">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <ImageWraper image={image} size="35px" />
                  <h3>Anastasia</h3>
                </div>
              </td>
              <td className="employees-td">st. Holy Park №13</td>
              <td className="employees-td">+95 554 546</td>
              <td className="employees-td">ricco@gmail.com</td>
              <td className="employees-td">work</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="employees-tr">
              <td className="employees-td">#00023</td>
              <td className="employees-td">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <ImageWraper image={image} size="35px" />
                  <h3>Anastasia</h3>
                </div>
              </td>
              <td className="employees-td">st. Holy Park №13</td>
              <td className="employees-td">+95 554 546</td>
              <td className="employees-td">ricco@gmail.com</td>
              <td className="employees-td">work</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="employees-tr">
              <td className="employees-td">#00023</td>
              <td className="employees-td">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <ImageWraper image={image} size="35px" />
                  <h3>Anastasia</h3>
                </div>
              </td>
              <td className="employees-td">st. Holy Park №13</td>
              <td className="employees-td">+95 554 546</td>
              <td className="employees-td">ricco@gmail.com</td>
              <td className="employees-td">work</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="employees-tr">
              <td className="employees-td">#00023</td>
              <td className="employees-td">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <ImageWraper image={image} size="35px" />
                  <h3>Anastasia</h3>
                </div>
              </td>
              <td className="employees-td">st. Holy Park №13</td>
              <td className="employees-td">+95 554 546</td>
              <td className="employees-td">ricco@gmail.com</td>
              <td className="employees-td">work</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="employees-tr">
              <td className="employees-td">#00023</td>
              <td className="employees-td">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <ImageWraper image={image} size="35px" />
                  <h3>Anastasia</h3>
                </div>
              </td>
              <td className="employees-td">st. Holy Park №13</td>
              <td className="employees-td">+95 554 546</td>
              <td className="employees-td">ricco@gmail.com</td>
              <td className="employees-td">work</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination num={3} />
    </div>
  );
};

export default Employees;
