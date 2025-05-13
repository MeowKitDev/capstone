import CustomSelectDateQueryWithLabel from '@/components/form-related/CustomSelectDateQueryWithLabel';
import CustomSelectQueryWithLabel from '@/components/form-related/CustomSelectQueryWithLabel';
import ChevronDownIcon from '@/components/icons/ChevronDownIcon';
import CircleDollarIcon from '@/components/icons/CircleDollarIcon';
import CubesIcon from '@/components/icons/CubesIcon';
import UserGroupIcon from '@/components/icons/UserGroupIcon';
import { SelectOptions } from '@/components/types/Selects.type';
import { PARAM_FIELD } from '@/utils/enum/param-field.enum';
import { getDashboardIntervalOptions } from '@/utils/form.helper';
import { Button } from 'antd';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import OverviewStatisticsCard from './OverviewStatisticsCard';
import { useGetDashboardSummaryQuery } from '@/data/dashboard/dashboard.api';

export default function Overview() {
  const { t: tCommon } = useTranslation('common');

  const [isShowFilter, setIsShowFilter] = useState(false);

  const dashboardIntervalOptions: SelectOptions[] = useMemo(() => getDashboardIntervalOptions(tCommon), [tCommon]);
  const { data } = useGetDashboardSummaryQuery();
  /* CARD DATA */
  const statisticsCards = useMemo(
    () => [
      {
        title: 'Tổng người dùng',
        subTitle: 'Bao gồm tài xế và khách hàng',
        value: data?.totalUsers.toLocaleString('en-US'),
        icon: <UserGroupIcon className='size-6 text-primary-500' />,
      },
      {
        title: 'Tổng doanh thu',
        subTitle: 'Tổng số tiền tạo ra từ các gói hàng và chuyến đi',
        value: data?.totalRevenue.toLocaleString('en-US') + ' VND',
        icon: <CircleDollarIcon className='size-6 text-primary-500' />,
      },
      {
        title: 'Tổng gói hàng',
        subTitle: 'Tổng số gói hàng đã được bán',
        value: data?.totalPackagesSold.toLocaleString('en-US'),
        icon: <CubesIcon className='size-6 text-primary-500' />,
      },
    ],
    [data],
  );

  return (
    <div>
      <div className='mb-5 flex w-full items-center gap-10 max-sm:flex-col max-sm:items-baseline max-sm:gap-4'>
        <div className='flex h-10 max-w-[342px] items-center gap-3 sm:hidden'>
          <Button
            className={twMerge(
              'flex h-full items-center justify-center whitespace-nowrap rounded-md border-[1.22px] border-gray-200 bg-white focus:ring-0 enabled:hover:bg-white [&>span]:pl-3 [&>span]:pr-2',
            )}
            onClick={() => setIsShowFilter((prevFilter) => !prevFilter)}>
            <div className='flex items-center gap-2'>
              <p className='text-sm font-medium text-[#282828]'>
                {isShowFilter ? tCommon('label.hide_filters') : tCommon('label.show_filters')}
              </p>

              <ChevronDownIcon
                className={twMerge('h-4 w-4 shrink-0 text-gray-600 transition-all', isShowFilter && 'rotate-180')}
              />
            </div>
          </Button>
        </div>
        <div
          className={twMerge(
            'flex w-full items-center gap-4 transition-all max-sm:flex-col max-sm:items-baseline',
            !isShowFilter && 'max-sm:hidden',
          )}>
          <div className='max-sm:w-full'>
            <CustomSelectDateQueryWithLabel label='Thời gian' queryKey={PARAM_FIELD.DATE} placeholder='Chọn ngày' />
          </div>

          <CustomSelectQueryWithLabel
            label='Khoảng thời gian'
            queryKey={PARAM_FIELD.TYPE}
            placeholder='Chọn khoảng thời gian'
            options={dashboardIntervalOptions}
            className='w-60 max-sm:w-full'
          />
        </div>
      </div>
      <div className='hover-scrollbar flex h-full w-full max-w-pc gap-6 p-2'>
        {statisticsCards.map((card, index) => (
          <div key={index} className='flex-shrink-0'>
            <OverviewStatisticsCard
              title={card.title}
              value={card.value ?? 0}
              subTitle={card.subTitle}
              icon={card.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
