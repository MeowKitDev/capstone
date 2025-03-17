import { UserRole } from '@/components/types/UserRole';
import { USER_CARE_SERVICES_STATUS } from '@/utils/enum/user/user-care-services-status.enum';
import { USER_DEVICE_ROLE } from '@/utils/enum/user/user-device-role.enum';

export type UserInfoRESP = {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  lastLoginDate: null;
  role: UserRole;
};

export type GetAllUserssRESP = {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  appVersion: string;
  numberOfRegisteredDevices: number;
  lastAccessDate: number;
};

export type UserDTO = GetAllUserssRESP;

export type GetUserDetailRESP = GetAllUserssRESP;

export type GetUserDetailDevicesRESP = {
  id: number;
  role: USER_DEVICE_ROLE;
  serialNumber: string;
  macAddress: string;
  model: string;
  name: string;
  version: number;
};

export type GetUserDetailDevicesLogsRESP = {
  id: number;
  message: string;
  rawData: string;
  clientID: string;
  createdAt: number;
};

export type UserDetailDeviceDTO = GetUserDetailDevicesRESP;

export type UserDetailDevicesLogsDTO = GetUserDetailDevicesLogsRESP;

export type GetUserDetailPurchaseHistoryRESP = {
  id: number;
  godomallOrderId: number;
  purchaseDate: number;
  productName: string;
};

export type UserDetailPurchaseHistoryDTO = GetUserDetailPurchaseHistoryRESP;

export type GetUserDetailCareServicesRESP = {
  id: number;
  status: USER_CARE_SERVICES_STATUS;
  name: string;
  contractDate: number;
  expirationDate: number;
  productName: string;
  deliveryDate: number;
};

export type UserDetailCareServicesDTO = GetUserDetailCareServicesRESP;
