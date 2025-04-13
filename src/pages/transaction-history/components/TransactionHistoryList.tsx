import { TableBuilder } from '@/components/table/TableBuilder';
import TransactionFilter from '@/pages/wallet/components/TransactionFilter';
import useTransactionHistoryData from '@/data/services/api/wallet/useTransactionHistoryData';
import { WalletDTO } from '@/@types/dto/walletDTO';
import { TransactionColumn } from '@/pages/wallet/components/column/TransactionColumn';

export default function TransactionHistoryList() {
  const { TransactionHistoryData, isLoading } = useTransactionHistoryData();
  return (
    <div className='flex max-w-full flex-col gap-5'>
      <TransactionFilter />
      <TableBuilder<WalletDTO>
        rowKey='transactionId'
        columns={TransactionColumn()}
        data={TransactionHistoryData ?? []}
        isLoading={isLoading}
      />
    </div>
  );
}
