import InfoItem from '@/components/common/InfoItem';
import CustomTextFieldWithLabel from '@/components/form-related/CustomTextFieldWithLabel';
import StarIcon from '@/components/icons/StarIcon';
import CustomModal from '@/components/modal/CustomModal';
import { FeedbackDTO } from '@/data/feedback/dto/feedback.dto';
import { DriverPointApi } from '@/data/services/api/driver-point/driver-point.api';
import queryClient from '@/data/services/queryClient';
import {
  DATE_FORMAT,
  DATE_FORMAT_DOT,
  DATE_TIME_SHORT_24H_FORMAT,
  TIME_24H_FORMAT,
} from '@/utils/constants/date.constant';
import { GENDER } from '@/utils/enum/common.enum';
import { TRIP_STATUS } from '@/utils/enum/trip/trip-status.enum';
import { formatPhoneNumber } from '@/utils/string.helper';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Divider, Tag } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';

type FeedbackDetailModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: FeedbackDTO;
};

type ReasonModalProps = {
  openReasonModal: boolean;
  setOpenReasonModal: (open: boolean) => void;
  feedbackID: string;
};

export default function FeedbackDetailModal({ open, setOpen, data }: FeedbackDetailModalProps) {
    const [isShownReasonModal, setIsShownReasonModal] = useState(false);
  return (
    <>
    <CustomModal  title='Chi tiết phản hồi' open={open} setOpen={setOpen} className='!w-[820px]'
    footer={
              <div className='mt-6 flex justify-end gap-3'>
                <Button
                  onClick={() => {setOpen(false)}}
                >Đóng
                </Button>
                <Button
                  className='border-none bg-orange-500 text-white'
                  onClick={()=>{setIsShownReasonModal(true)}}
                >Báo Cáo
                </Button>
              </div>
          }
    >
      <div className='space-y-5'>
        <div>
          <div>
            <h3 className='text-xl font-bold text-primary-700'>Thông tin phản hồi</h3>
            <span className='text-sm font-normal text-gray-500'>(Thông tin chi tiết phản hồi)</span>
          </div>
          <Divider className='mt-1' />
          <div className='mt-4 grid grid-cols-3 gap-4'>
            <InfoItem label='Tên người phản hồi' value={data?.user?.firstName + ' ' + data?.user?.lastName} />
            <InfoItem label='Số điện thoại' value={formatPhoneNumber(data?.user?.phoneNumber)} />
            <InfoItem label='Email' value={data?.user?.email} />
            <InfoItem label='Nội dung' value={data?.feedbackDescription} />
            <InfoItem label='Ngày phản hồi' value={dayjs().format(DATE_TIME_SHORT_24H_FORMAT)} />
            <InfoItem
              label='Đánh giá'
              value={
                <div className='flex gap-1'>
                  {data?.feedbackRating}
                  <StarIcon className='size-5 text-yellow-300' />
                </div>
              }
            />
          </div>
        </div>
        <div>
          <h3 className='text-xl font-bold text-primary-700'>Thông tin tài xế</h3>
          <span className='text-sm font-normal text-gray-500'>(Thông tin tài xế sẽ thực hiện chuyến đi này)</span>
          <Divider className='mt-1' />
          <div className='flex items-center gap-4'>
            <figure className='relative h-40 w-40 rounded-xl border-[5px] border-white'>
              <img
                src={data?.driver?.avatarUrl}
                alt={'avatar'}
                className='h-full w-full rounded-xl border-[5px] border-white object-contain'
              />
            </figure>
            <div className='mt-4 grid grid-cols-3 gap-x-10 gap-y-5'>
              <InfoItem label='Họ và Tên' value={data?.driver?.firstName + ' ' + data?.driver.lastName} />
              <InfoItem label='Số điện thoại' value={formatPhoneNumber(data?.driver?.phone || '')} />
              <InfoItem label='Email' value={data?.driver?.email} />
              <InfoItem label='Địa chỉ' value={data?.driver?.address} />
              <InfoItem label='Ngày sinh' value={dayjs(data?.driver?.dob).format(DATE_FORMAT_DOT)} />
              <InfoItem label='Giới tính' value={data?.driver.gender === GENDER.MALE ? 'Nam' : 'Nữ'} />
              <InfoItem
                label='Đánh giá'
                value={
                  <div className='flex gap-1'>
                    {data?.driver.rating}
                    <StarIcon className='size-5 text-yellow-300' />
                  </div>
                }
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3 className='text-xl font-bold text-primary-700'>
              Thông tin chuyến đi - <span>{data?.tripId}</span>
            </h3>
            <span className='text-sm font-normal text-gray-500'>(Thông tin chi tiết chuyến đi)</span>
          </div>
          <Divider className='mt-1' />
          <div className='mt-4 grid grid-cols-3 gap-4'>
            <InfoItem label='Điểm đón' value={data?.trip?.startLocation} />
            <InfoItem label='Điểm trả' value={data?.trip?.endLocation} />
            <InfoItem label='Ngày khởi hành' value={dayjs(data?.trip?.startDate).format(DATE_FORMAT)} />
            <InfoItem label='Ngày Đến' value={dayjs(data?.trip?.endDate).format(DATE_FORMAT)} />
            <InfoItem label='Thời gian khởi hành' value={dayjs(data?.trip?.startDate).format(TIME_24H_FORMAT)} />
            <InfoItem label='Thời gian đến' value={dayjs(data?.trip?.endDate).format(TIME_24H_FORMAT)} />
            <InfoItem label='Giá vé' value={`${data?.trip?.pricePerSeat} VNĐ`} />
            <InfoItem label='Số ghế đã đặt' value={`${data?.trip?.currentSeat} ghế`} />
            <InfoItem label='Số ghế tối đa' value={`${data?.trip?.maxSeat} ghế`} />
            <InfoItem
              label='Thời gian dự kiến'
              value={`${
                data?.trip?.totalTime && data?.trip?.totalTime > 120
                  ? Math.floor(data?.trip?.totalTime / 60) + ' giờ ' + (data?.trip?.totalTime % 60) + ' phút'
                  : data?.trip?.totalTime + ' phút'
              }`}
            />
            <InfoItem
              label='Khoảng cách dự kiến'
              value={`${data?.trip?.totalDistance && data?.trip?.totalDistance + ' km'}`}
            />
            <InfoItem label='Mô tả' value={data?.trip?.description} />
            {data?.trip?.condition && <InfoItem label='Yêu cầu' value={data?.trip?.condition} />}
            <InfoItem
              label='Trạng thái'
              value={
                data?.trip?.tripStatus === TRIP_STATUS.DONE ? (
                  <Tag color='success' className='w-36 text-center'>
                    Đã hoàn thành
                  </Tag>
                ) : data?.trip?.tripStatus === TRIP_STATUS.CONFIRMING ? (
                  <Tag color='warning' className='w-36 text-center'>
                    Chờ xác nhận
                  </Tag>
                ) : data?.trip?.tripStatus === TRIP_STATUS.ON_GOING ? (
                  <Tag color='processing' className='w-36 text-center'>
                    Đang đi
                  </Tag>
                ) : data?.trip?.tripStatus === TRIP_STATUS.UPCOMING ? (
                  <Tag color='geekblue' className='w-36 text-center'>
                    Chuẩn bị khởi hành
                  </Tag>
                ) : data?.trip?.tripStatus === TRIP_STATUS.REJECTED ? (
                  <Tag color='error' className='w-36 text-center'>
                    Đã từ chối
                  </Tag>
                ) : data?.trip?.tripStatus === TRIP_STATUS.CANCEL ? (
                  <Tag color='error' className='w-36 text-center'>
                    Đã hủy
                  </Tag>
                ) : data?.trip?.tripStatus === TRIP_STATUS.RESEND ? (
                  <Tag color='blue-inverse' className='w-36 text-center'>
                    Đã gửi lại
                  </Tag>
                ) : (
                  <Tag color='default' className='w-36 text-center'>
                    Chờ xác nhận
                  </Tag>
                )
              }
            />
            {data?.trip?.cancelReason && data?.trip?.tripStatus === TRIP_STATUS.CANCEL && (
              <InfoItem
                label='Lý do hủy chuyến'
                value={<span className='text-red-500'>{data?.trip?.cancelReason}</span>}
              />
            )}
          </div>
        </div>
      </div>
    </CustomModal>
    {isShownReasonModal && (
      <ReasonModal openReasonModal={isShownReasonModal} setOpenReasonModal={setIsShownReasonModal} feedbackID={data?.feedbackID} />
    )}
  </>
  );
}

