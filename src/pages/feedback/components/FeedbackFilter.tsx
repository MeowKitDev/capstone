/* eslint-disable react-hooks/exhaustive-deps */
import CustomSearchInputQueryWithLabel from '@/components/form-related/CustomSearchInputQueryWithLabel';
import CustomSelectQueryWithLabel from '@/components/form-related/CustomSelectQueryWithLabel';
import { FEEDBACK_STATUS } from '@/utils/enum/feedback/feedback-status.enum';
import { PARAM_FIELD } from '@/utils/enum/param-field.enum';
import queryString from 'query-string';
import { useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function FeedbackFilter() {
  const location = useLocation();
  const params = queryString.parse(location.search);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    delete params[PARAM_FIELD.PAGE];
    navigate({ search: queryString.stringify(params) });
  }, [navigate, params[PARAM_FIELD.STATUS]]);

  return (
    <div>
      <div className='flex flex-wrap items-center justify-start gap-5'>
        <CustomSearchInputQueryWithLabel
          label={'Mã chuyến đi'}
          searchParamName={PARAM_FIELD.TRIP_ID}
          placeholder='Nhập mã chuyến'
        />
        <CustomSelectQueryWithLabel
          label={'Trạng thái'}
          queryKey={PARAM_FIELD.STATUS}
          placeholder='Chọn trạng thái'
          options={[
            {
              label: 'Đã xử lý',
              value: FEEDBACK_STATUS.DONE,
            },
            {
              label: 'Chưa xử lý',
              value: FEEDBACK_STATUS.WAITING,
            },
          ]}
          className='w-40'
        />
      </div>
    </div>
  );
}
