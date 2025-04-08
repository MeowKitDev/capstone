import InfoItem from '@/components/common/InfoItem';
import { RootState } from '@/data';
import { GlobalState } from '@/data/global/global.slice';
import { useAppSelector } from '@/hooks/reduxHook';
import DefaultContainer from '@/layouts/DefaultContainer';
import { DATE_FORMAT } from '@/utils/constants/date.constant';
import { Button } from 'antd';
import dayjs from 'dayjs';

export default function ProfilePage() {
  const { userInfo }: GlobalState = useAppSelector((state: RootState) => state.global);
  console.log('userInfo', userInfo?.userImageUrl);
  return (
    <DefaultContainer title='Profile Page'>
      <div className='flex max-w-screen-md flex-col justify-center rounded-lg bg-white p-6 py-8 shadow'>
        <div className='flex flex-col items-center'>
          <img src={userInfo?.userImageUrl} className='mb-4 h-32 w-32 shrink-0 rounded-full bg-gray-300' />
          <h1 className='text-xl font-bold'>{userInfo?.firstName + ' ' + userInfo?.lastName}</h1>
          <p className='text-gray-700'>{userInfo?.email}</p>
        </div>
        <div className='grid grid-cols-2 gap-6'>
          <InfoItem label='Name' value={userInfo?.firstName + ' ' + userInfo?.lastName} />
          <InfoItem label='Phone' value={userInfo?.phone} />
          <InfoItem label='Address' value={userInfo?.address} />
          <InfoItem label='Date of Birth' value={dayjs(userInfo?.dob).format(DATE_FORMAT)} />
          <InfoItem label='Gender' value={userInfo?.gender} />
          <InfoItem
            label='Role'
            value={
              userInfo?.roles
                .map((role) => {
                  if (role === 'ROLE_ADMIN') {
                    return 'Admin';
                  }
                  if (role === 'ROLE_USER') {
                    return 'User';
                  }
                  if (role === 'ROLE_MODERATOR') {
                    return 'Moderator';
                  }
                  return role;
                })
                ?.join(' | ') ?? ''
            }
          />
        </div>
        <div className='flex justify-end'>
          <Button
            className='mt-4 bg-primary-500 py-6 text-white ease-linear'
            onClick={() => console.log('Edit Profile')}>
            Edit Profile
          </Button>
        </div>
      </div>
    </DefaultContainer>
  );
}
