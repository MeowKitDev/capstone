import * as yup from 'yup';
import { allFormSchema } from '../AllFormSchema';

export const createPackageSchema = yup.object().shape({
  packageName: allFormSchema.packageName,
  packageTime: allFormSchema.packageTime,
  packageBonusTime: allFormSchema.packageBonusTime,
  packagePrice: allFormSchema.packagePrice,
  packageDescription: yup.string().optional(),
  expiredDate: yup.date().required('Vui lòng chọn ngày hết hạn'),
});
