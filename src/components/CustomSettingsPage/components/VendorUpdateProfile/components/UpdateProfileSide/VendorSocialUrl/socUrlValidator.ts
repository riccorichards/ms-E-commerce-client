import { TypeOf, object, string } from "zod";

export const SocUrlValidatorSchema = object({
  url: string().url("Invalid Url Format"),
});

export type SocUrlValidatorSchemaType = TypeOf<typeof SocUrlValidatorSchema>;
