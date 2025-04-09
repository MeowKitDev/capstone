import { CensorDriverRequestDTO } from '@/@types/dto/censorDriverRequestDTO';
import InfoItem from '@/components/common/InfoItem';
import CustomTextFieldWithLabel from '@/components/form-related/CustomTextFieldWithLabel';
import CustomModal from '@/components/modal/CustomModal';
import { CensorDriverDTO } from '@/data/censor-driver/dto/censor-driver.dto';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Image } from 'antd';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

type CensorDriverDetailModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: CensorDriverRequestDTO;
};

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
  const [isShownReasonModal, setIsShownReasonModal] = useState(false);

  return (
    <>
      <CustomModal
        title='Censor Driver Detail'
        open={open}
        setOpen={setOpen}
        className='!w-[1020px]'
        footer={
          <div className='mt-6 flex justify-end gap-3'>
            <Button onClick={() => setIsShownReasonModal(true)} className='bg-red-600 text-white'>
              Decline
            </Button>
            <Button type='primary' className='border-none' onClick={() => setOpen(false)}>
              Approve
            </Button>
          </div>
        }>
        <div className='flex gap-4'>
          <div>
            <h3 className='text-2xl font-bold'>Driver Information</h3>
            <div className='flex items-center gap-4'>
              <figure className='relative h-40 w-40 rounded-xl border-[5px] border-white'>
                <img
                  src={`https://ui-avatars.com/api/?name=${data?.firstName}&background=6366f1&color=fff&size=24`}
                  alt={'avatar'}
                  className='h-full w-full rounded-xl border-[5px] border-white object-contain'
                />
              </figure>
              <div className='mt-4 grid grid-cols-2 gap-4'>
                <InfoItem label='Name' value={data?.firstName + " " + data?.lastName} />
                <InfoItem label='Phone' value={data?.phone} />
                <InfoItem label='Email' value={data?.email} />
                {/* <InfoItem label='Package Buy' value={'Gold Package'} />
                <InfoItem label='Payment Method' value={'Bank Transfer'} /> */}
              </div>
            </div>
            <div className='space-y-4'>
              <InfoItem
                label='Driver License'
                value={
                  <img
                    src={data?.driverLicenseUrl ?? "https://www.shutterstock.com/image-vector/driver-license-plastic-card-photo-260nw-2216933107.jpg"}
                    alt='driver license'
                    className='h-[200px] w-[300px] object-contain'
                  />
                }
              />
              <InfoItem
                label='ID Card'
                value={
                  <img
                    src={data?.identityCardFaceUpUrl ??'https://tayho.hanoi.gov.vn/Medias/1/35/2024/6/30/a5456b6e-5530-4ee1-9b65-99450249205d.jpg'}
                    alt='id card'
                    className='h-[200px] w-[300px] object-contain'
                  />
                }
              />
              {/* identityCardFaceDownUrl */}
              {/* <InfoItem
                label='ID Card'
                value={
                  <img
                    src={data?.identityCardFaceDownUrl ??'https://tayho.hanoi.gov.vn/Medias/1/35/2024/6/30/a5456b6e-5530-4ee1-9b65-99450249205d.jpg'}
                    alt='id card'
                    className='h-[200px] w-[300px] object-contain'
                  />
                }
              /> */}
            </div>
          </div>
          <div>
            <h3 className='text-2xl font-bold'>Vehicle Information</h3>
            <Image
              src={data?.vehicle?.vehicleImageUrl}
              alt='vehicle'
              width={400}
              height={250}
              className='object-contain'
            />
            <div className='mt-4 grid grid-cols-2 gap-4'>
            {/* <InfoItem label='Vehicle Id' value={data?.vehicle?.vehicleID} /> */}
              <InfoItem label='Vehicle Type' value={data?.vehicle?.vehicleType} />
              <InfoItem label='Vehicle Number' value={data?.vehicle?.vehicleNumber} />
              <InfoItem label='Vehicle Brand' value={data?.vehicle?.vehicleBrand} />
              <InfoItem label='NumberOfSeats' value={data?.vehicle?.numberOfSeats} />
              <InfoItem label='VehicleColor' value={data?.vehicle?.vehicleColor} />
              <InfoItem label='Status' value={data?.vehicle?.status} />
              
            </div>
            <div className='mt-4'>
              <div className='grid grid-cols-2 gap-4'>
                <InfoItem
                  label='Car Insurance'
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
                  label='Carregistration'
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
                label='Vehicle Inspection Certificate'
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
      </CustomModal>
      {isShownReasonModal && (
        <ReasonModal openReasonModal={isShownReasonModal} setOpenReasonModal={setIsShownReasonModal} />
      )}
    </>
  );
}
