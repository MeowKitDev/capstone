import CustomSelectQueryWithLabel from '@/components/form-related/CustomSelectQueryWithLabel';
import { FEEDBACK_STATUS } from '@/utils/enum/feedback/feedback-status.enum';
import { PARAM_FIELD } from '@/utils/enum/param-field.enum';

export default function FeedbackFilter() {
  return (
    <div>
      <div className='flex flex-wrap items-center justify-start gap-5'>
        <CustomSelectQueryWithLabel
          label={'Status'}
          queryKey={PARAM_FIELD.STATUS}
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
