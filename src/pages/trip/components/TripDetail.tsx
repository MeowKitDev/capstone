import InfoItem from '@/components/common/InfoItem';
import LoadingPageBanner from '@/components/common/LoadingPageBanner';
import CustomTextFieldWithLabel from '@/components/form-related/CustomTextFieldWithLabel';
import CustomConfirmModal from '@/components/modal/CustomConfirmModal';
import CustomModal from '@/components/modal/CustomModal';
import { useGetTripDetailQuery, usePutAcceptTripMutation, usePutRejectTripMutation } from '@/data/trip/trip.api';
import { baseSchema } from '@/helpers/form-schemas/AllFormSchema';
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
import { Button, Divider, Image, Tag } from 'antd';
import dayjs from 'dayjs';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';

const reasonSchema = yup.object().shape({
  reason: baseSchema.yupString,
});

export default function TripDetail() {
  const { id } = useParams();
  const [isAccept, setIsAccept] = useState(false);
  const [isReject, setIsReject] = useState(false);

  const { data, isLoading } = useGetTripDetailQuery(id as string);
  const [putAcceptTrip, { isLoading: isLoadingAccept }] = usePutAcceptTripMutation();
  const [putRejectTrip, { isLoading: isLoadingReject }] = usePutRejectTripMutation();
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(reasonSchema),
    defaultValues: reasonSchema.getDefault(),
  });

  const handleAcceptTrip = async () => {
    try {
      await putAcceptTrip(id as string).unwrap();
      enqueueSnackbar('Chấp nhận chuyến đi thành công', {
        variant: 'success',
        autoHideDuration: 2000,
      });
      setIsAccept(false);
    } catch (error) {
      console.error('Error accepting trip:', error);
    }
  };

  const onSubmit = (data: any) => {
    putRejectTrip({ tripId: id as string, reason: data.reason })
      .unwrap()
      .then(() => {
        enqueueSnackbar('Từ chối chuyến đi thành công', {
          variant: 'success',
          autoHideDuration: 2000,
        });
        setIsReject(false);
      })
      .catch(() => {
        enqueueSnackbar('Từ chối chuyến đi thất bại', {
          variant: 'error',
          autoHideDuration: 2000,
        });
      });
  };

  return (
    <>
      {isLoading ? (
        <LoadingPageBanner title='Đang tải thông tin chuyến đi' disabledFullScreen />
      ) : (
        <div className='space-y-5'>
          <div>
            <div className='flex items-center justify-between'>
              <div>
                <h3 className='text-xl font-bold text-primary-500'>Thông tin chuyến đi</h3>
                <span className='text-sm font-normal text-gray-500'>(Thông tin chi tiết chuyến đi)</span>
              </div>

              <div>
                {data?.tripStatus === TRIP_STATUS.CONFIRMING && (
                  <Button
                    className='float-right mr-2 bg-blue-500 text-white'
                    onClick={() => setIsAccept(true)}
                    loading={isLoadingAccept}>
                    Chấp nhận
                  </Button>
                )}
                {data?.tripStatus === TRIP_STATUS.CONFIRMING && (
                  <Button className='float-right mr-2 bg-red-500 text-white' onClick={() => setIsReject(true)}>
                    Từ chối
                  </Button>
                )}
              </div>
            </div>
            <Divider className='mt-1' />
            <div className='mt-4 grid grid-cols-3 gap-4'>
              <InfoItem label='Điểm đón' value={data?.startLocation} />
              <InfoItem label='Điểm trả' value={data?.endLocation} />
              <InfoItem label='Ngày khởi hành' value={dayjs(data?.startDate).format(DATE_FORMAT)} />
              <InfoItem label='Ngày Đến' value={dayjs(data?.endDate).format(DATE_FORMAT)} />
              <InfoItem label='Thời gian khởi hành' value={dayjs(data?.startDate).format(TIME_24H_FORMAT)} />
              <InfoItem label='Thời gian đến' value={dayjs(data?.endDate).format(TIME_24H_FORMAT)} />
              <InfoItem label='Giá vé' value={`${data?.pricePerSeat} VNĐ`} />
              <InfoItem label='Số ghế đã đặt' value={`${data?.currentSeat} ghế`} />
              <InfoItem label='Số ghế tối đa' value={`${data?.maxSeat} ghế`} />
              <InfoItem
                label='Thời gian dự kiến'
                value={`${
                  data?.totalTime && data?.totalTime > 120
                    ? Math.floor(data?.totalTime / 60) + ' giờ ' + (data?.totalTime % 60) + ' phút'
                    : data?.totalTime + ' phút'
                }`}
              />
              <InfoItem label='Khoảng cách dự kiến' value={`${data?.totalDistance && data?.totalDistance + ' km'}`} />
              <InfoItem
                label='Điểm dừng chân'
                value={
                  data?.stoplocation?.map((item) => (
                    <div key={item.stopLocaID}>
                      {item.stopLoca} - {dayjs(item.stopLocaTime).format(DATE_TIME_SHORT_24H_FORMAT)}
                    </div>
                  )) ?? 'Không có'
                }
              />
              <InfoItem label='Mô tả' value={data?.description} />
              <InfoItem label='Luật lệ của chuyến đi' value={data?.condition} />
              <InfoItem
                label='Trạng thái'
                value={
                  data?.tripStatus === TRIP_STATUS.DONE ? (
                    <Tag color='success' className='w-36 text-center'>
                      Đã hoàn thành
                    </Tag>
                  ) : data?.tripStatus === TRIP_STATUS.CONFIRMING ? (
                    <Tag color='warning' className='w-36 text-center'>
                      Chờ xác nhận
                    </Tag>
                  ) : data?.tripStatus === TRIP_STATUS.ON_GOING ? (
                    <Tag color='processing' className='w-36 text-center'>
                      Đang đi
                    </Tag>
                  ) : data?.tripStatus === TRIP_STATUS.UPCOMING ? (
                    <Tag color='geekblue' className='w-36 text-center'>
                      Chuẩn bị khởi hành
                    </Tag>
                  ) : data?.tripStatus === TRIP_STATUS.REJECTED ? (
                    <Tag color='error' className='w-36 text-center'>
                      Đã từ chối
                    </Tag>
                  ) : data?.tripStatus === TRIP_STATUS.CANCEL ? (
                    <Tag color='error' className='w-36 text-center'>
                      Đã hủy
                    </Tag>
                  ) : data?.tripStatus === TRIP_STATUS.RESEND ? (
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
              {data?.cancelReason && data?.tripStatus === TRIP_STATUS.CANCEL && (
                <InfoItem label='Lý do hủy chuyến' value={<span className='text-red-500'>{data?.cancelReason}</span>} />
              )}
            </div>
          </div>
          <div>
            <h3 className='text-xl font-bold text-primary-500'>Thông tin tài xế</h3>
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
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-bold text-primary-500'>Thông tin xe</h3>
            <span className='text-sm font-normal text-gray-500'>(Xe sẽ được sử dụng cho chuyến đi này)</span>
            <Divider className='mt-1' />
            <div>
              <div className='flex w-full gap-4'>
                <Image
                  src={data?.vehicle?.vehicleImageUrl}
                  alt='vehicle'
                  width={400}
                  height={250}
                  className='w-1/3 object-contain'
                />
                <div className='max-w-2/3 w-full'>
                  <div className='mt-4 grid grid-cols-2 gap-4'>
                    <InfoItem label='Loại xe' value={data?.vehicle?.vehicleType} />
                    <InfoItem label='Hãng xe' value={data?.vehicle?.vehicleBrand} />
                    <InfoItem label='Biển số xe' value={data?.vehicle?.vehicleNumber} />
                    <InfoItem label='Số chỗ ngồi' value={data?.vehicle?.numberOfSeats} />
                    <InfoItem label='Màu xe' value={data?.vehicle.vehicleColor} />
                    <InfoItem
                      label='Trạng thái'
                      value={
                        data?.vehicle?.status === 'ACTIVE' ? (
                          <span className='text-green-500'>Đang hoạt động</span>
                        ) : data?.vehicle?.status === 'PENDING' ? (
                          <span className='text-blue-500'>Đang chờ duyệt</span>
                        ) : (
                          <span className='text-red-500'>Ngừng hoạt động</span>
                        )
                      }
                    />
                  </div>
                </div>
              </div>
              <div className='mt-4 flex justify-between gap-5'>
                <InfoItem
                  label='Cavet xe'
                  value={
                    <Image
                      src={data?.vehicle?.carregistrationUrl}
                      alt='vehicle'
                      width={200}
                      height={200}
                      className='object-contain'
                    />
                  }
                />
                <InfoItem
                  label='Đăng kiểm xe'
                  value={
                    <Image
                      src={data?.vehicle?.vehicleInspectionCertificateUrl}
                      alt='vehicle'
                      width={200}
                      height={200}
                      className='object-contain'
                    />
                  }
                />
                <InfoItem
                  label='Bảo hiểm xe'
                  value={
                    <Image
                      src={data?.vehicle?.carInsuranceUrl}
                      alt='vehicle'
                      width={200}
                      height={200}
                      className='object-contain'
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <CustomConfirmModal
        open={isAccept}
        title='Xác nhận chuyến đi'
        message='Bạn có chắc chắn muốn chấp nhận chuyến đi này không?'
        setOpen={setIsAccept}
        onConfirm={handleAcceptTrip}
        okText='Chấp nhận'
        cancelText='Hủy'
      />
      <CustomModal title='Từ chối chuyến đi' open={isReject} setOpen={() => setIsReject(false)} className='!w-[520px]'>
        <form className='mt-10 space-y-4' onSubmit={handleSubmit(onSubmit)}>
          <CustomTextFieldWithLabel
            name='reason'
            type='textarea'
            control={control}
            rows={4}
            label='Lý do từ chối'
            placeholder='Nhập lý do từ chối'
            className='w-full'
          />
          <div className='mt-6 flex justify-end gap-3'>
            <Button onClick={() => setIsReject(false)}>Hủy</Button>
            <Button type='primary' className='border-none' htmlType='submit' loading={isLoadingReject}>
              Từ chối
            </Button>
          </div>
        </form>
      </CustomModal>
    </>
  );
}
