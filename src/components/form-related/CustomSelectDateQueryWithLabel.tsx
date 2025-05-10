/* eslint-disable react-hooks/exhaustive-deps */
import { DatePicker, Select, Skeleton } from 'antd';
import queryString from 'query-string';
import { ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { SelectOptions } from '../types/Selects.type';
import CustomLabel from './CustomLabel';
import dayjs from 'dayjs';

type CustomSelectDateQueryWithLabelProps = {
  queryKey: string;
  label?: string;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  isFetching?: boolean;
  isDisable?: boolean;
  showSearch?: boolean;
  selectContainerClassName?: string;
  relatedQueryKeys?: string[];
  onSelect?: (value: string) => void;
  tooltip?: ReactNode;
};

export default function CustomSelectDateQueryWithLabel({
  queryKey,
  label,
  placeholder,
  defaultValue,
  className,
  selectContainerClassName,
  onSelect,
}: CustomSelectDateQueryWithLabelProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const params = queryString.parse(location.search);
  const query = params[queryKey] || '';
  const { t: tForm } = useTranslation('form');

  useEffect(() => {
    if (defaultValue) {
      params[queryKey] = defaultValue;
      navigate({ search: queryString.stringify(params) });
    }
  }, [defaultValue, navigate, queryKey]);

  return (
    <div className={twMerge('flex flex-col', className)}>
      {!!label && <CustomLabel htmlFor={queryKey} value={label} required={false} className='text-sm' />}
      <div className={twMerge('w-full', selectContainerClassName)}>
        <DatePicker
          id={queryKey}
          value={query ? dayjs(query as string) : null}
          placeholder={placeholder ?? tForm('placeholder.date')}
          format='YYYY-MM-DD'
          onChange={(date) => {
            const formattedDate = date ? date.format('YYYY-MM-DD') : '';
            params[queryKey] = formattedDate;
            navigate({ search: queryString.stringify(params) });
            if (onSelect) onSelect(formattedDate);
          }}
          className={'h-10 w-full min-w-48'}
        />
      </div>
    </div>
  );
}
