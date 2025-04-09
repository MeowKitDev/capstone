import { WithOptional } from '@/utils/types/generic.type';
import { PagingREQ } from '@/utils/types/paging.type';

export type GetTripListFilter = WithOptional<
  {
    startLocation: string;
    endLocation: string;
    status: string;
    sort: string[];
  },
  'startLocation' | 'endLocation' | 'status' | 'sort'
>;

export type GetTripListREQ = GetTripListFilter & PagingREQ;
