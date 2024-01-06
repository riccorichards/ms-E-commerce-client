import { useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import "./Login.scss";
import { useForm } from "react-hook-form";
import { LoginInputType, loginSchema } from "../Validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { fetchLogin } from "../../../../redux/appCall/AuthAppCall";
import { Link, useNavigate } from "react-router-dom";
import { vendorLogin } from "../../../../redux/appCall/VendorAppCall";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [user, setUser] = useState("customer");
  const dispatch = useAppDispatch();
  const { customer } = useAppSelector((state) => state.customer);
  const { vendor } = useAppSelector((state) => state.vendor);
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
      if (user === "customer") {
        dispatch(fetchLogin(value));
      } else if (user === "vendor") {
        dispatch(vendorLogin(value));
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        throw new Error(error.message);
      }
      throw new Error("Server Internal");
    }
  };

  useEffect(() => {
    if (customer) {
      navigate(customer.isAdmin ? "/admin/home" : "/customer/home");
    } else if (vendor) {
      navigate("/vendor/home");
    }
    if (customer || vendor) {
      localStorage.setItem("user", JSON.stringify(true));
    }
    reset();
  }, [customer, vendor]); //eslint-disable-line

  return (
    <div className="login-wrapper">
      <h2>Welcome to RiccoFood</h2>
      <div className="switch-user-btns-wrapper">
        <button
          className="switch-user-btn"
          style={{
            backgroundColor: user === "customer" ? "hsl(16, 100%, 50%)" : "",
          }}
          onClick={() => setUser("customer")}
        >
          Customer
        </button>
        <button
          className="switch-user-btn"
          style={{
            backgroundColor: user === "vendor" ? "hsl(16, 100%, 50%)" : "",
          }}
          onClick={() => setUser("vendor")}
        >
          Restaurant
        </button>
        <button
          className="switch-user-btn"
          style={{
            backgroundColor: user === "deliveryman" ? "hsl(16, 100%, 50%)" : "",
          }}
          onClick={() => setUser("deliveryman")}
        >
          Deliveryman
        </button>
      </div>
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
