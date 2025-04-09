import { AxiosResponse } from "axios";
import axiosClient from "../../axiosClient";
import { UserDTO } from "@/data/user-account/dto/user-account.dto";
import { UserGetAllDTO, UserGetMeDTO } from "@/@types/dto/userDTO";
import { PagedResponse } from "@/@types/dto/pagedResponse";

// export interface PagedResponse<T> {
//   data: T[];
//   totalCount: number;
// }

export const userApi = {
  // getAll: async (): Promise<PagedResponse<User>> => {
  //   const response: AxiosResponse<User[]> = await axiosClient.get("/manager/GetAllUsers", {
  //     // params: { page, size },
  //   });

  // getAll: async () => {
  //   const response: UserGetAllDTO[] = await axiosClient.get('/manager/GetAllUsers', {
  //     // params: { page, size },
  //   });

  //   return response;
  // },

  getAll: async (): Promise<PagedResponse<UserGetAllDTO>> => {
    const response: PagedResponse<UserGetAllDTO> = await axiosClient.get("/manager/GetAllUsers");
    return response;
  },

  getMe: async () => {
    const response: UserGetMeDTO[] = await axiosClient.get("/getme", {
      // params: { page, size },
    });

   return response;
  },
};
