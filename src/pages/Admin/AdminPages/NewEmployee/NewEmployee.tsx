import UploadImage from "../../../../components/UploadImage/UploadImage";
import EmployeeForm from "./EmployeeForm/EmployeeForm";
import "./NewEmployee.scss";

const style = { color: "orangered", fontWeight: "700" };
const NewEmployee = () => {
  return (
    <div className="new-employee-wrapper">
      <h1>Create a new employee</h1>
      <main className="new-employee">
        <section>
          <UploadImage size="300px" toShare="0" address="deliveryman" />
          <p style={{ marginTop: "15px" }}>
            Valide Extensions <span style={style}>jpeg</span>/
            <span style={style}>jpg</span>/<span style={style}>png</span>
          </p>
        </section>
        <EmployeeForm />
      </main>
    </div>
  );
};

export default NewEmployee;
