import { TableBuilder } from '@/components/table/TableBuilder';
import { TransactionColumn } from './column/TransactionColumn';
// import { TransactionData } from './mocks/TransactionData';
import TransactionFilter from './TransactionFilter';
import useWalletData from '@/data/services/api/wallet/useWalletData';
import { WalletDTO } from '@/@types/dto/walletDTO';

export default function TransactionList() {
  const { WalletData, isLoading } = useWalletData();
  return (
    <div className='flex max-w-full flex-col gap-5'>
      <h3 className='mb-2 text-2xl font-semibold text-gray-900'>Transaction</h3>
      <TransactionFilter />
      <TableBuilder<WalletDTO>
        rowKey='transactionId'
        columns={TransactionColumn()}
        data={WalletData ?? []}
        isLoading={isLoading}
      />
    </div>
  );
}
