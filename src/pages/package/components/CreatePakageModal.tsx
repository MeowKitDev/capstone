import CustomTextFieldWithLabel from '@/components/form-related/CustomTextFieldWithLabel';
import CustomModal from '@/components/modal/CustomModal';
import { packageApi } from '@/data/services/api/package/package.api';
import queryClient from '@/data/services/queryClient';
import { CreatePackageInput } from '@/helpers/form-schemas/package/package.input';
import { createPackageSchema } from '@/helpers/form-schemas/package/package.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, DatePicker, message } from 'antd';
import dayjs from 'dayjs';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

type CreatePakageModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function CreatePakageModal({ open, setOpen }: CreatePakageModalProps) {
  const { handleSubmit, control, reset } = useForm<CreatePackageInput>({
    resolver: yupResolver(createPackageSchema),
    defaultValues: createPackageSchema.getDefault(),
  });

  const onSubmit: SubmitHandler<CreatePackageInput> = async (data) => {
    try {
      await packageApi.create({
        name: data.packageName,
        price: data.packagePrice,
        time: data.packageTime,
        bonus: data.packageBonusTime,
        description: data.packageDescription || '',
        expireDate: data.expiredDate, 
      });
      message.success('Tạo gói thành công!');
      setOpen(false);
      reset();
      queryClient.invalidateQueries(['packages']);
    } catch (error) {
      message.error('Tạo gói thất bại!');
      console.error(error);
    }
  };

  return (
    <CustomModal
      title='Tạo Gói'
      open={open}
      className='!w-[520px]'
      setOpen={setOpen}
      footer={
        <div className='mt-6 flex justify-end gap-3'>
          <Button onClick={() => setOpen(false)}>Hủy</Button>
          <Button type='primary' className='border-none' onClick={handleSubmit(onSubmit)}>
            Tạo
          </Button>
        </div>
      }>
      <form className='mt-10 space-y-4'>
        <CustomTextFieldWithLabel
          control={control}
          name='packageName'
          label='Tên Gói'
          placeholder='Nhập tên gói'
          className='w-full'
        />
        <CustomTextFieldWithLabel
          control={control}
          name='packageTime'
          label='Thời gian gói (Tháng)'
          placeholder='Nhập thời gian gói'
          type='number'
        />
        <CustomTextFieldWithLabel
          control={control}
          name='packageBonusTime'
          label='Thời gian tặng thêm cho gói (Tháng)'
          placeholder='Nhập thời gian tặng thêm cho gói'
          type='number'
        />
        <CustomTextFieldWithLabel
          control={control}
          name='packagePrice'
          label='Giá Gói (VND)'
          placeholder='Nhập giá gói'
          type='number'
          min={1000}
          max={1000000000}
          step={1000}
        />
        
        <Controller
          control={control}
          name='expiredDate'
          render={({ field, fieldState }) => (
            <div className='flex flex-col gap-1'>
              <label className='font-medium'>Ngày hết hạn</label>
              <DatePicker
                className='w-full'
                format='DD/MM/YYYY'
                placeholder='Chọn ngày hết hạn'
                value={field.value ? dayjs(field.value) : null}
                onChange={(date) => field.onChange(date ? date.toDate() : null)} // ✅ sửa tại đây
              />
              {fieldState.error && (
                <span className='text-red-500 text-sm'>{fieldState.error.message}</span>
              )}
            </div>
          )}
        />
      </form>
    </CustomModal>
  );
}
