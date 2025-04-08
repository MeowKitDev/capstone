// import { TAG_TYPES } from '@/utils/constants/shared.constant';
// import { HTTP_METHOD } from '@/utils/enum/http-method.enum';
// import { BaseResponse, PaginationRESP } from '@/utils/types/response.type';
// import { CRMApi } from '../CRMApi.api';

// export const tripApi = CRMApi.enhanceEndpoints({ addTagTypes: [TAG_TYPES.TRIP] }).injectEndpoints({
//   endpoints: (build) => ({
//     getAdminFirmwareList: build.query<PaginationRESP<GetFirmwareRESP>, GetFirmwareListREQ>({
//       query: (filter: GetFirmwareListREQ) => ({
//         url: 'manager/trips/getall',
//         method: HTTP_METHOD.GET,
//         params: { ...filter },
//       }),
//       providesTags: [{ type: TAG_TYPES.TRIP }],
//       transformResponse: (response: BaseResponse<PaginationRESP<GetFirmwareRESP>>) => response.data,
//     }),
//   }),
// });

// export const { useGetAdminFirmwareListQuery } = tripApi;
