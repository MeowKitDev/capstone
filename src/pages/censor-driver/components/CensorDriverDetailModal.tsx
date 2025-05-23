import { CensorDriverRequestDTO } from '@/@types/dto/censorDriverRequestDTO';
import { DriverPointDTO } from '@/@types/dto/driverPointDTO';
import { PagedResponse } from '@/@types/dto/pagedResponse';
import InfoItem from '@/components/common/InfoItem';
import CustomTextFieldWithLabel from '@/components/form-related/CustomTextFieldWithLabel';
import StarIcon from '@/components/icons/StarIcon';
import CustomModal from '@/components/modal/CustomModal';
import { censorDriverRequestApi } from '@/data/services/api/censorDriverRequest/censorDriverRequest.api';
import { DriverPointApi } from '@/data/services/api/driver-point/driver-point.api';
import useDriverPointData from '@/data/services/api/driver-point/useDriverPointData';
import queryClient from '@/data/services/queryClient';
import { MY_ROUTE } from '@/helpers/router/route.constant';
import { DATE_FORMAT_DOT } from '@/utils/constants/date.constant';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Drawer, Image } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

type CensorDriverDetailModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: CensorDriverRequestDTO;
};

const mockData: PagedResponse<DriverPointDTO> = {
  content: [
    {
      pointId: "1",
      point: 0,
      reason: "string",
      date: new Date("2025-05-23T08:31:51.248Z"),
      status: "DONE",
      userName: "string"
    },
    {
      pointId: "2",
      point: 0,
      reason: "string",
      date: new Date("2025-05-23T08:31:51.248Z"),
      status: "DONE",
      userName: "string"
    },
    {
      pointId: "3",
      point: 0,
      reason: "string",
      date: new Date("2025-05-23T08:31:51.248Z"),
      status: "DONE",
      userName: "string"
    }
  ],
  page: 0,
  size: 0,
  totalPages: 0,
  totalElements: 0
}

type ReasonModalProps = {
  openReasonModal: boolean;
  setOpenReasonModal: (open: boolean) => void;
};

const ReasonModal = ({ openReasonModal, setOpenReasonModal }: ReasonModalProps) => {
  const reasonSchema = yup.object().shape({
    reason: yup.string().default(''),
  });

  const { control, handleSubmit } = useForm<{ reason: string }>({
    resolver: yupResolver(reasonSchema),
    defaultValues: reasonSchema.getDefault(),
  });

  const onSubmit: SubmitHandler<{ reason: string }> = (data) => {
    console.log(data);
    setOpenReasonModal(false);
  };

  return (
    <CustomModal
      open={openReasonModal}
      setOpen={setOpenReasonModal}
      footer={
        <div className='mt-6 flex justify-end gap-3'>
          <Button onClick={() => setOpenReasonModal(false)}>Cancel</Button>
          <Button type='primary' className='border-none' onClick={handleSubmit(onSubmit)}>
            Submit
          </Button>
        </div>
      }>
      <form className='mt-10 space-y-4'>
        <CustomTextFieldWithLabel
          control={control}
          name='reason'
          label='Reason'
          placeholder='Enter reason'
          type={'textarea'}
          className='w-full'
        />
      </form>
    </CustomModal>
  );
};

