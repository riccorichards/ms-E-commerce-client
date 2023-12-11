import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Auth from "./pages/Auth/Auth";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import { useState } from "react";
import AuthContent from "./components/AuthContenxt";

function App() {
  const [isValidCustomer, setIsValidCustomer] = useState<boolean>(false);

  const values = { isValidCustomer, setIsValidCustomer };
  return (
    <AuthContent.Provider value={values}>
      <div className="App">
        <Routes>
          <Route path="/*" element={<Auth />} />
          <Route path="/customer/*" element={<UserDashboard />} />
        </Routes>
      </div>
    </AuthContent.Provider>
  );
}

export default App;
