import CustomTablePagination from '@/components/table/CustomTablePagination';
import { TableBuilder } from '@/components/table/TableBuilder';
import { UserAccountDTO } from '@/data/user-account/dto/user-account.dto';
import { PARAM_FIELD } from '@/utils/enum/param-field.enum';
import { UserAccountData } from '../mocks/UserData';
import { UserAccountColumn } from './column/UserAccountColumn';
import UserAccountFilter from './UserAccountFilter';

export default function UserAccountList() {
  return (
    <div className='flex flex-col gap-5'>
      <UserAccountFilter />
      <TableBuilder<UserAccountDTO>
        rowKey='id'
        columns={UserAccountColumn()}
        data={UserAccountData}
        isLoading={false}
      />
      <CustomTablePagination
        totalItems={UserAccountData?.length || 1}
        queryKey={PARAM_FIELD.CURRENT_PAGE}
        isScrollAfterPageChange
      />
    </div>
  );
}
