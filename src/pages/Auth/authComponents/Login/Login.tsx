import { useContext, useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import "./Login.scss";
import { useForm } from "react-hook-form";
import { LoginInputType, loginSchema } from "../Validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "../../../../redux/hook";
import { fetchLogin } from "../../../../redux/appCall/AuthAppCall";
import { Link, useNavigate } from "react-router-dom";
import AuthContent from "../../../../components/AuthContenxt";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);

  const getContext = useContext(AuthContent);
  const setIsValidCustomer = getContext?.setIsValidCustomer;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInputType>({
    resolver: zodResolver(loginSchema),
  });
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (isVisible) {
        setIsVisible(false);
      }
    }, 500);
    return () => clearTimeout(timeOut);
  }, [isVisible]);

  const onSubmit = (value: LoginInputType) => {
    try {
      dispatch(fetchLogin(value));
      reset();
      if (!setIsValidCustomer) return null;
      setIsValidCustomer(true);
      navigate("/customer/home");
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        throw new Error(error.message);
      }
      throw new Error("Server Internal");
    }
  };
  return (
    <div className="login-wrapper">
      <h1>Welcome to Ricco</h1>
      <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="login-input-wrapper">
          <input type="email" placeholder="Email" {...register("email")} />
          <div className="up-form-icon">
            <MdOutlineAlternateEmail />
          </div>
          {errors.email && (
            <p className="errors-wrapper">{errors.email.message}</p>
          )}
        </div>
        <div className="login-input-wrapper">
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
        <button className="login-submit-btn" type="submit">
          Log in
        </button>
      </form>
      <div className="navigate-to-login">
        <div className="forgot-password">forgot password?</div>
        Have not an account yet?{" "}
        <span style={{ color: "orangered", cursor: "pointer" }}>
          <Link to="/sign-up" style={{ color: "inherit" }}>
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
