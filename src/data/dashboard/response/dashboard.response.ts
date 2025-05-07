export type GetBaseDashboardRESP = {
  dateTime: string;
  value: number;
};

export type GetPassengerDriverStatisticRESP = {
  dataUser: GetBaseDashboardRESP[];
  dataDriver: GetBaseDashboardRESP[];
};
