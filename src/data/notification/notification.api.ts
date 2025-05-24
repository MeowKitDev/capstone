import { HTTP_METHOD } from '@/utils/enum/http-method.enum';
import { CRMApi } from '../CRMApi.api';
import { GetNotificationDTO } from './dto/notification.dto';
import { GetNotificationRESP } from './response/notification.response';

const notificationApi = CRMApi.enhanceEndpoints({}).injectEndpoints({
  endpoints: (build) => ({
    getNotification: build.query<GetNotificationDTO, void>({
      query: () => ({
        url: 'notification/my',
        method: HTTP_METHOD.GET,
      }),
      transformResponse: (data: GetNotificationRESP[]) => data,
    }),
    getNotificationList: build.query<GetNotificationDTO, void>({
      query: () => ({
        url: 'notification/notifications/system',
        method: HTTP_METHOD.GET,
      }),
      transformResponse: (data: GetNotificationRESP[]) => data,
    }),
    patchNotificationRead: build.mutation<void, { id: number }>({
      query: ({ id }) => ({
        url: `notification/${id}/read`,
        method: HTTP_METHOD.PATCH,
      }),
      invalidatesTags: ['Notification'],
    }),
  }),
});

export const { useGetNotificationQuery, useGetNotificationListQuery, usePatchNotificationReadMutation } =
  notificationApi;
