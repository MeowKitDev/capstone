import DefaultContainer from '@/layouts/DefaultContainer';
import TransactionList from './components/TransactionList';
import WalletOverview from './components/WalletOverview';

export default function WalletPage() {
  return (
    <DefaultContainer title='Wallet'>
      <div className='flex max-w-full flex-col gap-6'>
        <WalletOverview />
        <TransactionList />
      </div>
    </DefaultContainer>
  );
}
