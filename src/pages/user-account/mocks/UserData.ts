import { UserAccountDTO } from '@/data/user-account/dto/user-account.dto';
import {
  USER_ACCOUNT_GENDER,
  USER_ACCOUNT_ROLE,
  USER_ACCOUNT_STATUS,
} from '@/utils/enum/user-account/user-account.enum';

export const UserAccountData: UserAccountDTO[] = [
  {
    id: 1,
    name: 'John Doe',
    phone: '1234567890',
    email: 'john.doe@example.com',
    gender: USER_ACCOUNT_GENDER.MALE,
    status: USER_ACCOUNT_STATUS.ACTIVE,
    role: USER_ACCOUNT_ROLE.DRIVER,
  },
  {
    id: 2,
    name: 'Jane Doe',
    phone: '1234567890',
    email: 'jane.doe@example.com',
    gender: USER_ACCOUNT_GENDER.FEMALE,
    status: USER_ACCOUNT_STATUS.INACTIVE,
    role: USER_ACCOUNT_ROLE.PASSENGER,
  },
  {
    id: 3,
    name: 'Jake Smith',
    phone: '1234567890',
    email: 'jake.smith@example.com',
    gender: USER_ACCOUNT_GENDER.MALE,
    status: USER_ACCOUNT_STATUS.ACTIVE,
    role: USER_ACCOUNT_ROLE.DRIVER,
  },
  {
    id: 4,
    name: 'Emily Johnson',
    phone: '1234567890',
    email: 'emily.johnson@example.com',
    gender: USER_ACCOUNT_GENDER.FEMALE,
    status: USER_ACCOUNT_STATUS.ACTIVE,
    role: USER_ACCOUNT_ROLE.PASSENGER,
  },
  {
    id: 5,
    name: 'Michael Brown',
    phone: '1234567890',
    email: 'michael.brown@example.com',
    gender: USER_ACCOUNT_GENDER.MALE,
    status: USER_ACCOUNT_STATUS.ACTIVE,
    role: USER_ACCOUNT_ROLE.DRIVER,
  },
  {
    id: 6,
    name: 'Olivia Davis',
    phone: '1234567890',
    email: 'olivia.davis@example.com',
    gender: USER_ACCOUNT_GENDER.FEMALE,
    status: USER_ACCOUNT_STATUS.ACTIVE,
    role: USER_ACCOUNT_ROLE.PASSENGER,
  },
  {
    id: 7,
    name: 'Daniel Wilson',
    phone: '1234567890',
    email: 'daniel.wilson@example.com',
    gender: USER_ACCOUNT_GENDER.MALE,
    status: USER_ACCOUNT_STATUS.ACTIVE,
    role: USER_ACCOUNT_ROLE.DRIVER,
  },
  {
    id: 8,
    name: 'Sophia Martinez',
    phone: '1234567890',
    email: 'sophia.martinez@example.com',
    gender: USER_ACCOUNT_GENDER.FEMALE,
    status: USER_ACCOUNT_STATUS.ACTIVE,
    role: USER_ACCOUNT_ROLE.PASSENGER,
  },
  {
    id: 9,
    name: 'William Taylor',
    phone: '1234567890',
    email: 'william.taylor@example.com',
    gender: USER_ACCOUNT_GENDER.MALE,
    status: USER_ACCOUNT_STATUS.ACTIVE,
    role: USER_ACCOUNT_ROLE.DRIVER,
  },
  {
    id: 10,
    name: 'Ava Moore',
    phone: '1234567890',
    email: 'ava.moore@example.com',
    gender: USER_ACCOUNT_GENDER.FEMALE,
    status: USER_ACCOUNT_STATUS.ACTIVE,
    role: USER_ACCOUNT_ROLE.PASSENGER,
  },
  {
    id: 11,
    name: 'Ethan Clark',
    phone: '1234567890',
    email: 'ethan.clark@example.com',
    gender: USER_ACCOUNT_GENDER.MALE,
    status: USER_ACCOUNT_STATUS.ACTIVE,
    role: USER_ACCOUNT_ROLE.DRIVER,
  },
];
