import { TableUtilProvider } from '@/components/table/TableContextUtil';
import DefaultContainer from '@/layouts/DefaultContainer';
import StaffList from './components/StaffList';

export default function StaffPage() {
  return (
    <TableUtilProvider>
      <DefaultContainer title='Staff Account'>
        <StaffList />
      </DefaultContainer>
    </TableUtilProvider>
  );
}