export default function CensorDriverDetailModal({ open, setOpen, data }: CensorDriverDetailModalProps) {
  // const { DriverPointData, isFetching } = useDriverPointData(data?.driverId ?? "");
  const [isShownReasonModal, setIsShownReasonModal] = useState(false);
  const [violationDrawerOpen, setViolationDrawerOpen] = useState(false);

  return (
    <>
      <CustomModal
        title='Thông Tin Chi Tiết Kiểm Duyệt'
        open={open}
        setOpen={setOpen}
        className='!w-[1020px]'
        footer={
          <div className='mt-6 flex justify-end gap-3'>
            <Button
            onClick={()=>{setOpen(false)}}
            >Đóng</Button>
            <Button onClick={() => setViolationDrawerOpen(true)}>
              Lịch sử lỗi vi phạm
            </Button>
            <Button
              onClick={async () => {
                await censorDriverRequestApi.rejectDriver(data?.driverId ?? '');
                setOpen(false);
                await queryClient.invalidateQueries(['censorDriverRequests']); 
                // setIsShownReasonModal(true)
              }}
              className='bg-red-600 text-white'>
              Từ chối
            </Button>
            <Button
              onClick={async () => {
                await censorDriverRequestApi.approveDriver(data?.driverId ?? '');
                setOpen(false);
                await queryClient.invalidateQueries(['censorDriverRequests']); 
              }}
              className='border-none bg-green-500 text-white'>
              Duyệt
            </Button>
            
          </div>
        }>
        <div className=''>
          <div>
            <h3 className='text-2xl font-bold'>Thông Tin Tài Xế</h3>
            <div className='flex items-center gap-4'>
              <figure className='relative h-40 w-40 rounded-xl border-[5px] border-white'>
                <img
                  src={`https://ui-avatars.com/api/?name=${data?.firstName}&background=6366f1&color=fff&size=24`}
                  alt={'avatar'}
                  className='h-full w-full rounded-xl border-[5px] border-white object-contain'
                />
              </figure>
              <div className='mt-4 grid grid-cols-3 gap-4'>
                <InfoItem label='Họ và tên' value={data?.firstName + ' ' + data?.lastName} />
                <InfoItem label='Số điện thoại' value={data?.phone} />
                <InfoItem label='Email' value={data?.email} />
                <InfoItem
                  label='Đánh Giá'
                  value={
                    <div className='flex gap-1'>
                      {data?.rating}
                      <StarIcon className='size-5 text-yellow-300' />
                    </div>
                  }
                />
                <div>
                  <Link
                    to={`${MY_ROUTE.TRIP.self}?driverId=${data?.driverId}`}
                    className='mt-4 flex w-fit items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-500'>
                    <span>Lịch sử chuyến đi</span>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h3 className='mt-4 text-2xl font-bold'>Thông Tin Phương Tiện</h3>
              <Image
                src={data?.vehicle?.vehicleImageUrl}
                alt='vehicle'
                width={400}
                height={250}
                className='object-contain'
              />
              <div className='mt-4 grid grid-cols-3 gap-4'>
                {/* <InfoItem label='Vehicle Id' value={data?.vehicle?.vehicleID} /> */}
                <InfoItem label='Loại phương tiện' value={data?.vehicle?.vehicleType} />
                <InfoItem label='Số phương tiện' value={data?.vehicle?.vehicleNumber} />
                <InfoItem label='Hãng phương tiện' value={data?.vehicle?.vehicleBrand} />
                <InfoItem label='Số ghế' value={data?.vehicle?.numberOfSeats} />
                <InfoItem label='Màu phương tiện' value={data?.vehicle?.vehicleColor} />
                <InfoItem label='Trạng thái' value={data?.vehicle?.status} />
              </div>
              <div className='mt-4'>
                <div className='grid grid-cols-3 gap-4'>
                  <InfoItem
                    label='Bảo hiểm phương tiện'
                    value={
                      <Image
                        // src={'https://www.policybazaar.com/pblife/assets/images/pb_life_1650972275.jpg'}
                        src={data?.vehicle?.carInsuranceUrl}
                        alt='carInsurance'
                        width={100}
                        height={100}
                        className='object-contain'
                      />
                    }
                  />
                  <InfoItem
                    label='Giấy phép đăng ký phương tiện'
                    value={
                      <Image
                        src={data?.vehicle?.carregistrationUrl}
                        alt='carInsurance'
                        width={100}
                        height={100}
                        className='object-contain'
                      />
                    }
                  />
                  {/* <InfoItem
                  label='Registration Certificate'
                  value={
                    <Image
                      src={
                        'https://dmv.ny.gov/sites/default/files/styles/wysiwyg/public/images/2022-01/reg_sample-340x300.png?itok=HZLA63ka'
                      }
                      alt='vehicle'
                      width={100}
                      height={100}
                      className='object-contain'
                    />
                  }
                /> */}
                </div>
                {/* <InfoItem
                label='Vehicle Registration Certificate'
                value={
                  <Image
                    src={
                      'https://tnclerks.zendesk.com/hc/article_attachments/4409967522708/Combined_month_and_year_decal.PNG'
                    }
                    alt='vehicle'
                    width={100}
                    height={100}
                    className='object-contain'
                  />
                }
              /> */}
                <InfoItem
                  label='Giấy chứng nhận kiểm định xe'
                  value={
                    <Image
                      src={data?.vehicle?.vehicleInspectionCertificateUrl}
                      alt='vehicle'
                      width={100}
                      height={100}
                      className='object-contain'
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <CustomModal
          title='Lịch sử lỗi vi phạm'
          open={violationDrawerOpen}
          setOpen={setViolationDrawerOpen}
          footer={
            <div className='mt-6 flex justify-end gap-3'>
                <Button
                  onClick={async () => {
                    setViolationDrawerOpen(false);
                  }}
                >
                  Đóng
                </Button>
                
              </div>
          }
          className='!w-[900px]'
        >
        <div className="flex flex-col gap-3">
          <table className="table-auto w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="p-2">STT</th>
                <th className="p-2">Tên</th>
                <th className="p-2">Điểm</th>
                <th className="p-2">Lý do</th>
                <th className="p-2">Thời gian</th>
                <th className="p-2">Trạng thái</th>
                <th className="p-2">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {mockData?.content?.map((violation, idx) => (
                <tr key={violation.pointId} className="border-b">
                  <td className="p-2">{mockData?.page * 10 + idx + 1}</td>
                  <td className="p-2">{violation.userName}</td>
                  <td className="p-2">{violation.point}</td>
                  <td className="p-2">{violation.reason}</td>
                  <td className="p-2">{dayjs(violation.date).format(DATE_FORMAT_DOT)}</td>
                  <td className="p-2">{violation.status}</td>
                  <td className="p-2"><Button
                  onClick={async () => {
                    await DriverPointApi.refund(violation?.pointId ?? '');
                    await queryClient.invalidateQueries(['driverpoints']); 
                    // setOpen(false);
                  }}
                  className='border-none bg-green-500 text-white'>
                  Hoàn điểm
                </Button></td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* <CustomTablePagination
            totalItems={data?.totalElements || 0}
            queryKey={PARAM_FIELD.CURRENT_PAGE}
          /> */}
        </div>
    </CustomModal>
      </CustomModal>
      {isShownReasonModal && (
        <ReasonModal openReasonModal={isShownReasonModal} setOpenReasonModal={setIsShownReasonModal} />
      )}
    </>
  );
}
