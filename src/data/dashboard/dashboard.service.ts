import { PARAM_FIELD } from '@/utils/enum/param-field.enum';
import { ParsedQuery } from 'query-string';
import { BaseDashboardFilter } from './request/dashboard.request';

export const dateDashboardParamsToFilter = (searchParams: ParsedQuery<string>): BaseDashboardFilter => {
  const type = (searchParams[PARAM_FIELD.TYPE] as string) || ('WEEK' as string);
  const targetDate = searchParams[PARAM_FIELD.TARGET_DATE] as string;
  const month = searchParams[PARAM_FIELD.MONTH] as string;
  const year = searchParams[PARAM_FIELD.YEAR] as string;
  return {
    type: type,
    targetDate: type === 'WEEK' ? targetDate || new Date().toISOString() : undefined,
    ...(!!month && { month }),
    ...(!!year && { year }),
  };
};
