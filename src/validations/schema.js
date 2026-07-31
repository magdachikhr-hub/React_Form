import * as yup from "yup";

const schema = yup.object({
  username: yup
    .string()
    .required("username is required")
    .min(2, "minimum 2 characters")
    .max(20, "maximum 20 characters"),
});

export default schema;
