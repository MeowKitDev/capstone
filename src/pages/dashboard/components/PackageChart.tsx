import { useGetPackageStatisticsQuery } from '@/data/dashboard/dashboard.api';
import { dateDashboardParamsToFilter } from '@/data/dashboard/dashboard.service';
import { ApexOptions } from 'apexcharts';
import queryString from 'query-string';
import { useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useLocation } from 'react-router-dom';

export default function PackageChart() {
  const location = useLocation();
  const params = queryString.parse(location.search);

  const { chartFilter } = useMemo(() => {
    const chartFilter = dateDashboardParamsToFilter(params);
    return { chartFilter };
  }, [params]);

  const { data: chartData } = useGetPackageStatisticsQuery(chartFilter);
  console.log('chartData', chartData);
  const dataChart = useMemo(() => {
    if (!chartData) {
      return {
        userDataValue: [],
        dataLabel: [],
      };
    }
    const userDataValue = chartData?.map((item) => item.totalSold);
    const dataLabel = chartData?.map((item) => item.packageName);

    return {
      userDataValue,
      dataLabel,
    };
  }, [chartData]);

  const chartOptions: ApexOptions = {
    chart: {
      type: 'pie',
      events: {
        mounted: (chart) => {
          chart.windowResizeHandler();
        },
      },
    },
    colors: ['#00B4D8', '#0077B6', '#90E0EF', '#00B4D8', '#0077B6', '#90E0EF', '#00B4D8', '#0077B6'],
    labels: dataChart.dataLabel,
    // plotOptions: {
    //   pie: {
    //     startAngle: -90,
    //     endAngle: 270,
    //     expandOnClick: true,
    //   },
    // },
    dataLabels: {
      style: {
        fontSize: '14px',
        fontWeight: 600,
        fontFamily: 'Inter',
        colors: ['#FFFFFF'],
      },
    },
    fill: {
      type: 'gradient',
    },
    legend: {
      formatter: function (val, opts) {
        return val + ': ' + opts.w.globals.series[opts.seriesIndex];
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return (
    <div className='my-2 rounded-lg bg-white p-6 shadow-md'>
      <div className='mb-5 flex justify-between gap-4'>
        <h3 className='text-xl font-semibold capitalize text-gray-900 max-sm:text-sm'>Thống kê doanh thu từ gói</h3>
      </div>

      <ReactApexChart
        options={chartOptions}
        series={dataChart.userDataValue}
        type={chartOptions?.chart?.type}
        height={480}
        width='100%'
      />
    </div>
  );
}
