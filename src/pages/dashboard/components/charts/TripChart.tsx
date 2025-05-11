import { useGetTripStatisticsQuery } from '@/data/dashboard/dashboard.api';
import { dateDashboardParamsToFilter } from '@/data/dashboard/dashboard.service';
import { ApexOptions } from 'apexcharts';
import queryString from 'query-string';
import { useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useLocation } from 'react-router-dom';

export default function TripChart() {
  const location = useLocation();
  const params = queryString.parse(location.search);

  const { chartFilter } = useMemo(() => {
    const chartFilter = dateDashboardParamsToFilter(params);
    return { chartFilter };
  }, [params]);

  const { data: chartData } = useGetTripStatisticsQuery(chartFilter);

  const dataChart = useMemo(() => {
    if (!chartData) return { dataLabel: [], dataTrip: [] };

    const dataLabel = chartData?.map((item) => item.dateTime);
    const dataValue = chartData?.map((item) => item.count);
    return {
      dataLabel,
      dataTrip: [
        {
          name: 'Chuyến đi',
          data: dataValue,
        },
      ],
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
      title: { text: 'Số lượng chuyến đi' },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        },
      },
    },
  };

  return (
    <div className='my-2 rounded-lg bg-white p-6 shadow-md'>
      <div className='mb-5 flex justify-between gap-4'>
        <h3 className='text-xl font-semibold capitalize text-gray-900 max-sm:text-sm'>Thống kê chuyến đi</h3>
      </div>

      <ReactApexChart options={chartOptions} series={dataChart?.dataTrip} type='bar' height={480} width='100%' />
    </div>
  );
}
