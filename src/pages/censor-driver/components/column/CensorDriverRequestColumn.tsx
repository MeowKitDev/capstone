import CustomTableActionsButton from '@/components/table/CustomTableActionsButton';
import { TableHeaderCell } from '@/components/table/TableHeaderCell';
import { CensorDriverDTO } from '@/data/censor-driver/dto/censor-driver.dto';
import { CENSOR_DRIVER_STATUS } from '@/utils/enum/censor-driver/censor-driver.enum';
import { formatPhoneNumber } from '@/utils/string.helper';
import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import CensorDriverDetailModal from '../CensorDriverDetailModal';

export const CensorDriverRequestColumn = (): ColumnsType<CensorDriverDTO> => {
  const [isModalDetailOpen, setIsModalDetailOpen] = useState<number | null>(null);

  return [
    {
      title: () => <TableHeaderCell key='id' label={'ID'} />,
      key: 'id',
      render: ({ ...props }: CensorDriverDTO) => {
        return <div>{props?.id}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='name' label={'Full Name'} />,
      key: 'name',
      render: ({ ...props }: CensorDriverDTO) => {
        return <div>{props?.name}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='phone' label={'Phone Number'} />,
      key: 'phone',
      render: ({ ...props }: CensorDriverDTO) => {
        return <div>{formatPhoneNumber(props?.phone)}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='email' label={'Email'} />,
      key: 'email',
      render: ({ ...props }: CensorDriverDTO) => {
        return <div>{props?.email}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='gender' label={'Gender'} />,
      key: 'gender',
      render: ({ ...props }: CensorDriverDTO) => {
        return <div className='capitalize'>{props?.gender}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='status' label={'Status'} />,
      key: 'status',
      render: ({ ...props }: CensorDriverDTO) => {
        return (
          <div className='capitalize'>
            {props?.status === CENSOR_DRIVER_STATUS.APPROVED ? (
              <Tag color='success' className='w-20 text-center'>
                {props?.status}
              </Tag>
            ) : props?.status === CENSOR_DRIVER_STATUS.PENDING ? (
              <Tag color='processing' className='w-20 text-center'>
                {props?.status}
              </Tag>
            ) : (
              <Tag color='error' className='w-20 text-center'>
                {props?.status}
              </Tag>
            )}
          </div>
        );
      },
    },
    {
      title: () => <TableHeaderCell key='role' label={'Role'} />,
      key: 'role',
      render: ({ ...props }: CensorDriverDTO) => {
        return <div className='capitalize'>{props?.packageBuy}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='action' label={'Action'} />,
      key: 'action',
      render: ({ ...props }: CensorDriverDTO) => (
        <>
          <div className='flex w-full justify-start'>
            <CustomTableActionsButton label={'See Details'} onClick={() => setIsModalDetailOpen(props.id)} />
          </div>
          {isModalDetailOpen === props.id && (
            <CensorDriverDetailModal
              open={isModalDetailOpen === props.id}
              setOpen={() => setIsModalDetailOpen(null)}
              data={props}
            />
          )}
        </>
      ),
    },
  ];
};
