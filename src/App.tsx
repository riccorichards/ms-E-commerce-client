import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Auth from "./pages/Auth/Auth";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import { useAppSelector } from "./redux/hook";
import Admin from "./pages/Admin/Admin";
import VendorAccount from "./pages/VendorAccount/VendorAccount";

function App() {
  const { customer } = useAppSelector((state) => state.customer);
  const { vendor } = useAppSelector((state) => state.vendor);
  const token = () => {
    return document.cookie.split("=")[1] ? document.cookie.split("=")[1] : null;
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Auth />} />
        <Route
          path="/customer/*"
          element={
            customer || token() ? <UserDashboard /> : <Navigate to="/" />
          }
        />
        <Route
          path="/admin/*"
          element={customer || token() ? <Admin /> : <Navigate to="/" />}
        />
        <Route
          path="/vendor/*"
          element={vendor || token() ? <VendorAccount /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
