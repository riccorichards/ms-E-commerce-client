import UploadImage from "../../../../components/UploadImage/UploadImage";
import EmployeeForm from "./EmployeeForm/EmployeeForm";
import "./NewEmployee.scss";

const style = { color: "orangered", fontWeight: "700" };
const NewEmployee = () => {
  return (
    <div className="new-employee-wrapper">
      <h1>Create a new employee</h1>
      <div className="new-employee">
        <div>
          <UploadImage size="300px" isSendToService="1" address="deliveryman" />
          <p style={{ marginTop: "15px" }}>
            Valide Extensions <span style={style}>jpeg</span>/
            <span style={style}>jpg</span>/<span style={style}>png</span>
          </p>
        </div>
        <EmployeeForm />
      </div>
    </div>
  );
};

export default NewEmployee;
