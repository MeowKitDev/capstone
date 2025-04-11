import CustomTablePagination from '@/components/table/CustomTablePagination';
import { TableBuilder } from '@/components/table/TableBuilder';
import { FeedbackDTO } from '@/data/feedback/dto/feedback.dto';
import { useGetFeedbackListQuery } from '@/data/feedback/feedback.api';
import { feedbackListRequestParamsToFilter } from '@/data/feedback/feedback.service';
import { PARAM_FIELD } from '@/utils/enum/param-field.enum';
import queryString from 'query-string';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { FeedbackColumn } from './comlumn/FeedbackColumn';
import FeedbackFilter from './FeedbackFilter';

export default function FeedbackList() {
  const location = useLocation();
  const params = queryString.parse(location.search);

  const { feedbackListFilter } = useMemo(() => {
    const feedbackListFilter = feedbackListRequestParamsToFilter(params);
    return { feedbackListFilter };
  }, [params]);

  const { data, isLoading, isFetching } = useGetFeedbackListQuery(feedbackListFilter);

  return (
    <div className='flex flex-col gap-5'>
      <FeedbackFilter />
      <TableBuilder<FeedbackDTO>
        rowKey='feedbackID'
        columns={FeedbackColumn()}
        data={data?.content ?? []}
        isLoading={isLoading || isFetching}
      />
      <CustomTablePagination
        totalItems={data?.totalElements || 1}
        queryKey={PARAM_FIELD.PAGE}
        isScrollAfterPageChange
      />
    </div>
  );
}
