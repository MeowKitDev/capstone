import { TAG_TYPES } from '@/utils/constants/shared.constant';
import { HTTP_METHOD } from '@/utils/enum/http-method.enum';
import { CRMApi } from '../CRMApi.api';
import { BaseDashboardFilter } from './request/dashboard.request';
import {
  GetBaseDashboardRESP,
  GetPassengerDriverStatisticRESP,
  GetTripStatisticsRESP,
} from './response/dashboard.response';

export const dashboardApi = CRMApi.enhanceEndpoints({ addTagTypes: [TAG_TYPES.DASHBOARD] }).injectEndpoints({
  endpoints: (build) => ({
    getUserStatistics: build.query<GetPassengerDriverStatisticRESP, BaseDashboardFilter>({
      query: (filter: BaseDashboardFilter) => ({
        url: 'dashboard/passenger-driver',
        method: HTTP_METHOD.GET,
        params: { ...filter },
      }),
      providesTags: [{ type: TAG_TYPES.DASHBOARD }],
      transformResponse: (response: GetPassengerDriverStatisticRESP) => response,
    }),

    getTripStatistics: build.query<GetTripStatisticsRESP[], BaseDashboardFilter>({
      query: (filter: BaseDashboardFilter) => ({
        url: 'dashboard/trip-create-stats',
        method: HTTP_METHOD.GET,
        params: { ...filter },
      }),
      providesTags: [{ type: TAG_TYPES.DASHBOARD }],
    }),
  }),
});

export const { useGetUserStatisticsQuery, useGetTripStatisticsQuery } = dashboardApi;
