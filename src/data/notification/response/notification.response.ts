import { TYPE_NOTIFICATION } from '@/utils/enum/notification/type.enum';

export type GetNotificationRESP = {
  id: number;
  title: string;
  content: string;
  isRead: boolean;
  createdDate: string;
  userId: number;
  type: TYPE_NOTIFICATION;
  sourceType: string;
  relatedId: string;
};
