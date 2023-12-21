import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import MemberTemplate from "./MemberTemplate/MemberTemplate";
import "./TeamMembers.scss";
import { IoMdAdd } from "react-icons/io";
import { uploadMemberImage } from "../../../../redux/appCall/VendorAppCall";
import { VendorTeamMembersType } from "../../../../redux/type.slice";

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

  function handleAddNewMember() {}

  function handleRemoveNewMember() {}

  return (
    <div className="vendor-team-member-wrapper">
      <h1>
        <span style={{ color: "orangered" }}>{vendor?.name}</span>'s Team Place
      </h1>
      <div className="add-new-team-member-wrapper">
        {teamMember &&
          teamMember.map((member) => (
            <MemberTemplate
              uploadMemberImage={(e) => handleUploadImageToMember(e)}
              removeNewMember={() => handleRemoveNewMember()}
              key={member.description}
            />
          ))}
        <div className="add-one-more-member">
          <div
            className="add-one-more-member-icon"
            onClick={() => handleAddNewMember()}
          >
            <IoMdAdd style={{ fontSize: "50px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
