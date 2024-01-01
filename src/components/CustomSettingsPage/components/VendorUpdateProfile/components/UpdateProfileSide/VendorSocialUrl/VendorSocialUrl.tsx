import "./VendorSocialUrl.scss";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaQuestion,
} from "react-icons/fa";
import { RiDeleteBackLine } from "react-icons/ri";

import { CiCirclePlus } from "react-icons/ci";
import { useForm } from "react-hook-form";
import {
  SocUrlValidatorSchema,
  SocUrlValidatorSchemaType,
} from "./socUrlValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../redux/hook";
import {
  addSocUrl,
  removeSocUrl,
} from "../../../../../../../redux/appCall/VendorAppCall";

const VendorSocialUrl = () => {
  const dispatch = useAppDispatch();
  const { vendor } = useAppSelector((state) => state.vendor);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SocUrlValidatorSchemaType>({
    resolver: zodResolver(SocUrlValidatorSchema),
  });

  if (!vendor) return null;

  const onSubmit = (value: SocUrlValidatorSchemaType) => {
    dispatch(addSocUrl(value));
    reset();
  };

  const removeUrl = (urlTitle: string) => {
    dispatch(removeSocUrl(urlTitle));
  };
  return (
    <div className="vendor-social-url-wrapper">
      <h3>Social Urls</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span style={{ color: "orangered" }}>
          <FaQuestion />
        </span>
        <input
          type="text"
          placeholder="Add facebook, instagram or twitter  Url here..."
          {...register("url")}
        />
        <button type="submit">
          <CiCirclePlus />
        </button>
        {errors.url && <p>{errors.url.message}</p>}
      </form>
      {vendor.socialMedia &&
        vendor.socialMedia.map((url) => (
          <div className="specific-social-url" key={url.title}>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <span
                style={{
                  color:
                    url.title.toLowerCase() === "facebook"
                      ? "blue"
                      : url.title.toLowerCase() === "instagram"
                      ? "#ea519b"
                      : "#04ddc5",
                }}
              >
                {url.title.toLowerCase() === "facebook" ? (
                  <FaFacebookSquare />
                ) : url.title.toLowerCase() === "instagram" ? (
                  <FaInstagramSquare />
                ) : (
                  <FaTwitterSquare />
                )}
              </span>
              <span>{url.url}</span>
            </div>
            <div className="remove-url" onClick={() => removeUrl(url.title)}>
              <RiDeleteBackLine />
            </div>
          </div>
        ))}
    </div>
  );
};

export default VendorSocialUrl;
