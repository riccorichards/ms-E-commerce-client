import { TypeOf, string, z } from "zod";

export const workingHrsSchema = z.object({
  workingDays: string().regex(
    /^([01]\d|2[0-3]):([0-5]\d)$/,
    "Invalid Format of time"
  ), //[01]\d => 00 to 19 (\d => 0-9) | => (or) 2[0-3] => (20...23) and [0-5]\d => 00-59
  weekend: string().regex(
    /^([01]\d|2[0-3]):([0-5]\d)$/,
    "Invalid Format of time"
  ),
});

export type workingHrsSchemaType = TypeOf<typeof workingHrsSchema>;
