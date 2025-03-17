import CustomSearchInputQueryWithLabel from '@/components/form-related/CustomSearchInputQueryWithLabel';
import CustomSelectQueryWithLabel from '@/components/form-related/CustomSelectQueryWithLabel';
import { PARAM_FIELD } from '@/utils/enum/param-field.enum';

export default function CensorDriverRequestFilter() {
  return (
    <div>
      <div className='flex flex-wrap items-center justify-start gap-5'>
        <CustomSearchInputQueryWithLabel label={'Search'} searchParamName={PARAM_FIELD.SEARCH_KEYWORD} />
        <CustomSelectQueryWithLabel
          label={'Search by'}
          queryKey={PARAM_FIELD.SEARCH_BY}
          options={[
            {
              label: 'ID',
              value: 'id',
            },
            {
              label: 'Name',
              value: 'name',
            },
            {
              label: 'Email',
              value: 'email',
            },
            {
              label: 'Phone',
              value: 'phone',
            },
            {
              label: 'Gender',
              value: 'gender',
            },
          ]}
          className='w-40'
        />
      </div>
    </div>
  );
}
