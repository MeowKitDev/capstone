import axiosClient from '../../axiosClient';

// export interface PagedResponse<T> {
//   data: T[];
//   totalCount: number;
// }

export const DriverPointApi = {
  penalize: async (id: string, body: { reason: string }): Promise<void> => {
    await axiosClient.post(`/manager/driver-point/${id}/penalize`, body);
  },
  refund: async (pointId : string): Promise<void> => {
    await axiosClient.post(`/manager/driver-point/${pointId}/refund`);
  },
};
