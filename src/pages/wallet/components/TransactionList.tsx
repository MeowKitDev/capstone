import { TableBuilder } from '@/components/table/TableBuilder';
import { TransactionDTO } from '@/data/transaction/dto/transaction.dto';
import { TransactionColumn } from './column/TransactionColumn';
import { TransactionData } from './mocks/TransactionData';

export default function TransactionList() {
  return (
    <div className='flex max-w-full flex-col gap-6'>
      <h3 className='mb-5 text-2xl font-semibold text-gray-900'>Transaction</h3>
      <TableBuilder<TransactionDTO>
        rowKey='id'
        columns={TransactionColumn()}
        data={TransactionData}
        isLoading={false}
      />
    </div>
  );
}
