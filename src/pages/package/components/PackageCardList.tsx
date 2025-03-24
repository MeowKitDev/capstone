import CustomTablePagination from '@/components/table/CustomTablePagination';
import { TableBuilder } from '@/components/table/TableBuilder';
import { PackageDTO } from '@/data/package/dto/package.dto';
import { PARAM_FIELD } from '@/utils/enum/param-field.enum';
import { PackageColumn } from '../column/PackageColumn';
import PackageFilter from './PackageFilter';

const PACKAGE_DATA = [
  {
    id: '1',
    packageName: 'Bronze Package',
    packageTime: 1,
    packageBonusTime: 0,
    packagePrice: 2000000,
  },
  {
    id: '2',
    packageName: 'Silver Package',
    packageTime: 3,
    packageBonusTime: 1,
    packagePrice: 6000000,
  },
  {
    id: '3',
    packageName: 'Gold Package',
    packageTime: 6,
    packageBonusTime: 3,
    packagePrice: 12000000,
  },
];

export default function PackageCardList() {
  return (
    <div className='flex flex-col gap-5'>
      <PackageFilter />
      <TableBuilder<PackageDTO> rowKey='id' columns={PackageColumn()} data={PACKAGE_DATA} isLoading={false} />
      <CustomTablePagination
        totalItems={PACKAGE_DATA?.length || 1}
        queryKey={PARAM_FIELD.CURRENT_PAGE}
        isScrollAfterPageChange
      />
    </div>
  );
}
