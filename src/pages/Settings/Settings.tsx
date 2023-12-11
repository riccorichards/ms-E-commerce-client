import NavSettings from "./NavSettings/NavSettings";
import "./Settings.scss";
import SetComponents from "./components/SetComponents";

const Settings = () => {
  return (
    <div className="customer-settings-wrapper">
      <NavSettings />
      <SetComponents />
    </div>
  );
};

export default Settings;
