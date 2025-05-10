import { CustomRangePicker } from '@/components/form-related/CustomRangePicker';
import CustomSelectQueryWithLabel from '@/components/form-related/CustomSelectQueryWithLabel';
import ChevronDownIcon from '@/components/icons/ChevronDownIcon';
import CircleDollarIcon from '@/components/icons/CircleDollarIcon';
import CubesIcon from '@/components/icons/CubesIcon';
import UserGroupIcon from '@/components/icons/UserGroupIcon';
import { SelectOptions } from '@/components/types/Selects.type';
import { PARAM_FIELD } from '@/utils/enum/param-field.enum';
import { getDashboardIntervalOptions, getDashboardStatusOptions } from '@/utils/form.helper';
import { Button } from 'antd';
import queryString from 'query-string';
import { useLayoutEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useSearchParams } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import OverviewStatisticsCard from './OverviewStatisticsCard';
import CustomSelectDateQueryWithLabel from '@/components/form-related/CustomSelectDateQueryWithLabel';

export default function Overview() {
  const { t: tCommon } = useTranslation('common');

  const [isShowFilter, setIsShowFilter] = useState(false);

  const dashboardIntervalOptions: SelectOptions[] = useMemo(() => getDashboardIntervalOptions(tCommon), [tCommon]);

  /* CARD DATA */
  const statisticsCards = useMemo(
    () => [
      {
        title: 'Weekly Totals Account',
        subTitle: 'Total users increased 60%',
        value: (250).toLocaleString('en-US'),
        icon: <UserGroupIcon className='size-6 text-primary-500' />,
      },
      {
        title: 'Weekly Totals Money',
        subTitle: 'Total amount of money created in the last 7 days',
        value: (2000000).toLocaleString('en-US') + ' VND',
        icon: <CircleDollarIcon className='size-6 text-primary-500' />,
      },
      {
        title: 'Weekly Totals Package',
        subTitle: 'Total packages sold in the last 7 days',
        value: (500).toLocaleString('en-US'),
        icon: <CubesIcon className='size-6 text-primary-500' />,
      },
    ],
    [],
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
            <OverviewStatisticsCard title={card.title} value={card.value} subTitle={card.subTitle} icon={card.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}
