import CustomTextFieldWithLabel from '@/components/form-related/CustomTextFieldWithLabel';
import { RootState } from '@/data';
import { AuthState, setStatus } from '@/data/auth/auth.slice';
import { LoginAdminInput } from '@/helpers/form-schemas/login/login.input';
import { loginAdminSchema } from '@/helpers/form-schemas/login/login.schema';
import { MY_ROUTE } from '@/helpers/router/route.constant';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHook';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Checkbox } from 'antd';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function LoginAdminPage() {
  //i18n
  const { t: tLogin } = useTranslation('login');
  const { t: tForm } = useTranslation('form');

  //state
  const [keepLoggedIn, setKeepLoggedIn] = useState<boolean>(false);

  //redux
  const dispatch = useAppDispatch();
  const { status }: AuthState = useAppSelector((state: RootState) => state.auth);

  //handle form
  const { handleSubmit, control } = useForm<LoginAdminInput>({
    resolver: yupResolver(loginAdminSchema),
    defaultValues: loginAdminSchema.getDefault(),
  });

  const onSubmit: SubmitHandler<LoginAdminInput> = async ({ email, password }: LoginAdminInput) => {
    if ((email === 'admin' || email === 'staff') && password === 'strip@123') {
      // const loginData = {
      //   accessToken:
      //     'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMDIiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3NDE3OTU1MjAsImV4cCI6MTg5OTU4MDI4MH0.b4GnVE0pbdc8RjtNCPvRdwcRtr5lhHap1XJMRzACrrAU6Z5_8hEhzI6_ML9EtJiC6F0jySpWUSAvc2l4v4jmwg',
      //   keepLoggedIn,
      // };
      // dispatch(loginThunk(loginData));
      dispatch(setStatus('in-app'));
      return;
    }
  };

  useEffect(() => {
    if (status === 'out-session' || status === 'after-logout') {
      dispatch(setStatus('before-login'));
    }
  }, [dispatch, status]);

  return (
    <div className='flex h-screen w-full items-center justify-center bg-[url("/src/assets/images/background.png")] bg-cover bg-center bg-no-repeat'>
      <div className='w-full max-w-lg rounded-2xl bg-white p-8 shadow'>
        <h2 className='text-center text-2xl font-bold uppercase text-black'>Login</h2>
        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
            <CustomTextFieldWithLabel
              name='email'
              control={control}
              label={'Username'}
              required
              placeholder={'Enter your username'}
              autoComplete='false'
            />
            <CustomTextFieldWithLabel
              name='password'
              control={control}
              label={tForm('label.password')}
              required
              type='password'
              placeholder={tForm('placeholder.password')}
              autoComplete='false'
            />
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <Checkbox
                  className='flex text-sm text-gray-500'
                  id='remember_me'
                  onChange={() => setKeepLoggedIn((checked) => !checked)}>
                  Remember me
                </Checkbox>
              </div>

              <Link
                to={MY_ROUTE.FORGOT_PASSWORD.self}
                className='text-center text-sm text-gray-500 hover:text-primary-500'>
                {tLogin('button.forgot_password')}
              </Link>
            </div>
            <div className='mt-6 flex flex-col gap-4'>
              <Button
                htmlType='submit'
                className='w-full bg-[#F18D45CF] py-6 text-sm font-semibold text-white ease-linear'
                loading={false}>
                {tLogin('button.login')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
