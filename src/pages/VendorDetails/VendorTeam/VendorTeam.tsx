import ExistingMember from "../../../components/CustomSettingsPage/components/TeamMembers/ExistingMember/ExistingMember";
import { useAppSelector } from "../../../redux/hook";
import "./VendorTeam.scss";

const VendorTeam = () => {
  const { specVendor, vendor } = useAppSelector((state) => state.vendor);

  const target = specVendor?.teamMember || vendor?.teamMember;

  return (
    <section className="vendor-team-wrapper">
      <h2 style={{ borderBottom: "2px solid orangered", width: "fit-content" }}>
        Our master shefs
      </h2>
      <main className="vendor-teams">
        {target && target?.length > 0 ? (
          target.map((member) => (
            <ExistingMember
              member={member}
              key={typeof member === "object" ? member._id : member}
            />
          ))
        ) : (
          <section
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <h3>Not added Personal Yet!!!</h3>
          </section>
        )}
      </main>
    </section>
  );
};

export default VendorTeam;
