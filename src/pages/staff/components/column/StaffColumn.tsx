import { TableHeaderCell } from '@/components/table/TableHeaderCell';
import { StaffDTO } from '@/data/staff/dto/staff.dto';
import { usePutToggleStaffStatusMutation } from '@/data/staff/staff.api';
import { GENDER } from '@/utils/enum/common.enum';
import { formatPhoneNumber } from '@/utils/string.helper';
import { Button, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { StaffUpdateModal } from '../StaffUpdateModal';

export const StaffColumn = (): ColumnsType<StaffDTO> => {
  const [isShownUdapteModal, setIsShownUdapteModal] = useState<string | null>(null);
  const [putToggleStaffStatus, { isLoading: isLoadingToggleStaffStatus }] = usePutToggleStaffStatusMutation();

  const handleToggleStatus = async (userId: string) => {
    await putToggleStaffStatus(userId)
      .unwrap()
      .then(() => {
        enqueueSnackbar('Cập nhật trạng thái thành công', {
          variant: 'success',
        });
      });
  };

  return [
    {
      title: () => <TableHeaderCell key='userId' label={'ID'} sortKey='userId' />,
      key: 'userId',
      render: ({ ...props }: StaffDTO) => {
        return <div>{props?.userId}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='name' label={'Tên'} sortKey='name' />,
      key: 'name',
      render: ({ ...props }: StaffDTO) => {
        return <div>{props?.firstName + ' ' + props?.lastName}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='phoneNumber' label={'Số điện thoại'} sortKey='phoneNumber' />,
      key: 'phoneNumber',
      render: ({ ...props }: StaffDTO) => {
        return <div>{formatPhoneNumber(props?.phone)}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='email' label={'Email'} sortKey='email' />,
      key: 'email',
      render: ({ ...props }: StaffDTO) => {
        return <div>{props?.email}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='gender' label={'Giới tính'} />,
      key: 'gender',
      render: ({ ...props }: StaffDTO) => {
        return <div className='capitalize'>{props?.gender === GENDER.MALE ? 'Nam' : 'Nữ'}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='status' label={'Trạng thái'} />,
      key: 'status',
      render: ({ ...props }: StaffDTO) => {
        return (
          <div className='capitalize'>
            {props?.status ? (
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
      title: () => <TableHeaderCell key='action' label={''} />,
      key: 'action',
      render: ({ ...props }: StaffDTO) => (
        <>
          <div className='flex w-full justify-start'>
            <Button
              className='bg-primary-500 text-white ease-linear'
              onClick={() => setIsShownUdapteModal(props?.userId)}>
              Cập nhật
            </Button>
            <Button
              className={twMerge('ml-2 text-white ease-linear', props?.status ? 'bg-red-500' : 'bg-green-500')}
              onClick={() => handleToggleStatus(props?.userId)}>
              {props?.status ? 'Ngừng hoạt động' : 'Kích hoạt'}
            </Button>
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
