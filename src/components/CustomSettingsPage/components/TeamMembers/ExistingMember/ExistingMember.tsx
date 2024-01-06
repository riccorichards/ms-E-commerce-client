import { FC } from "react";
import ImageWraper from "../../../../ImageWraper";
import "./ExistingMember.scss";
import { VendorTeamMembersType } from "../../../../../redux/type.slice";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hook";
import { removeMember } from "../../../../../redux/appCall/VendorAppCall";

const ExistingMember: FC<{
  member: VendorTeamMembersType;
}> = ({ member }) => {
  const dispatch = useAppDispatch();
  const { customer } = useAppSelector((state) => state.customer);
  function handleRemoveMember(memberId: string | undefined) {
    dispatch(removeMember(memberId));
  }

  return (
    <div className="existing-member-wrapper">
      {!customer && (
        <button
          className="remove-team-member"
          onClick={() => handleRemoveMember(member._id)}
        >
          Delete
        </button>
      )}
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
