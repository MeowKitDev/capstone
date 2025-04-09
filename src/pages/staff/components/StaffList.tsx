import CirclePlusIcon from '@/components/icons/CirclePlusIcon';
import CustomTablePagination from '@/components/table/CustomTablePagination';
import { TableBuilder } from '@/components/table/TableBuilder';
import { StaffDTO } from '@/data/staff/dto/staff.dto';
import { useGetStaffListQuery } from '@/data/staff/staff.api';
import { staffListRequestParamsToFilter } from '@/data/staff/staff.service';
import { PARAM_FIELD } from '@/utils/enum/param-field.enum';
import { Button } from 'antd';
import queryString from 'query-string';
import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { StaffColumn } from './column/StaffColumn';
import { StaffCreateModal } from './StaffCreateModal';
import StaffFilter from './StaffFilter';

export default function StaffList() {
  const location = useLocation();
  const params = queryString.parse(location.search);
  const [isShownCreateModal, setIsShownCreateModal] = useState(false);

  const { staffListFilter } = useMemo(() => {
    const staffListFilter = staffListRequestParamsToFilter(params);
    return { staffListFilter };
  }, [params]);

  const { data: staffListData, isLoading, isFetching } = useGetStaffListQuery(staffListFilter);

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex w-full items-end justify-between'>
        <StaffFilter />
        <Button
          className='rounded-md bg-primary-500 py-5 ease-linear hover:bg-primary-500'
          onClick={() => setIsShownCreateModal(true)}
          type='primary'>
          <CirclePlusIcon className='h-4 w-4 text-white' />
          <span className='ml-2 text-base font-normal text-white'>Thêm tài khoản</span>
        </Button>
      </div>
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
      <StaffCreateModal open={isShownCreateModal} setOpen={() => setIsShownCreateModal(false)} />
    </div>
  );
}
