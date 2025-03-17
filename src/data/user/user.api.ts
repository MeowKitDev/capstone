import { TAG_TYPES } from '@/utils/constants/shared.constant';
import { HTTP_METHOD } from '@/utils/enum/http-method.enum';
import { BaseResponse, PaginationRESP } from '@/utils/types/response.type';
import { CRMApi } from '../CRMApi.api';
import { UserInfoDTO } from './dto/user-info.dto';
import { GetAllUsersREQ, GetUserDetailDevicesLogsREQ, GetUserDetailDevicesREQ } from './request/user-info.request';
import {
  GetAllUserssRESP,
  GetUserDetailCareServicesRESP,
  GetUserDetailDevicesLogsRESP,
  GetUserDetailDevicesRESP,
  GetUserDetailPurchaseHistoryRESP,
  GetUserDetailRESP,
  UserInfoRESP,
} from './response/user-info.response';

const userApi = CRMApi.enhanceEndpoints({ addTagTypes: [TAG_TYPES.USER] }).injectEndpoints({
  endpoints: (build) => ({
    getUserInfo: build.query<UserInfoDTO, void>({
      query: () => ({
        url: 'admin/account',
        method: HTTP_METHOD.GET,
      }),
      transformResponse: ({ data }: BaseResponse<UserInfoRESP>) => data,
      providesTags: [TAG_TYPES.USER],
    }),

    getAllUsers: build.query<PaginationRESP<GetAllUserssRESP>, GetAllUsersREQ>({
      query: (filter: GetAllUsersREQ) => ({
        url: 'admin/users',
        method: HTTP_METHOD.GET,
        params: { ...filter },
      }),
      providesTags: [{ type: TAG_TYPES.USER }],
      transformResponse: (response: BaseResponse<PaginationRESP<GetAllUserssRESP>>) => response.data,
    }),

    getUserDetailInfo: build.query({
      query: (userId: number) => ({
        url: `admin/users/${userId}`,
        method: HTTP_METHOD.GET,
      }),
      transformResponse: (response: BaseResponse<GetUserDetailRESP>) => response.data,
      providesTags: (result, error, arg) => {
        return [{ type: TAG_TYPES.USER, id: arg }];
      },
    }),

    getUserDetailDevices: build.query<PaginationRESP<GetUserDetailDevicesRESP>, GetUserDetailDevicesREQ>({
      query: ({ id, ...filter }: GetUserDetailDevicesREQ) => ({
        url: `admin/users/${id}/devices`,
        method: HTTP_METHOD.GET,
        params: { ...filter },
      }),
      transformResponse: (response: BaseResponse<PaginationRESP<GetUserDetailDevicesRESP>>) => response.data,
    }),

    getUserDetailDevicesLogs: build.query<PaginationRESP<GetUserDetailDevicesLogsRESP>, GetUserDetailDevicesLogsREQ>({
      query: ({ id, ...filter }: GetUserDetailDevicesLogsREQ) => ({
        url: `admin/users/${id}/devices/logs`,
        method: HTTP_METHOD.GET,
        params: { ...filter },
      }),
      transformResponse: (response: BaseResponse<PaginationRESP<GetUserDetailDevicesLogsRESP>>) => response.data,
    }),

    getUserDetailPurchaseHistory: build.query<
      PaginationRESP<GetUserDetailPurchaseHistoryRESP>,
      GetUserDetailDevicesREQ
    >({
      query: ({ id, ...filter }: GetUserDetailDevicesREQ) => ({
        url: `admin/users/${id}/purchase-history`,
        method: HTTP_METHOD.GET,
        params: { ...filter },
      }),
      transformResponse: (response: BaseResponse<PaginationRESP<GetUserDetailPurchaseHistoryRESP>>) => response.data,
    }),

    getUserDetailCareServices: build.query<PaginationRESP<GetUserDetailCareServicesRESP>, GetUserDetailDevicesREQ>({
      query: ({ id, ...filter }: GetUserDetailDevicesREQ) => ({
        url: `admin/users/${id}/care-services`,
        method: HTTP_METHOD.GET,
        params: { ...filter },
      }),
      transformResponse: (response: BaseResponse<PaginationRESP<GetUserDetailCareServicesRESP>>) => response.data,
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useGetAllUsersQuery,
  useGetUserDetailInfoQuery,
  useGetUserDetailDevicesQuery,
  useGetUserDetailDevicesLogsQuery,
  useGetUserDetailPurchaseHistoryQuery,
  useGetUserDetailCareServicesQuery,
} = userApi;
