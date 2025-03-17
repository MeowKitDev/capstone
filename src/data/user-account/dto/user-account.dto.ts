import {
  USER_ACCOUNT_GENDER,
  USER_ACCOUNT_ROLE,
  USER_ACCOUNT_STATUS,
} from '@/utils/enum/user-account/user-account.enum';

export interface UserAccountDTO {
  id: number;
  name: string;
  phone: string;
  email: string;
  gender: USER_ACCOUNT_GENDER;
  status: USER_ACCOUNT_STATUS;
  role: USER_ACCOUNT_ROLE;
}
