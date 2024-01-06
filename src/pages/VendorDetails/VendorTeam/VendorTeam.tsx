import ExistingMember from "../../../components/CustomSettingsPage/components/TeamMembers/ExistingMember/ExistingMember";
import { useAppSelector } from "../../../redux/hook";
import "./VendorTeam.scss";

const VendorTeam = () => {
  const { specVendor, vendor } = useAppSelector((state) => state.vendor);

  const target = specVendor?.teamMember || vendor?.teamMember;

  return (
    <div className="vendor-team-wrapper">
      <h1 style={{ borderBottom: "2px solid orangered", width: "fit-content" }}>
        Our master shefs
      </h1>
      <div className="vendor-teams">
        {target &&
          target.map((member) => (
            <ExistingMember
              member={member}
              key={typeof member === "object" ? member._id : member}
            />
          ))}
      </div>
    </div>
  );
};

export default VendorTeam;
