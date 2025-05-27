import { PARAM_FIELD } from '@/utils/enum/param-field.enum';
import { ParsedQuery } from 'query-string';
import { BaseDashboardFilter } from './request/dashboard.request';
import dayjs from 'dayjs';

export const dateDashboardParamsToFilter = (searchParams: ParsedQuery<string>): BaseDashboardFilter => {
  const type = (searchParams[PARAM_FIELD.TYPE] as string) || ('MONTH' as string);
  const date = searchParams[PARAM_FIELD.DATE] as string;

  const targetDate = date ? date + 'T00:00:00.000Z' : (dayjs().format('YYYY-MM-DD') as string) + 'T00:00:00.000Z';
  const month = dayjs(date).format('MM');
  const year = dayjs(date).format('YYYY');

  return {
    type: type,
    targetDate: type === 'WEEK' ? targetDate : undefined,
    month: type === 'MONTH' ? month : undefined,
    year: type === 'YEAR' || type === 'MONTH' ? year : undefined,
  };
};
