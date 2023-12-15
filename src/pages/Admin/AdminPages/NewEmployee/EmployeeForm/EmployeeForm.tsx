import { useForm } from "react-hook-form";
import "./EmployeeForm.scss";
import {
  EmployeeFormInput,
  EmployeeValidationSchema,
} from "../NewEmploeeValidation";
import { zodResolver } from "@hookform/resolvers/zod";

const EmployeeForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<EmployeeFormInput>({
    resolver: zodResolver(EmployeeValidationSchema),
  });

  const onSubmit = (value: EmployeeFormInput) => {
    console.log(value);
    reset();
  };
  return (
    <div className="employee-from-wrapper">
      <form id="employee-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="employee-form-item">
          <input type="text" placeholder="Name" {...register("name")} />
          {errors.name && (
            <p className="errors-wrapper">{errors.name.message}</p>
          )}
        </div>
        <div className="employee-form-item">
          <input type="text" placeholder="Name" {...register("name")} />
          {errors.name && (
            <p className="errors-wrapper">{errors.name.message}</p>
          )}
        </div>
        <div className="employee-form-item">
          <input type="email" placeholder="Email" {...register("email")} />
          {errors.email && (
            <p className="errors-wrapper">{errors.email.message}</p>
          )}
        </div>
        <div className="employee-form-item">
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <p className="errors-wrapper">{errors.password.message}</p>
          )}
        </div>
        <div className="employee-form-item">
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confPass")}
          />
          {errors.confPass && (
            <p className="errors-wrapper">{errors.confPass.message}</p>
          )}
        </div>
        <div className="employee-form-item">
          <input type="text" placeholder="Lat" {...register("lat")} />
          {errors.lat && <p className="errors-wrapper">{errors.lat.message}</p>}
        </div>
        <div className="employee-form-item">
          <input type="text" placeholder="Lng" {...register("lng")} />
          {errors.lng && <p className="errors-wrapper">{errors.lng.message}</p>}
        </div>
        <button type="submit">Add new Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
