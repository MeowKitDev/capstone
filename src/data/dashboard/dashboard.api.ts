import { TAG_TYPES } from '@/utils/constants/shared.constant';
import { HTTP_METHOD } from '@/utils/enum/http-method.enum';
import { CRMApi } from '../CRMApi.api';
import { BaseDashboardFilter } from './request/dashboard.request';
import { GetPassengerDriverStatisticRESP } from './response/dashboard.response';

const dashboardApi = CRMApi.enhanceEndpoints({ addTagTypes: [TAG_TYPES.DASHBOARD] }).injectEndpoints({
  endpoints: (build) => ({
    getPassengerDriverStatistics: build.query<GetPassengerDriverStatisticRESP, BaseDashboardFilter>({
      query: (params: BaseDashboardFilter) => ({
        url: 'dashboard/passenger-driver',
        method: HTTP_METHOD.GET,
        params,
      }),
      providesTags: [TAG_TYPES.DASHBOARD],
    }),
  }),
});

export const { useGetPassengerDriverStatisticsQuery } = dashboardApi;
