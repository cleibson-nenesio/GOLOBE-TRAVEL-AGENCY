import * as yup from "yup";

export const emailSchema = yup?.object()?.shape({
  email: yup
    ?.string()
    ?.email("Please enter an valid email")
    ?.required("Please enter an email"),
});
