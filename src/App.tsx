import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Auth from "./pages/Auth/Auth";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import { useAppSelector } from "./redux/hook";
import Admin from "./pages/Admin/Admin";
import VendorAccount from "./pages/VendorAccount/VendorAccount";
import { useEffect, useState } from "react";

function App() {
  const { customer } = useAppSelector((state) => state.customer);
  const { vendor } = useAppSelector((state) => state.vendor);
  const [existingUser, setExistingUser] = useState<boolean>(
    JSON.parse(localStorage.getItem("user") || "false")
  );

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "false");
    setExistingUser(user);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Auth />} />
        <Route
          path="/customer/*"
          element={
            customer || existingUser ? <UserDashboard /> : <Navigate to="/" />
          }
        />
        <Route
          path="/admin/*"
          element={customer || existingUser ? <Admin /> : <Navigate to="/" />}
        />
        <Route
          path="/vendor/*"
          element={
            vendor || existingUser ? <VendorAccount /> : <Navigate to="/" />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
