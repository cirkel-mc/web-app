import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Please input correct email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
});
