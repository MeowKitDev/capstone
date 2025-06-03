import CustomDatePickerWithLabel from '@/components/form-related/CustomDatePickerWithLabel';
import CustomSelectWithLabel from '@/components/form-related/CustomSelectWithLabel';
import CustomTextFieldWithLabel from '@/components/form-related/CustomTextFieldWithLabel';
import CustomModal from '@/components/modal/CustomModal';
import { StaffCreateREQ } from '@/data/staff/request/staff.request';
import { usePostCreateStaffMutation } from '@/data/staff/staff.api';
import { StaffCreateInput } from '@/helpers/form-schemas/staff/staff.input';
import { staffCreateSchema } from '@/helpers/form-schemas/staff/staff.schema';
import { DATE_FORMAT } from '@/utils/constants/date.constant';
import { GENDER } from '@/utils/enum/common.enum';
import { yupResolver } from '@hookform/resolvers/yup';
import dayjs from 'dayjs';
import { enqueueSnackbar } from 'notistack';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type StaffCreateModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const StaffCreateModal = ({ open, setOpen }: StaffCreateModalProps) => {
  const { handleSubmit, control, reset, setValue } = useForm<StaffCreateInput>({
    resolver: yupResolver(staffCreateSchema),
    defaultValues: staffCreateSchema.getDefault(),
  });

  const [postCreateStaff, { isLoading: isLoadingCreateStaff }] = usePostCreateStaffMutation();

  const onSubmit: SubmitHandler<StaffCreateInput> = async (data: StaffCreateInput) => {
    const dataCreateInfo: StaffCreateREQ = {
      firstName: data.firstName,
      password: data.newPassword,
      login: data.username,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      address: data.address,
      dob: dayjs(data.dob),
      gender: data.gender,
    };

    postCreateStaff(dataCreateInfo)
      .unwrap()
      .then(() => {
        enqueueSnackbar('Thêm mới nhân viên thành công', {
          variant: 'success',
        });
        setOpen(false);
      })
      .catch(() => {
        enqueueSnackbar('Thêm mới nhân viên thất bại', {
          variant: 'error',
        });
      });
  };

  useEffect(() => {
    // Reset form when modal is opened
    reset(staffCreateSchema.getDefault());
  }, [reset]);

  return (
    <CustomModal
      title='Thêm nhân viên'
      open={open}
      setOpen={setOpen}
      className='!w-[850px]'
      onConfirm={handleSubmit(onSubmit)}
      loading={isLoadingCreateStaff}
      okText='Thêm'>
      <form className='mt-10 space-y-4'>
        <div className='grid grid-cols-2 gap-4'>
          <CustomTextFieldWithLabel
            control={control}
            name='username'
            label='Tên đăng nhập'
            className='mb-4'
            required
            placeholder='Tên đăng nhập'
          />
          <CustomTextFieldWithLabel
            control={control}
            name='email'
            label='Email'
            className='mb-4'
            required
            placeholder='Email'
          />
          <CustomTextFieldWithLabel
            control={control}
            name='newPassword'
            label='Mật khẩu'
            className='mb-4'
            required
            type='password'
            placeholder='Mật khẩu'
          />
          <CustomTextFieldWithLabel
            control={control}
            name='confirmPassword'
            label='Nhập lại mật khẩu'
            className='mb-4'
            required
            type='password'
            placeholder='Nhập lại mật khẩu'
          />
          <CustomTextFieldWithLabel
            control={control}
            name='firstName'
            label='Họ và tên đệm'
            className='mb-4'
            required
            placeholder='Họ và tên đệm'
          />
          <CustomTextFieldWithLabel
            control={control}
            name='lastName'
            label='Tên'
            className='mb-4'
            required
            placeholder='Tên'
          />
          <CustomDatePickerWithLabel
            control={control}
            name='dob'
            label='Ngày sinh'
            className='mb-4'
            required
            placeholder='Ngày sinh'
            format={DATE_FORMAT}
            showTime={false}
            use12Hours={false}
          />
          <CustomSelectWithLabel
            name='gender'
            control={control}
            label='Giới tính'
            className='mb-4'
            placeholder='Giới tính'
            options={[
              {
                label: 'Nam',
                value: GENDER.MALE,
              },
              {
                label: 'Nữ',
                value: GENDER.FEMALE,
              },
            ]}
          />
          <CustomTextFieldWithLabel
            control={control}
            name='phone'
            label='Số điện thoại'
            className='mb-4'
            required
            placeholder='Số điện thoại'
          />
          <CustomTextFieldWithLabel
            control={control}
            name='address'
            label='Địa chỉ'
            className='mb-4'
            placeholder='Địa chỉ'
          />
        </div>
      </form>
    </CustomModal>
  );
};
