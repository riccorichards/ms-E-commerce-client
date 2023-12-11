import "./Auth.scss";
import SignUp from "./authComponents/SignUp/SignUp";
import Login from "./authComponents/Login/Login";
import { Route, Routes } from "react-router-dom";

const Auth = () => {
  return (
    <div className="auth-wrapper">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default Auth;
