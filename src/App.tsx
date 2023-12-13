import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Auth from "./pages/Auth/Auth";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import { useAppSelector } from "./redux/hook";

function App() {
  const { customer } = useAppSelector((state) => state.customer);
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Auth />} />
        <Route
          path="/customer/*"
          element={customer ? <UserDashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
