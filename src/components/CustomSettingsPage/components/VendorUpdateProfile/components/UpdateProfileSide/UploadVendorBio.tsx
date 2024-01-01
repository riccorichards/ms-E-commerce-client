import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hook";
import { addBioInfo } from "../../../../../../redux/appCall/VendorAppCall";

const UploadVendorBio = () => {
  const [bio, setBio] = useState<string>("");
  const [bioInvalid, setBioInvalid] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const { vendor } = useAppSelector((state) => state.vendor);
  const submitBio = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const bioText = e.target.value;
    setBio(bioText);
  };

  const handleSubmition = () => {
    if (bio.length > 3 && bio.length < 150) {
      dispatch(addBioInfo({ bio: bio }));
      setBioInvalid(null);
    } else {
      setBioInvalid("Invalid length(3-150) of Bio text...");
    }
  };

  return (
    <div
      style={{
        padding: "5px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <textarea
        placeholder="Vendor bio here... validation min(3) && max(150)"
        rows={4}
        defaultValue={vendor?.about}
        onChange={submitBio}
      />
      {bioInvalid && (
        <p style={{ fontSize: "12px", color: "red" }}>{bioInvalid}</p>
      )}
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "fit-content",
          padding: "5px 10px",
          alignSelf: "flex-end",
          border: "none",
          backgroundColor: "#008080",
          color: "#fff",
          borderRadius: "2.5px",
          cursor: "pointer",
        }}
        onClick={() => handleSubmition()}
      >
        <AiOutlineSend />
      </button>
    </div>
  );
};

export default UploadVendorBio;
