import { UserGetAllDTO } from '@/@types/dto/userDTO';
import CustomTablePagination from '@/components/table/CustomTablePagination';
import { TableBuilder } from '@/components/table/TableBuilder';
import useUsersData from '@/data/services/api/user/useUserData';
import { PARAM_FIELD } from '@/utils/enum/param-field.enum';
import { useEffect } from 'react';
import { StaffColumn } from './column/StaffColumn';
import StaffFilter from './StaffFilter';

export default function StaffList() {
  const { UserData, isLoading } = useUsersData();

  useEffect(() => {
    console.table(UserData);
  }, [UserData]);

  return (
    <div className='flex flex-col gap-5'>
      <StaffFilter />
      <TableBuilder<UserGetAllDTO>
        rowKey='userId'
        columns={StaffColumn()}
        data={UserData ?? []}
        isLoading={isLoading}
      />
      <CustomTablePagination
        totalItems={UserData?.length || 1}
        queryKey={PARAM_FIELD.CURRENT_PAGE}
        isScrollAfterPageChange
      />
    </div>
  );
}
