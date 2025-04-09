import axiosClient from '../../axiosClient';
import { PackageGetAllDTO } from '@/@types/dto/packageDTO';

// export interface PagedResponse<T> {
//   data: T[];
//   totalCount: number;
// }

export const packageApi = {
  // getAll: async (): Promise<PagedResponse<User>> => {
  //   const response: AxiosResponse<User[]> = await axiosClient.get("/manager/GetAllUsers", {
  //     // params: { page, size },
  //   });

  getAll: async () => {
    const response: PackageGetAllDTO[] = await axiosClient.get("/mobile/user/view/allpackages", {});
  return response;
  },
};
