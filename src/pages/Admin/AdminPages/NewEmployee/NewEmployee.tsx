import EmployeeForm from "./EmployeeForm/EmployeeForm";
import "./NewEmployee.scss";
import UploadEmployeeImage from "./UploadEmployeeImage/UploadEmployeeImage";

const NewEmployee = () => {
  return (
    <div className="new-employee-wrapper">
      <h1>Create a new employee</h1>
      <div className="new-employee">
        <UploadEmployeeImage />
        <EmployeeForm />
      </div>
    </div>
  );
};

export default NewEmployee;
