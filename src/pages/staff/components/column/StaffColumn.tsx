import { UserGetAllDTO } from '@/@types/dto/userDTO';
import CustomTableActionsButton from '@/components/table/CustomTableActionsButton';
import { TableHeaderCell } from '@/components/table/TableHeaderCell';
import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import { StaffUpdateModal } from '../StaffCreateModal';

export const StaffColumn = (): ColumnsType<UserGetAllDTO> => {
  const [isShownUdapteModal, setIsShownUdapteModal] = useState<string | null>(null);

  return [
    {
      title: () => <TableHeaderCell key='userId' label={'ID'} sortKey='userId' />,
      key: 'userId',
      render: ({ ...props }: UserGetAllDTO) => {
        return <div>{props?.userId}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='username' label={'User Name'} sortKey='username' />,
      key: 'username',
      render: ({ ...props }: UserGetAllDTO) => {
        return <div>{props?.username}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='name' label={'Name'} sortKey='name' />,
      key: 'name',
      render: ({ ...props }: UserGetAllDTO) => {
        return <div>{props?.firstName + ' ' + props?.lastName}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='phoneNumber' label={'Phone Number'} sortKey='phoneNumber' />,
      key: 'phoneNumber',
      render: ({ ...props }: UserGetAllDTO) => {
        return <div>{props?.phoneNumber}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='email' label={'Email'} sortKey='email' />,
      key: 'email',
      render: ({ ...props }: UserGetAllDTO) => {
        return <div>{props?.email}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='gender' label={'Gender'} />,
      key: 'gender',
      render: ({ ...props }: UserGetAllDTO) => {
        return <div className='capitalize'>{props?.gender}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='status' label={'Status'} />,
      key: 'status',
      render: ({ ...props }: UserGetAllDTO) => {
        return (
          <div className='capitalize'>
            {props?.active ? (
              <Tag color='success' className='w-20 text-center'>
                Active
              </Tag>
            ) : (
              <Tag color='error' className='w-20 text-center'>
                Inactive
              </Tag>
            )}
          </div>
        );
      },
    },
    {
      title: () => <TableHeaderCell key='action' label={'Action'} />,
      key: 'action',
      render: ({ ...props }: UserGetAllDTO) => (
        <>
          <div className='flex w-full justify-start'>
            <CustomTableActionsButton label={'Update'} onClick={() => setIsShownUdapteModal(props?.userId)} />
          </div>
          <StaffUpdateModal
            open={isShownUdapteModal === props?.userId}
            setOpen={() => setIsShownUdapteModal(null)}
            data={props}
          />
        </>
      ),
    },
  ];
};
