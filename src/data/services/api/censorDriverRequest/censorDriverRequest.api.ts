import { CensorDriverRequestDTO } from '@/@types/dto/censorDriverRequestDTO';
import axiosClient from '../../axiosClient';
import { PagedResponse } from '@/@types/dto/pagedResponse';

// export const censorDriverRequestApi = {
//   getAll: async () => {
//     const response: CensorDriverRequestDTOAll = await axiosClient.get("manager/drivers/confirming/getAll");
//   return response.content ?? [];
//   },
// };

export const censorDriverRequestApi = {
  getAll: async (): Promise<PagedResponse<CensorDriverRequestDTO>> => {
    const response: PagedResponse<CensorDriverRequestDTO> = await axiosClient.get('manager/drivers/confirming/getAll');
    return response;
  },
};
