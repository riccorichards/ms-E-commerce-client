import { FC } from "react";
import ImageWraper from "../../../../ImageWraper";
import "./ExistingMember.scss";
import { VendorTeamMembersType } from "../../../../../redux/type.slice";

const ExistingMember: FC<{
  member: VendorTeamMembersType;
  removeMember: (value: string | undefined) => void;
}> = ({ member, removeMember }) => {
  return (
    <div className="existing-member-wrapper">
      <button
        className="remove-team-member"
        onClick={() => removeMember(member._id)}
      >
        Delete
      </button>
      <ImageWraper nonCircle image={member.image} size="200px" />
      <div className="existing-member">
        <div className="existing-member-item-wrapper">
          <span className="existing-member-item">Name:</span>
          <h3>{member.name}</h3>
        </div>
        <div className="existing-member-item-wrapper">
          <span className="existing-member-item">Position:</span>
          <p>{member.position}</p>
        </div>
        <div className="existing-member-item-wrapper">
          <span className="existing-member-item">Description:</span>
          <p>{member.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExistingMember;
