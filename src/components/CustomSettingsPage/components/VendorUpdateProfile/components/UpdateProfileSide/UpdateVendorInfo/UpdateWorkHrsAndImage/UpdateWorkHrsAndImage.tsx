import { useForm } from "react-hook-form";
import "./UpdateWorkHrsAndImage.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineSend } from "react-icons/ai";
import { workingHrsSchema, workingHrsSchemaType } from "./timeValidation";
import UploadImage from "../../../../../../../UploadImage/UploadImage";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../../redux/hook";
import { addWorkingHrs } from "../../../../../../../../redux/appCall/VendorAppCall";

const UpdateWorkHrsAndImage = () => {
  const { vendor } = useAppSelector((state) => state.vendor);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<workingHrsSchemaType>({
    resolver: zodResolver(workingHrsSchema),
  });
  if (!vendor) return null;

  const onSubmit = (values: workingHrsSchemaType) => {
    dispatch(addWorkingHrs(values));
    reset();
  };

  return (
    <div className="update-vendor-image-hrs">
      <UploadImage
        target={vendor}
        to="vendor"
        size="150px"
        isSendToService="0"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-hrs-item">
          <input
            type="text"
            placeholder="workHrs => (00:00)"
            defaultValue={vendor.workingHrs?.workingDays}
            {...register("workingDays")}
          />
          <button>
            <AiOutlineSend />
          </button>
          {errors.workingDays && <p>{errors.workingDays.message}</p>}
        </div>
        <div className="form-hrs-item">
          <input
            type="text"
            placeholder="weekend => (00:00)"
            defaultValue={vendor.workingHrs?.weekend}
            {...register("weekend")}
          />
          <button>
            <AiOutlineSend />
          </button>
          {errors.weekend && <p>{errors.weekend.message}</p>}
        </div>
      </form>
    </div>
  );
};

export default UpdateWorkHrsAndImage;
