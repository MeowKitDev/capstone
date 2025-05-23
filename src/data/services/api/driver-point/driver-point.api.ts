import { DriverPointDTO } from '@/@types/dto/driverPointDTO';
import axiosClient from '../../axiosClient';
import { PagedResponse } from '@/@types/dto/pagedResponse';

// export interface PagedResponse<T> {
//   data: T[];
//   totalCount: number;
// }

export const DriverPointApi = {
  getListPoint: async (params: {
    driveruuId: string;
    page?: number;
    size?: number;
  }): Promise<PagedResponse<DriverPointDTO>> => {
    const response: PagedResponse<DriverPointDTO> = await axiosClient.get('manager/driver-point/by-driver', {
      params,
    });
    return response;
  },
  penalize: async (feedbackID: string, body: { reason: string }): Promise<void> => {
    await axiosClient.post(`/manager/driver-point/${feedbackID}/penalize`, body);
  },
  refund: async (pointId: string): Promise<void> => {
    await axiosClient.post(`/manager/driver-point/${pointId}/refund`);
  },
};
