import * as yup from 'yup';

export const adminLoginSchema = yup.object({
  name: yup
    .string()
    .min(2)
    .max(25)
    .required('Please enter your name'),

  password: yup
    .string()
    .min(6)
    .required('Enter your password'),

});
