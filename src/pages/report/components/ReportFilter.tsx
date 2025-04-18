import CustomSearchInputQueryWithLabel from '@/components/form-related/CustomSearchInputQueryWithLabel';
import CustomSelectQueryWithLabel from '@/components/form-related/CustomSelectQueryWithLabel';
import { PARAM_FIELD } from '@/utils/enum/param-field.enum';
import { TRIP_STATUS } from '@/utils/enum/trip/trip-status.enum';

export default function ReportFilter() {
  return (
    <div>
      <div className='flex flex-wrap items-center justify-start gap-5'>
        <CustomSearchInputQueryWithLabel label={'Name'} searchParamName={PARAM_FIELD.NAME} />
        <CustomSearchInputQueryWithLabel label={'Driver Name'} searchParamName={PARAM_FIELD.NAME} />
        <CustomSearchInputQueryWithLabel label={'Trip ID'} searchParamName={PARAM_FIELD.TRIP_ID} />
        <CustomSearchInputQueryWithLabel label={'Location'} searchParamName={PARAM_FIELD.LOCATION} />
        <CustomSelectQueryWithLabel
          label={'Status'}
          queryKey={PARAM_FIELD.SEARCH_BY}
          options={[
            {
              label: 'Accepted',
              value: TRIP_STATUS.ACCEPTED,
            },
            {
              label: 'Waiting',
              value: TRIP_STATUS.PENDING,
            },
            {
              label: 'Declined',
              value: TRIP_STATUS.DECLINED,
            },
          ]}
          className='w-40'
        />
      </div>
    </div>
  );
}
