import { z } from "zod";

export const estimateSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone"),
  location: z.string().min(2, "City/State, please"),
  vehicle: z.string().min(2, "Make / Model / Year"),
  service: z.string().min(2, "Choose a service"),
  details: z.string().min(10, "Tell me a bit more about the issue"),
  contact: z.enum(["email", "phone"]),
  consent: z.literal(true, { errorMap: () => ({ message: "Consent required" }) }),
});
