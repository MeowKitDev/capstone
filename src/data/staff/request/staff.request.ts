import { WithOptional } from '@/utils/types/generic.type';
import { PagingREQ } from '@/utils/types/paging.type';

export type GetStaffListFilter = WithOptional<
  {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    sort: string[];
  },
  'firstName' | 'lastName' | 'phone' | 'email' | 'sort'
>;

export type GetStaffListREQ = GetStaffListFilter & PagingREQ;
