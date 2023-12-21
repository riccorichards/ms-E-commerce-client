import { FC, useRef } from "react";
import ImageWraper from "../../../../ImageWraper";
import "./MemberTemplate.scss";
import { FaCameraRetro } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { MemberSchemaType, MemberValidationSchema } from "./MemberValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppSelector } from "../../../../../redux/hook";

const MemberTemplate: FC<{
  removeNewMember: () => void;
  uploadMemberImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ removeNewMember, uploadMemberImage }) => {
  const memberImage = useAppSelector((state) => state.vendor.imageUrl);

  const imageRef = useRef<HTMLInputElement | null>(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<MemberSchemaType>({
    resolver: zodResolver(MemberValidationSchema),
  });

  const onSubmit = (values: MemberSchemaType) => {
    console.log({ ...values, image: memberImage });
  };

  return (
    <div className="add-new-team-member">
      <button className="remove-team-member" onClick={removeNewMember}>
        Delete
      </button>
      <div className="add-new-team-member-img">
        <ImageWraper
          image={memberImage ? memberImage : undefined}
          size="200px"
          nonCircle
          radiusSize="15px"
        />
        <div
          className="team-member-img-icon"
          onClick={() => imageRef.current?.click()}
        >
          <FaCameraRetro />
        </div>
        <input
          type="file"
          hidden
          ref={imageRef}
          onChange={(e) => uploadMemberImage(e)}
        />
      </div>
      <form id="add-new-team-member-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="add-new-member-form-item">
          <input type="text" placeholder="Name" {...register("name")} />
          {errors.name && (
            <p className="errors-wrapper">{errors.name.message}</p>
          )}
        </div>
        <div className="add-new-member-form-item">
          <input type="text" placeholder="Position" {...register("position")} />
          {errors.position && (
            <p className="errors-wrapper">{errors.position.message}</p>
          )}
        </div>
        <div className="add-new-member-form-item">
          <input type="text" placeholder="Description" {...register("desc")} />
          {errors.desc && (
            <p className="errors-wrapper">{errors.desc.message}</p>
          )}
        </div>
        <button type="submit">Save new member</button>
      </form>
    </div>
  );
};

export default MemberTemplate;
