export interface UserGetAllDTO {
  userId: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phoneNumber: string;
  active: boolean;
  roles: string[];
}
