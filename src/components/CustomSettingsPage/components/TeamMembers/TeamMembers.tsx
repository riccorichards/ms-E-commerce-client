import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import MemberTemplate from "./MemberTemplate/MemberTemplate";
import "./TeamMembers.scss";
import {
  removeMember,
  uploadMemberImage,
} from "../../../../redux/appCall/VendorAppCall";
import { VendorTeamMembersType } from "../../../../redux/type.slice";
import ExistingMember from "./ExistingMember/ExistingMember";

const TeamMembers = () => {
  const teamMember = useAppSelector(
    (state) => state.vendor.vendor?.teamMember
  ) as VendorTeamMembersType[];
  const dispatch = useAppDispatch();
  const { vendor } = useAppSelector((state) => state.vendor);

  function handleUploadImageToMember(
    e: React.ChangeEvent<HTMLInputElement | undefined>
  ) {
    const file = e.target.files;
    const formData = new FormData();
    if (file) {
      formData.append("upload", file[0]);
      formData.append("type", "profiles");
      formData.append("isCreated", "1");
    }
    dispatch(uploadMemberImage(formData));
  }

  function handleRemoveMember(memberId: string | undefined) {
    dispatch(removeMember(memberId));
  }

  return (
    <div className="vendor-team-member-wrapper">
      <h2>
        {vendor?.name}'s <span style={{ color: "orangered" }}>Team Place</span>
      </h2>
      <div className="add-new-team-member-wrapper">
        {teamMember &&
          teamMember.map((member) => (
            <ExistingMember
              member={member}
              key={member._id}
              removeMember={handleRemoveMember}
            />
          ))}
        <MemberTemplate uploadMemberImage={handleUploadImageToMember} />
      </div>
    </div>
  );
};

export default TeamMembers;
