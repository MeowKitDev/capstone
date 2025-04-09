import CustomTablePagination from '@/components/table/CustomTablePagination';
import { TableBuilder } from '@/components/table/TableBuilder';
import { PARAM_FIELD } from '@/utils/enum/param-field.enum';
import CensorDriverRequestFilter from './CensorDriverRequestFilter';
import { CensorDriverRequestColumn } from './column/CensorDriverRequestColumn';

import { useEffect } from 'react';
import { CensorDriverRequestDTO } from '@/@types/dto/censorDriverRequestDTO';
import useCensorDriverRequestData from '@/data/services/api/censorDriverRequest/useCensorDriverRequestData';

export default function CensorDriverRequestList() {
  const { CensorDriverRequestData, isLoading } = useCensorDriverRequestData();

  useEffect(() => {
    console.table(CensorDriverRequestData);
  }, [CensorDriverRequestData]);

  return (
    <div className='flex flex-col gap-5'>
      <CensorDriverRequestFilter />
      <TableBuilder<CensorDriverRequestDTO>
        rowKey='userId'
        columns={CensorDriverRequestColumn()}
        data={CensorDriverRequestData ?? []}
        isLoading={isLoading}
      />
      <CustomTablePagination
        totalItems={CensorDriverRequestData?.length || 1}
        queryKey={PARAM_FIELD.CURRENT_PAGE}
        isScrollAfterPageChange
      />
    </div>
  );
}
