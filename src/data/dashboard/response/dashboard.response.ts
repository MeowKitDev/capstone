export type GetBaseDashboardRESP = {
  dateTime: string;
  value: number;
};

export type GetTripStatisticsRESP = {
  dateTime: string;
  count: number;
};

export type GetPassengerDriverStatisticRESP = {
  dataUser: GetBaseDashboardRESP[];
  dataDriver: GetBaseDashboardRESP[];
};

export type GetProfitStatisticsRESP = {
  fromtrip: GetBaseDashboardRESP[];
  frompackage: GetBaseDashboardRESP[];
};
