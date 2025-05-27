import DefaultContainer from '@/layouts/DefaultContainer';
import AccountChart from './components/charts/AccountChart';
import Overview from './components/Overview';
import TripChart from './components/charts/TripChart';
import ProfitChart from './components/charts/ProfitChart';
import PassengerJoinTripChart from './components/charts/PassengerJoinTripChart';
import PackageChart from './components/PackageChart';

export default function DashboardPage() {
  return (
    <DefaultContainer title='Dashboard'>
      <div className='flex max-w-full flex-col gap-6'>
        <Overview />
        <PackageChart />
        <AccountChart />
        <TripChart />
        <ProfitChart />
        <PassengerJoinTripChart />
      </div>
    </DefaultContainer>
  );
}
