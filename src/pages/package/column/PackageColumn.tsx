import { TableHeaderCell } from '@/components/table/TableHeaderCell';
import { PackageDTO } from '@/data/package/dto/package.dto';
import { ColumnsType } from 'antd/es/table';

export const PackageColumn = (): ColumnsType<PackageDTO> => {
  return [
    {
      title: () => <TableHeaderCell key='id' label={'ID'} sortKey='id' />,
      key: 'id',
      render: ({ ...props }: PackageDTO) => {
        return <div>{props?.id}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='packageName' label={'Package Name'} sortKey='packageName' />,
      key: 'packageName',
      render: ({ ...props }: PackageDTO) => {
        return <div>{props?.packageName}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='packageTime' label={'Package Time'} sortKey='packageTime' />,
      key: 'packageTime',
      render: ({ ...props }: PackageDTO) => {
        return <div>{`${props?.packageTime} ${props?.packageTime > 1 ? 'months' : 'month'}`}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='packageBonusTime' label={'Package Bonus Time'} sortKey='packageBonusTime' />,
      key: 'packageBonusTime',
      render: ({ ...props }: PackageDTO) => {
        return (
          <div>
            {props?.packageBonusTime
              ? `${props?.packageBonusTime} ${props?.packageBonusTime > 1 ? 'months' : 'month'}`
              : '-'}
          </div>
        );
      },
    },
    {
      title: () => <TableHeaderCell key='packagePrice' label={'Package Price (VND)'} sortKey='packagePrice' />,
      key: 'packagePrice',
      render: ({ ...props }: PackageDTO) => {
        return <div>{props?.packagePrice.toLocaleString()}</div>;
      },
    },
  ];
};
