import { CensorVehicleDTO } from '@/@types/dto/censorVehicleDTO';
import CustomTableActionsButton from '@/components/table/CustomTableActionsButton';
import { TableHeaderCell } from '@/components/table/TableHeaderCell';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import CensorVehicleModal from '../CensorVehicleModal';

export const CensorVehicleColumn = (): ColumnsType<CensorVehicleDTO> => {
  const [isModalDetailOpen, setIsModalDetailOpen] = useState<number | null>(null);

  return [
    {
      title: () => <TableHeaderCell key='vehicleNumber' label={'Vehicle Number'} sortKey='vehicleNumber' />,
      key: 'vehicleNumber',
      render: ({ ...props }: CensorVehicleDTO) => {
        return <div>{props?.vehicle?.vehicleNumber}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='vehicleType' label={'Vehicle Type'} sortKey='vehicleType' />,
      key: 'vehicleType',
      render: ({ ...props }: CensorVehicleDTO) => {
        return <div>{props?.vehicle?.vehicleType}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='vehicleBrand' label={'vehicle Brand'} sortKey='vehicleBrand' />,
      key: 'vehicleBrand',
      render: ({ ...props }: CensorVehicleDTO) => {
        return <div>{props?.vehicle?.vehicleBrand}</div>;
      },
    },
    // {
    //   title: () => <TableHeaderCell key='brand' label={'Brand'} sortKey='brand' />,
    //   key: 'brand',
    //   render: ({ ...props }: CensorVehicleDTO) => {
    //     return <div>{props?.brand}</div>;
    //   },
    // },
    // {
    //   title: () => <TableHeaderCell key='numberInsead' label={'Number InSead'} />,
    //   key: 'numberInsead',
    //   render: ({ ...props }: CensorVehicleDTO) => {
    //     return <div>{props?.numberInsead}</div>;
    //   },
    // },

    // {
    //   title: () => <TableHeaderCell key='status' label={'Status'} sortKey='status' />,
    //   key: 'status',
    //   render: ({ ...props }: CensorVehicleDTO) => {
    //     return (
    //       <div className='capitalize'>
    //         {props?.status === CENSOR_DRIVER_STATUS.APPROVED ? (
    //           <Tag color='success' className='w-20 text-center'>
    //             {props?.status}
    //           </Tag>
    //         ) : props?.status === CENSOR_DRIVER_STATUS.PENDING ? (
    //           <Tag color='processing' className='w-20 text-center'>
    //             {props?.status}
    //           </Tag>
    //         ) : (
    //           <Tag color='error' className='w-20 text-center'>
    //             {props?.status}
    //           </Tag>
    //         )}
    //       </div>
    //     );
    //   },
    // },
    {
      title: () => <TableHeaderCell key='action' label={''} />,
      key: 'action',
      render: ({ ...props }: CensorVehicleDTO) => (
        <>
          <div className='flex w-full justify-start'>
            <CustomTableActionsButton
              label={'See Details'}
              onClick={() => setIsModalDetailOpen(props?.vehicle?.id ?? null)}
            />
          </div>
          {isModalDetailOpen === props?.vehicle?.id && (
            <CensorVehicleModal
              open={isModalDetailOpen === props?.vehicle?.id}
              setOpen={() => setIsModalDetailOpen(null)}
              data={props ?? []}
            />
          )}
        </>
      ),
    },
  ];
};
