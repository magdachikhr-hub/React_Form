import * as yup from "yup";

const schema = yup.object({
  username: yup
    .string()
    .required("username is required")
    .min(2, "minimum 2 characters")
    .max(20, "maximum 20 characters"),

  email: yup
    .string()
    .email()
    .required("Email is required")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter a valid email address"
    ),
  password: yup
    .string()
    .min(8, "minimum 8 characters")
    .required("password is required")
    .matches("/@/", "please include @ in your password"),
});

export default schema;
