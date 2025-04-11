import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

type BreadcrumbItem = {
  title: ReactNode;
};

type DefaultContainerProps = {
  title: ReactNode;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  breadcrumbs?: BreadcrumbItem[];
  button?: ReactNode;
};

export default function DefaultContainer({
  title,
  children,
  icon,
  className,
  breadcrumbs,
  button,
}: DefaultContainerProps) {
  const { t: tLayout } = useTranslation('layout');

  return (
    <div
      className={twMerge(
        'flex min-h-screen w-full max-w-pc flex-col gap-10 overflow-hidden rounded-lg bg-white p-8 shadow-lg',
        className,
      )}>
      <div className='flex items-center justify-between'>
        <div className='w-full'>
          {/* <Breadcrumb
            className='text-primary-500'
            items={
              breadcrumbs
                ? [
                    {
                      title: (
                        <Link to={MY_ROUTE.HOME}>
                          <span className='flex items-center gap-2 text-gray-600'>
                            <HomeIcon className='h-[14px] w-[14px] text-gray-600' />
                            {tLayout('home')}
                          </span>
                        </Link>
                      ),
                    },
                    ...breadcrumbs,
                  ]
                : [
                    {
                      title: (
                        <Link to={MY_ROUTE.HOME}>
                          <span className='flex items-center gap-2 text-gray-600'>
                            <HomeIcon className='h-[14px] w-[14px] text-gray-600' />
                            {tLayout('home')}
                          </span>
                        </Link>
                      ),
                    },
                    {
                      title: <span className='text-main-blue'>{title}</span>,
                    },
                  ]
            }
          /> */}
          {button ? (
            <div className='flex w-full items-center justify-between'>
              <h1 className='text-3xl font-bold text-primary-500'>{title}</h1>
              {button}
            </div>
          ) : (
            <h1 className='text-3xl font-bold text-primary-500'>{title}</h1>
          )}
        </div>
        {icon}
      </div>
      {children}
    </div>
  );
}
