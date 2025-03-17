import * as yup from 'yup';
import { allFormSchema } from '../AllFormSchema';

export const loginAdminSchema = yup.object().shape({
  email: allFormSchema.email,
  password: allFormSchema.password,
});
