import { UserRole } from './UserRole';

export type UserInfo = {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  lastLoginDate: null;
  role: UserRole;
};