const ReasonModal = ({ openReasonModal, setOpenReasonModal, feedbackID }: ReasonModalProps) => {
  const reasonSchema = yup.object().shape({
    reason: yup.string().default(''),
  });

  const { control, handleSubmit } = useForm<{ reason: string }>({
    resolver: yupResolver(reasonSchema),
    defaultValues: reasonSchema.getDefault(),
  });

  const onSubmit: SubmitHandler<{ reason: string }> = async(data) => {
    await DriverPointApi.penalize(feedbackID, { reason: data.reason });
    await queryClient.invalidateQueries(['CensorVehicles']);
    setOpenReasonModal(false);
  };

  return (
    <CustomModal
      open={openReasonModal}
      setOpen={setOpenReasonModal}
      title={"Lý do cảnh báo"}
      footer={
        <div className='mt-6 flex justify-end gap-3'>
          <Button onClick={() => setOpenReasonModal(false)}>Đóng</Button>
          <Button type='primary' className='border-none' onClick={handleSubmit(onSubmit)}>
            Gửi
          </Button>
        </div>
      }>
      <form className='mt-10 space-y-4'>
        <CustomTextFieldWithLabel
          control={control}
          name='reason'
          label='Lý Do'
          placeholder='Enter reason'
          type={'textarea'}
          className='w-full'
        />
      </form>
    </CustomModal>
  );
};