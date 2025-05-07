import { useGetPassengerDriverStatisticsQuery } from '@/data/dashboard/dashboard.api';
import { dateDashboardParamsToFilter } from '@/data/dashboard/dashboard.service';
import { ApexOptions } from 'apexcharts';
import queryString from 'query-string';
import { useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useLocation } from 'react-router-dom';

const dataChart = [
  {
    name: 'User',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 70, 75, 80],
  },
  {
    name: 'Driver',
    data: [105, 91, 114, 94, 100, 110, 120, 76, 85, 101, 98, 87],
  },
];

export default function AccountChart() {
  const location = useLocation();
  const params = queryString.parse(location.search);

  const { chartFilter } = useMemo(() => {
    const chartFilter = dateDashboardParamsToFilter(params);
    return { chartFilter };
  }, [params]);
  console.log('🚀 ~ file: AccountChart.tsx:34 ~ AccountChart ~ chartFilter:', chartFilter);

  const { data: chartData } = useGetPassengerDriverStatisticsQuery(chartFilter);

  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      height: 450,
    },
    colors: ['#FF8A4C', '#1C64F2'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 5,
        borderRadiusApplication: 'end',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yaxis: {
      title: {
        text: 'Tài Khoản',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + ' thousands';
        },
      },
    },
  };

  return (
    <div className='my-2 rounded-lg bg-white p-6 shadow-md'>
      <div className='mb-5 flex justify-between gap-4'>
        <h3 className='text-xl font-semibold capitalize text-gray-900 max-sm:text-sm'>Account</h3>
      </div>

      <ReactApexChart options={chartOptions} series={dataChart} type='bar' height={480} width='100%' />
    </div>
  );
}
