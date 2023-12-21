import { FC } from "react";
import NavSettings from "./NavSettings/NavSettings";
import "./Settings.scss";
import SetComponents from "./components/SetComponents";

interface SettingOptions {
  setNavLInk: {
    target: string; // for dynamic root in navlinks
    title: string; // for title each page
    desc: string; // for desc each page
  }[];
  target: string;
}

//root/settigs/title
const Settings: FC<{ settingOptions: SettingOptions }> = ({
  settingOptions,
}) => {
  return (
    <div className="customer-settings-wrapper">
      <NavSettings setNavLink={settingOptions.setNavLInk} />
      <SetComponents target={settingOptions.target} />
    </div>
  );
};

export default Settings;
