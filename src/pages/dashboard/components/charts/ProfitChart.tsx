import { useGetProfitStatisticsQuery } from '@/data/dashboard/dashboard.api';
import { dateDashboardParamsToFilter } from '@/data/dashboard/dashboard.service';
import { ApexOptions } from 'apexcharts';
import queryString from 'query-string';
import { useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useLocation } from 'react-router-dom';

export default function ProfitChart() {
  const location = useLocation();
  const params = queryString.parse(location.search);

  const { chartFilter } = useMemo(() => {
    const chartFilter = dateDashboardParamsToFilter(params);
    return { chartFilter };
  }, [params]);

  const { data: chartData } = useGetProfitStatisticsQuery(chartFilter);

  const dataChart = useMemo(() => {
    if (!chartData) {
      return {
        dataAccount: [],
        dataLabel: [],
      };
    }
    const tripDataValue = chartData?.fromtrip.map((item) => item.value);
    const packageDataValue = chartData?.frompackage.map((item) => item.value);
    const dataLabel = chartData?.fromtrip.map((item) => item.dateTime);

    const dataAccount = [
      {
        name: 'Doanh thu từ chuyến đi',
        data: tripDataValue,
      },
      {
        name: 'Doanh thu từ gói dịch vụ',
        data: packageDataValue,
      },
    ];

    return {
      dataAccount,
      dataLabel,
    };
  }, [chartData]);

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
      categories: dataChart.dataLabel,
    },
    yaxis: {
      title: {
        text: 'Doanh thu',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          // 120000 => 120.000 VND
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' VND';
        },
      },
    },
  };

  return (
    <div className='my-2 rounded-lg bg-white p-6 shadow-md'>
      <div className='mb-5 flex justify-between gap-4'>
        <h3 className='text-xl font-semibold capitalize text-gray-900 max-sm:text-sm'>Thống kê lợi nhuận</h3>
      </div>

      <ReactApexChart options={chartOptions} series={dataChart.dataAccount} type='bar' height={480} width='100%' />
    </div>
  );
}
