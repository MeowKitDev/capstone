import CustomSearchInputQueryWithLabel from '@/components/form-related/CustomSearchInputQueryWithLabel';
import CustomSelectQueryWithLabel from '@/components/form-related/CustomSelectQueryWithLabel';
import { PARAM_FIELD } from '@/utils/enum/param-field.enum';

export default function TransactionFilter() {
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
          ]}
          className='w-40'
        />
        <CustomSelectQueryWithLabel
          label={'Payment Method'}
          queryKey={PARAM_FIELD.SEARCH_BY}
          options={[
            {
              label: 'Credit Card',
              value: 'CREDIT_CARD',
            },
          ]}
          className='w-40'
        />
        <CustomSelectQueryWithLabel
          label={'Status'}
          queryKey={PARAM_FIELD.SEARCH_BY}
          options={[
            {
              label: 'Accepted',
              value: 'ACCEPTED',
            },
            {
              label: 'Pending',
              value: 'PENDING',
            },
            {
              label: 'Rejected',
              value: 'REJECTED',
            },
          ]}
          className='w-40'
        />
      </div>
    </div>
  );
}
