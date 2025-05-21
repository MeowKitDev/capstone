import { useEffect, useState } from 'react';
import SackDollarIcon from '@/components/icons/SackDollarIcon';
import OverviewStatisticsCard from '@/pages/dashboard/components/OverviewStatisticsCard';
import axios from 'axios';
import axiosClient from '@/data/services/axiosClient';
import { walletSystemBalanceDTO } from '@/@types/dto/walletSystemBalanceDTO';

export default function WalletOverview() {
  const [systemBalance, setSystemBalance] = useState<number | null>(null);

  useEffect(() => {
    const fetchSystemBalance = async () => {
      try {
         const response: walletSystemBalanceDTO = await axiosClient.get('manager/wallet/system-balance');
        setSystemBalance(response?.totalSystemBalance ?? 0);
      } catch (error) {
        console.error('Error fetching system balance:', error);
        setSystemBalance(0); 
      }
    };

    fetchSystemBalance();
  }, []);

  const walletCardsData = [
    {
      title: 'Ví hệ thống',
      subTitle: '',
      value: systemBalance !== null ? systemBalance.toLocaleString('en-US') : '...',
      icon: <SackDollarIcon className='size-6 text-primary-500' />,
    },
  ];

  return (
    <div className='hover-scrollbar flex h-full w-full max-w-pc gap-6 p-2'>
      {walletCardsData.map((card, index) => (
        <div key={index} className='flex-shrink-0'>
          <OverviewStatisticsCard
            title={card.title}
            value={card.value}
            subTitle={card.subTitle}
            icon={card.icon}
          />
        </div>
      ))}
    </div>
  );
}
