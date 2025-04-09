import { WithOptional } from '@/utils/types/generic.type';
import { PagingREQ } from '@/utils/types/paging.type';

export type UserInfoREQ = {
  userFirstName: string;
  userLastName: string;
  userPhoneNumber: string;
  userAvatarKey: string;
};

export type UpdateUserInfoREQ = {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  dob: string;
  gender: string;
  userImage: string[];
  userImageContentType: string;
};

export type GetUserFilter = WithOptional<
  {
    pageSize: number;
    currentPage: number;
    searchBy: number;
    searchKeyword: string;
  },
  'pageSize' | 'currentPage' | 'searchBy' | 'searchKeyword'
>;

export type GetAllUsersREQ = GetUserFilter & PagingREQ;

export type GetUserDetailDevicesFilter = WithOptional<
  {
    pageSize: number;
    currentPage: number;
  },
  'pageSize' | 'currentPage'
>;

export type GetUserDetailDevicesREQ = { id: number } & GetUserDetailDevicesFilter;

export type GetUserDetailDevicesLogsREQ = GetUserDetailDevicesREQ;
