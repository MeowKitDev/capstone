import { DriverInfo, TripDetailDTO } from '@/data/trip/response/trip.response';
import { UserDTO } from '@/data/user-account/dto/user-account.dto';
import { FEEDBACK_STATUS } from '@/utils/enum/feedback/feedback-status.enum';

export type GetFeedbackRESP = {
  feedbackID: string;
  feedbackStatus: FEEDBACK_STATUS;
  feedbackDescription: string;
  feedbackRating: number;
  feedbackTime: string;
  trip: TripDetailDTO;
  driver: DriverInfo;
  user: UserDTO;
};
