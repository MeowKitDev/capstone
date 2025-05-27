export enum Role {
  ADMIN = 'ROLE_ADMIN',
  DRIVER = 'ROLE_DRIVER',
  PASSENGER = 'ROLE_PASSENGER',
  STAFF = 'ROLE_STAFF',
  USER = 'ROLE_USER',
}
export const roleMap: Record<string, string> = {
  ROLE_ADMIN: 'Quản trị viên',
  ROLE_PASSENGER: 'Hành khách',
  ROLE_DRIVER: 'Tài xế',
  ROLE_STAFF: 'Nhân viên',
  ROLE_USER: 'Người dùng',
};
