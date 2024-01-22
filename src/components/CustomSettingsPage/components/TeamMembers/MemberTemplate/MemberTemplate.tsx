import { FC, useEffect, useRef, useState } from "react";
import ImageWraper from "../../../../ImageWraper";
import "./MemberTemplate.scss";
import { FaCameraRetro } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { MemberSchemaType, MemberValidationSchema } from "./MemberValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hook";
import { addNewMember } from "../../../../../redux/appCall/VendorAppCall";

const MemberTemplate: FC<{
  uploadMemberImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ uploadMemberImage }) => {
  const memberImage = useAppSelector((state) => state.vendor.imageUrl);
  const dispatch = useAppDispatch();
  const [imageError, setImageError] = useState<boolean>(false);
  const imageRef = useRef<HTMLInputElement | null>(null);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<MemberSchemaType>({
    resolver: zodResolver(MemberValidationSchema),
  });

  useEffect(() => {
    if (memberImage) setImageError(false);
  }, [memberImage]);

  const onSubmit = (values: MemberSchemaType) => {
    if (memberImage) {
      dispatch(addNewMember({ ...values, image: memberImage }));
      reset();
      setImageError(false);
    } else {
      setImageError(true);
    }
  };

  return (
    <main className="add-new-team-member">
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
        {imageError && <p className="image-error">Please Provide Image</p>}
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
          <input
            type="text"
            placeholder="Description"
            {...register("description")}
          />
          {errors.description && (
            <p className="errors-wrapper">{errors.description.message}</p>
          )}
        </div>
        <button type="submit">Save new member</button>
      </form>
    </main>
  );
};

export default MemberTemplate;
