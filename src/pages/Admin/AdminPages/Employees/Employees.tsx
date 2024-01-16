import { useEffect } from "react";
import ImageWraper from "../../../../components/ImageWraper";
import Pagination from "../../../../components/pagination/Pagination";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import "./Employees.scss";
import { FaRunning } from "react-icons/fa";
import { getEmployees } from "../../../../redux/appCall/AdminAppCall";

const Employees = () => {
  const dispatch = useAppDispatch();
  const { employees } = useAppSelector((s) => s.admin);

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  if (!employees) return null;

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
              <th className="employees-th">Email</th>
              <th className="employees-th">Status</th>
            </tr>
          </thead>
          {employees.map((employee) => (
            <tbody key={employee.id}>
              <tr className="employees-tr">
                <td className="employees-td">{`#000${employee.id}`}</td>
                <td className="employees-td">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div>
                      <ImageWraper image={employee.image} size="35px" />
                    </div>
                    <h4>{employee.name}</h4>
                  </div>
                </td>
                <td className="employees-td">{employee.currentAddress}</td>
                <td className="employees-td">{employee.email}</td>
                <td className="employees-td">work</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <Pagination num={3} />
    </div>
  );
};

export default Employees;
