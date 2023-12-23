import { string, z } from "zod";

export interface MemberSchemaType {
  name: string;
  position: string;
  description: string;
}

export const MemberValidationSchema = z.object({
  name: string().min(1, { message: "Name is Required" }),
  position: string().min(1, { message: "Position is Required" }).trim(),
  description: string().min(1, { message: "Description is Required" }).trim(),
});
