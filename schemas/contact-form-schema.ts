import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const contactFormSchema = z
.object({
    name: z
    .string()
    .min(1, "Name is required")
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be at most 30 characters")
    .regex(
      /^[a-zA-Z0-9_\s]+$/,
      "Invalid name. Letters, numbers, spaces or underscores only"
    )
    .regex(/^[a-zA-Z][a-zA-Z0-9_\s]*$/, "Name must start with a letter"),
    surname: z
    .string()
    .min(1, "Surname is required")
    .min(3, "Surname must be at least 3 characters")
    .max(30, "Surname must be at most 30 characters")
    .regex(
      /^[a-zA-Z0-9_\s]+$/,
      "Invalid surname. Letters, numbers, spaces or underscores only"
    )
    .regex(/^[a-zA-Z][a-zA-Z0-9_\s]*$/, "Surname must start with a letter"),
  phone: z
  .string()
  .regex(phoneRegex, "Invalid number!"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  message: z
  .string()
  .min(1, "Body is required")
  .max(30, "at most 30 characters"),
  
  date: z.string(),
  // privacyCheck: z.literal<boolean>(true)
  privacyCheck: z.boolean().refine((val) => val === true, {
    message: "Please read and accept the terms and conditions",
  })
  
})