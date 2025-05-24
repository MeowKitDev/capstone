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
  }),
});

export const { useGetNotificationQuery } = notificationApi;
