import CustomSearchInputQueryWithLabel from '@/components/form-related/CustomSearchInputQueryWithLabel';
import { PARAM_FIELD } from '@/utils/enum/param-field.enum';

export default function StaffFilter() {
  return (
    <div className='flex flex-wrap items-center justify-start gap-5'>
      <CustomSearchInputQueryWithLabel label={'First Name'} searchParamName={PARAM_FIELD.FIRST_NAME} />
      <CustomSearchInputQueryWithLabel label={'Last Name'} searchParamName={PARAM_FIELD.LAST_NAME} />
      <CustomSearchInputQueryWithLabel label={'Phone'} searchParamName={PARAM_FIELD.PHONE} />
      <CustomSearchInputQueryWithLabel label={'Email'} searchParamName={PARAM_FIELD.EMAIL} />
    </div>
  );
}
