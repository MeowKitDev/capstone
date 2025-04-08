import * as yup from 'yup';
import { staffSchema } from './staff.schema';

export type StaffInput = yup.InferType<typeof staffSchema>;
