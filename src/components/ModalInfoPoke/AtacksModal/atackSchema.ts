import * as yup from "yup";

export const atackSchema = yup.object().shape({
  atack: yup.string().required(),
});
