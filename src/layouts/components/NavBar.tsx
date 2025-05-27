import logo from '@/assets/images/logo.png';
import BellIcon from '@/components/icons/BellIcon';
import BracketRightIcon from '@/components/icons/BracketRightIcon';
import UserCircleIcon from '@/components/icons/UserCircleIcon';
import UserOutlineIcon from '@/components/icons/UserOutlineIcon';
import UserPenIcon from '@/components/icons/UserPenIcon';
import { RootState } from '@/data';
import { logoutThunk } from '@/data/auth/auth.thunk';
import { GlobalState } from '@/data/global/global.slice';
import { useGetNotificationListQuery, usePatchNotificationReadMutation } from '@/data/notification/notification.api';
import { MY_ROUTE } from '@/helpers/router/route.constant';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHook';
import { DATE_SHORT_TIME_FORMAT_DOT } from '@/utils/constants/date.constant';
import { TYPE_NOTIFICATION } from '@/utils/enum/notification/type.enum';
import { Badge, Popover } from 'antd';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export default function NavBar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userInfo }: GlobalState = useAppSelector((state: RootState) => state.global);

  const { data } = useGetNotificationListQuery(undefined, {
    pollingInterval: 3000,
    refetchOnFocus: true,
  });
  const [patchNotificationRead] = usePatchNotificationReadMutation();

  const notificationNotRead = data?.filter((item) => !item.isRead).length || 0;

  const handleClickNotification = (type: TYPE_NOTIFICATION, relatedId: string, id: number) => {
    if (id) handleReadNotification(id);

    switch (type) {
      case TYPE_NOTIFICATION.TRIP_REQUEST:
        navigate(MY_ROUTE.TRIP.detail(relatedId));
        break;
      case TYPE_NOTIFICATION.VEHICLE_REQUEST:
        navigate(MY_ROUTE.CENSOR_VEHICLE.self + `?vehicleId=${relatedId}`);
        break;
      case TYPE_NOTIFICATION.DRIVER_REGISTER:
        navigate(MY_ROUTE.USER.CENSOR_DRIVER_REQUEST.self + `?driverId=${relatedId}`);
        break;
      case TYPE_NOTIFICATION.USER_BUYPACKAGE:
        // navigate(MY_ROUTE.PACKAGE(relatedId));
        break;
      case TYPE_NOTIFICATION.USER_SEND_FEEDBACK:
        navigate(MY_ROUTE.FEEDBACK.self + `?tripId=${relatedId}`);
        break;
      default:
        console.warn('Unhandled notification type:', type);
        break;
    }
  };

  const handleReadNotification = async (id: number) => {
    try {
      await patchNotificationRead({ id });
    } catch (error) {
      console.error('Failed to mark notification as read:', error);
    }
  };

  const contentPopover = (
    <div className='flex w-[150px] flex-col gap-2'>
      <div
        className='flex w-full items-center justify-between rounded-md px-1.5 py-2 hover:bg-gray-100'
        onClick={() => navigate(MY_ROUTE.PROFILE)}>
        <span className='text-xs font-semibold text-gray-900'>Profile</span>
        <UserOutlineIcon className='size-3 cursor-pointer text-gray-900 lg:size-4' />
      </div>
      <div className='h-px w-full bg-gray-200' />
      <button
        className='flex w-full items-center justify-between rounded-md px-1.5 py-2 hover:bg-gray-100'
        onClick={() => navigate(MY_ROUTE.CHANGE_PASSWORD)}>
        <span className='text-xs font-semibold text-gray-900'>Change Password</span>
        <UserPenIcon className='size-3 cursor-pointer text-gray-900 lg:size-4' />
      </button>
      <div className='h-px w-full bg-gray-200' />
      <button
        className='flex w-full items-center justify-between rounded-md px-1.5 py-2 hover:bg-gray-100'
        onClick={() => dispatch(logoutThunk())}>
        <span className='text-xs font-semibold text-red-500'>Log Out</span>
        <BracketRightIcon className='size-3 cursor-pointer text-red-500 lg:size-4' />
      </button>
    </div>
  );

  const contentPopoverBell = (
    <div className='hover-scrollbar flex h-[500px] w-[380px] flex-col gap-2 overflow-y-auto pr-1'>
      <div className='flex w-full items-center justify-between rounded-md py-2'>
        <span className='text-xl font-semibold text-primary-500'>Notification</span>
      </div>
      <div className='h-px w-full bg-gray-200' />
      {data?.map((item) => (
        <button
          key={item.id}
          className={twMerge(
            'relative flex flex-col items-start gap-2 rounded-sm px-2 py-1.5',
            !item.isRead ? 'bg-primary-50 hover:bg-primary-100' : 'bg-gray-50 hover:bg-gray-100',
          )}
          onClick={() => handleClickNotification(item.type, item.relatedId, item.id)}>
          <div className='flex w-full items-center justify-between text-start'>
            <span className='text-base font-semibold text-gray-900'>{item.title}</span>
            <span className='text-xs font-normal text-gray-500'>
              {dayjs(item.createdDate).format(DATE_SHORT_TIME_FORMAT_DOT)}
            </span>
          </div>
          <p className='text-start text-xs font-semibold text-gray-700'>{item.content}</p>
          {!item.isRead && <div className='absolute right-1 top-1 h-1 w-1 rounded bg-primary-500' />}
        </button>
      ))}
      <div className='h-px w-full bg-gray-200' />
    </div>
  );

  return (
    <nav className='default-shadow fixed left-0 top-0 z-[1000] flex h-navbar-sm w-full items-center bg-white lg:h-navbar'>
      <div className='mx-4 flex w-full items-center justify-between'>
        <div className='flex items-center gap-2'>
          <img src={logo} alt='logo' className='hidden h-10 w-auto object-contain lg:block' />
          <h3 className='text-center text-sm font-black tracking-wider text-primary-500 md:text-lg xl:text-xl'>
            S-TRIP
          </h3>
        </div>
        <div className='flex cursor-pointer items-center gap-5'>
          <Popover placement='bottom' content={contentPopover} className='flex cursor-pointer items-center gap-2'>
            {userInfo?.userImageUrl ? (
              <img
                src={userInfo?.userImageUrl}
                alt='User Image'
                className='h-7 w-7 rounded-full border border-gray-200 object-cover'
              />
            ) : (
              <UserCircleIcon />
            )}
            <p className='font-bold text-gray-900'>{userInfo?.firstName[0] + '. ' + userInfo?.lastName}</p>
          </Popover>
          <Popover placement='bottom' content={contentPopoverBell} className='flex cursor-pointer items-center gap-2'>
            <div className='relative'>
              <Badge count={notificationNotRead} size='small' dot>
                <BellIcon className='size-4 cursor-pointer text-gray-900 lg:size-6' />
              </Badge>
            </div>
          </Popover>
        </div>
      </div>
    </nav>
  );
}
