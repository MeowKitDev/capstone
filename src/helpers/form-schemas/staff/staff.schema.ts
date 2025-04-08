import * as yup from 'yup';
import { allFormSchema } from '../AllFormSchema';

export const staffSchema = yup.object().shape({
  username: allFormSchema.username,
  password: allFormSchema.password,
  email: allFormSchema.email,
  phoneNumber: allFormSchema.phoneNumber,
  firstName: allFormSchema.firstName,
  lastName: allFormSchema.lastName,
  dob: allFormSchema.dob,
  gender: allFormSchema.gender,
});
