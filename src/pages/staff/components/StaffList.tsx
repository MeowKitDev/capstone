import CustomTablePagination from '@/components/table/CustomTablePagination';
import { TableBuilder } from '@/components/table/TableBuilder';
import { StaffDTO } from '@/data/staff/dto/staff.dto';
import { useGetStaffListQuery } from '@/data/staff/staff.api';
import { staffListRequestParamsToFilter } from '@/data/staff/staff.service';
import { PARAM_FIELD } from '@/utils/enum/param-field.enum';
import queryString from 'query-string';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { StaffColumn } from './column/StaffColumn';
import StaffFilter from './StaffFilter';

export default function StaffList() {
  const location = useLocation();
  const params = queryString.parse(location.search);

  const { staffListFilter } = useMemo(() => {
    const staffListFilter = staffListRequestParamsToFilter(params);
    return { staffListFilter };
  }, [params]);

  const { data: staffListData, isLoading, isFetching } = useGetStaffListQuery(staffListFilter);
  return (
    <div className='flex flex-col gap-5'>
      <StaffFilter />
      <TableBuilder<StaffDTO>
        rowKey='userId'
        columns={StaffColumn()}
        data={staffListData?.content ?? []}
        isLoading={isLoading || isFetching}
      />
      <CustomTablePagination
        totalItems={staffListData?.totalElements || 1}
        queryKey={PARAM_FIELD.PAGE}
        isScrollAfterPageChange
      />
    </div>
  );
}
