import { useEffect, useState } from "react";
import "./BasicInfo.scss";
import { FaRegUserCircle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { RegisterInputType, registrationSchema } from "../../Validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "../../../../../redux/hook";
import { fetchRegister } from "./../../../../../redux/appCall/AuthAppCall";
import { Link } from "react-router-dom";

const BasicInfo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<RegisterInputType>({
    resolver: zodResolver(registrationSchema),
  });

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (isVisible) {
        setIsVisible(false);
      }
    }, 500);
    return () => clearTimeout(timeOut);
  }, [isVisible]);

  const onSubmit = async (user: RegisterInputType) => {
    try {
      dispatch(fetchRegister(user));
      reset();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("An unknown error occurred");
    }
  };

  return (
    <div className="sign-up-wrapper">
      <h1>Sign Up</h1>
      <form id="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="sign-up-input-wrapper">
          <input type="text" placeholder="Username" {...register("username")} />
          <div className="up-form-icon">
            <FaRegUserCircle />
          </div>
          {errors.username && (
            <p className="errors-wrapper">{errors.username.message}</p>
          )}
        </div>
        <div className="sign-up-input-wrapper">
          <input type="email" placeholder="Email" {...register("email")} />
          <div className="up-form-icon">
            <MdOutlineAlternateEmail />
          </div>
          {errors.email && (
            <p className="errors-wrapper">{errors.email.message}</p>
          )}
        </div>
        <div className="sign-up-input-wrapper">
          <input
            type={isVisible ? "text" : "password"}
            placeholder="Password"
            {...register("password")}
          />
          {isVisible ? (
            <div className="up-form-icon">
              {" "}
              <FaRegEyeSlash />
            </div>
          ) : (
            <div className="up-form-icon" style={{ cursor: "pointer" }}>
              <FaRegEye onClick={() => setIsVisible(true)} />
            </div>
          )}
          {errors.password && (
            <p className="errors-wrapper">{errors.password.message}</p>
          )}
        </div>
        <div className="sign-up-input-wrapper">
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          <div className="up-form-icon">
            <GiConfirmed />
          </div>
          {errors.confirmPassword && (
            <p className="errors-wrapper">{errors.confirmPassword.message}</p>
          )}
        </div>
        <button className="sign-up-submit-btn" type="submit">
          Create an account
        </button>
      </form>
      <div className="navigate-to-login">
        Already have an account?{" "}
        <span style={{ color: "orangered", cursor: "pointer" }}>
          <Link to="/" style={{ color: "inherit" }}>
            Log in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default BasicInfo;
