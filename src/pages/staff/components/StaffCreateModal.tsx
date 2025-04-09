import CustomTextFieldWithLabel from '@/components/form-related/CustomTextFieldWithLabel';
import CustomModal from '@/components/modal/CustomModal';
import { StaffDTO } from '@/data/staff/dto/staff.dto';
import { StaffInput } from '@/helpers/form-schemas/staff/staff.input';
import { staffSchema } from '@/helpers/form-schemas/staff/staff.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

type StaffUpdateModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: StaffDTO;
};

export const StaffUpdateModal = ({ open, setOpen, data }: StaffUpdateModalProps) => {
  const { handleSubmit, control, reset, setValue } = useForm<StaffInput>({
    resolver: yupResolver(staffSchema),
    defaultValues: staffSchema.getDefault(),
  });
  useEffect(() => {
    if (!data) return;
    if (data) {
      setValue('username', data.username);
      setValue('password', '');
      setValue('firstName', data.firstName);
      setValue('lastName', data.lastName);
      setValue('phoneNumber', data.phoneNumber);
      setValue('email', data.email);
    }

    return () => reset();
  }, [data, reset, setValue]);

  return (
    <CustomModal title='Update Staff' open={open} setOpen={setOpen} className='!w-[520px]'>
      <form className='mt-10 space-y-4'>
        <div className='grid grid-cols-2 gap-4'>
          <CustomTextFieldWithLabel
            control={control}
            name='username'
            label='Username'
            placeholder='Enter username'
            className='w-full'
          />
          <CustomTextFieldWithLabel
            control={control}
            name='password'
            label='Password'
            placeholder='Enter password'
            className='w-full'
          />
          <CustomTextFieldWithLabel
            control={control}
            name='firstName'
            label='First Name'
            placeholder='Enter first name'
            className='w-full'
          />
          <CustomTextFieldWithLabel
            control={control}
            name='lastName'
            label='Last Name'
            placeholder='Enter last name'
            className='w-full'
          />
          <CustomTextFieldWithLabel
            control={control}
            name='phoneNumber'
            label='Phone Number'
            placeholder='Enter phone number'
            className='w-full'
          />
          <CustomTextFieldWithLabel
            control={control}
            name='email'
            label='Email'
            placeholder='Enter email'
            className='w-full'
          />
        </div>
      </form>
    </CustomModal>
  );
};
