import { AxiosResponse } from "axios";
import axiosClient from "../../axiosClient";
import { UserDTO } from "@/data/user-account/dto/user-account.dto";
import { UserGetAllDTO } from "@/@types/dto/userDTO";

// export interface PagedResponse<T> {
//   data: T[];
//   totalCount: number;
// }

export const userApi = {
  // getAll: async (): Promise<PagedResponse<User>> => {
  //   const response: AxiosResponse<User[]> = await axiosClient.get("/manager/GetAllUsers", {
  //     // params: { page, size },
  //   });

  getAll: async () => {
    const response: UserGetAllDTO[] = await axiosClient.get("/manager/GetAllUsers", {
      // params: { page, size },
    });

   return response;
  },
};
