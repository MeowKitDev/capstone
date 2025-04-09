import { TRIP_STATUS } from '@/utils/enum/trip/trip-status.enum';

export interface TripDTO {
  stripID: string;
  startDay: string;
  endDay: string;
  startLocation: string;
  endlocation: string;
  price: number;
  status: TRIP_STATUS;
  totalTime: number;
}
