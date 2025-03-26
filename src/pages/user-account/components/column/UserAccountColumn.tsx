import CustomTableActionsButton from '@/components/table/CustomTableActionsButton';
import { TableHeaderCell } from '@/components/table/TableHeaderCell';
import { UserAccountDTO } from '@/data/user-account/dto/user-account.dto';
import { MY_ROUTE } from '@/helpers/router/route.constant';
import { USER_ACCOUNT_STATUS } from '@/utils/enum/user-account/user-account.enum';
import { formatPhoneNumber } from '@/utils/string.helper';
import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';

export const UserAccountColumn = (): ColumnsType<UserAccountDTO> => {
  const navigate = useNavigate();

  return [
    {
      title: () => <TableHeaderCell key='id' label={'ID'} sortKey='id' />,
      key: 'id',
      render: ({ ...props }: UserAccountDTO) => {
        return <div>{props?.id}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='name' label={'Full Name'} sortKey='name' />,
      key: 'name',
      render: ({ ...props }: UserAccountDTO) => {
        return <div>{props?.name}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='phone' label={'Phone Number'} sortKey='phone' />,
      key: 'phone',
      render: ({ ...props }: UserAccountDTO) => {
        return <div>{formatPhoneNumber(props?.phone)}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='email' label={'Email'} sortKey='email' />,
      key: 'email',
      render: ({ ...props }: UserAccountDTO) => {
        return <div>{props?.email}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='gender' label={'Gender'} />,
      key: 'gender',
      render: ({ ...props }: UserAccountDTO) => {
        return <div className='capitalize'>{props?.gender}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='status' label={'Status'} sortKey='status' />,
      key: 'status',
      render: ({ ...props }: UserAccountDTO) => {
        return (
          <div className='capitalize'>
            {props?.status === USER_ACCOUNT_STATUS.ACTIVE ? (
              <Tag color='success' className='w-20 text-center'>
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
      render: ({ ...props }: UserAccountDTO) => {
        return <div className='capitalize'>{props?.role}</div>;
      },
    },
    {
      title: () => <TableHeaderCell key='action' label={'Action'} />,
      key: 'action',
      render: ({ ...props }: UserAccountDTO) => (
        <div className='flex w-full justify-start'>
          <CustomTableActionsButton
            label={'See Details'}
            onClick={() => navigate(MY_ROUTE.USER.VIEW_USER_ACCOUNT.detail(props?.id.toString()))}
          />
        </div>
      ),
    },
  ];
};
