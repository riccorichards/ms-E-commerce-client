import "./VendorTeam.scss";

const shef =
  "https://i.pinimg.com/564x/b8/39/6a/b8396ae14a3b9cb506668dabdd462cfd.jpg";
const fake = [
  { id: 1, image: shef, name: "Zaza", designation: "Bla blaa blaa fdslfsd" },
  { id: 2, image: shef, name: "Zaza", designation: "Bla blaa blaa fdslfsd" },
  { id: 3, image: shef, name: "Zaza", designation: "Bla blaa blaa fdslfsd" },
];

const VendorTeam = () => {
  return (
    <div className="vendor-team-wrapper">
      <h1 style={{ borderBottom: "2px solid orangered", width: "fit-content" }}>
        Our master shefs
      </h1>
      <div className="vendor-teams">
        {fake.map((member) => (
          <div className="team-member">
            <img src={member.image} alt="member" />
            <h2>{member.name}</h2>
            <p>{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorTeam;
