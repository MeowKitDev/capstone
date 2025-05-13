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

export type GetPackageStatisticsRESP = {
  packageName: string;
  totalSold: number;
};

export type GetDashboardSummaryRESP = {
  totalUsers: number;
  totalRevenue: number;
  totalPackagesSold: number;
};
