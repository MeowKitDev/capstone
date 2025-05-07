import { TYPE } from '@/utils/enum/dashboard/type.enum';

export type BaseDashboardFilter = {
  type: string;
  targetDate?: string;
  month?: string;
  year?: string;
};
