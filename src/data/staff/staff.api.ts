import { TAG_TYPES } from '@/utils/constants/shared.constant';
import { HTTP_METHOD } from '@/utils/enum/http-method.enum';
import { PaginationRESP } from '@/utils/types/response.type';
import { CRMApi } from '../CRMApi.api';
import { GetStaffListREQ } from './request/staff.request';
import { GetStaffRESP } from './response/staff.response';

export const staffApi = CRMApi.enhanceEndpoints({ addTagTypes: [TAG_TYPES.STAFF] }).injectEndpoints({
  endpoints: (build) => ({
    getStaffList: build.query<PaginationRESP<GetStaffRESP>, GetStaffListREQ>({
      query: (filter: GetStaffListREQ) => ({
        url: 'admin/staff',
        method: HTTP_METHOD.GET,
        params: { ...filter },
      }),
      providesTags: [{ type: TAG_TYPES.TRIP }],
    }),
  }),
});

export const { useGetStaffListQuery } = staffApi;
