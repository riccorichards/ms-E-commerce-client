import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Auth from "./pages/Auth/Auth";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import { useAppSelector } from "./redux/hook";
import Admin from "./pages/Admin/Admin";
import VendorAccount from "./pages/VendorAccount/VendorAccount";
import { useEffect, useState } from "react";
import Deliveryman from "./pages/Deliveryman/Deliveryman";
import SnackBar from "./components/SnackBar/SnackBar";
import SnackBarContext from "./components/SnackBarContext";

function App() {
  const { customer } = useAppSelector((state) => state.customer);
  const { vendor } = useAppSelector((state) => state.vendor);
  const { deliveyman } = useAppSelector((state) => state.deliveryman);
  const [type, setType] = useState<string | null>(null);
  const [runSnackBar, setRunSnackBar] = useState<boolean>(false);
  const [existingUser, setExistingUser] = useState<boolean>(
    JSON.parse(localStorage.getItem("user") || "false")
  );

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "false");
    setExistingUser(user);
  }, [customer, vendor, deliveyman]);

  const values = { type, setType, runSnackBar, setRunSnackBar };
  return (
    <SnackBarContext.Provider value={values}>
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
          <Route
            path="/deliveryman"
            element={
              deliveyman || existingUser ? <Deliveryman /> : <Navigate to="/" />
            }
          />
        </Routes>
        {runSnackBar && <SnackBar />}
      </div>
    </SnackBarContext.Provider>
  );
}

export default App;
