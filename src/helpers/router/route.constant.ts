export enum ROUTE_NAME {
  LOGIN = 'login',
  SIGN_UP = 'sign-up',
  MY_PAGE = 'my-page',
  NOT_FOUND = 'not-found',
  RESET_PASSWORD = 'reset-password',
  FORGOT_PASSWORD = 'forgot-password',
  CHANGE_PASSWORD = 'change-password',
  DASHBOARD = 'dashboard',
  USER = 'user',
  VIEW_USER_ACCOUNT = 'view-user-account',
  CENSOR_DRIVER_REQUEST = 'censor-driver-request',
  TRIP = 'trip',
  FEEDBACK = 'feedback',
  PACKAGE = 'package',
  WALLET = 'wallet',
  REPORT = 'report',
  TRANSACTION_HISTORY = 'transaction-history',
  CENSOR_VEHICLE = 'censor-vehicle',
}

export const MY_ROUTE = {
  HOME: '/',
  DASHBOARD: {
    self: ROUTE_NAME.DASHBOARD,
  },
  LOGIN: ROUTE_NAME.LOGIN,
  SIGNUP: ROUTE_NAME.SIGN_UP,
  NOT_FOUND: ROUTE_NAME.NOT_FOUND,
  CHANGE_PASSWORD: ROUTE_NAME.CHANGE_PASSWORD,
  FORGOT_PASSWORD: {
    self: `/${ROUTE_NAME.FORGOT_PASSWORD}`,
    success: `/${ROUTE_NAME.FORGOT_PASSWORD}/success`,
  },
  USER: {
    self: `/${ROUTE_NAME.USER}`,
    VIEW_USER_ACCOUNT: {
      self: `/${ROUTE_NAME.USER}/${ROUTE_NAME.VIEW_USER_ACCOUNT}`,
      detail: (id: string) => `/${ROUTE_NAME.USER}/${ROUTE_NAME.VIEW_USER_ACCOUNT}/${id}`,
    },
    CENSOR_DRIVER_REQUEST: {
      self: `/${ROUTE_NAME.USER}/${ROUTE_NAME.CENSOR_DRIVER_REQUEST}`,
      detail: (id: string) => `/${ROUTE_NAME.USER}/${ROUTE_NAME.CENSOR_DRIVER_REQUEST}/${id}`,
    },
  },
  TRIP: {
    self: `/${ROUTE_NAME.TRIP}`,
  },
  FEEDBACK: {
    self: `/${ROUTE_NAME.FEEDBACK}`,
  },
  PACKAGE: {
    self: `/${ROUTE_NAME.PACKAGE}`,
  },
  WALLET: {
    self: `/${ROUTE_NAME.WALLET}`,
  },
  REPORT: {
    self: `/${ROUTE_NAME.REPORT}`,
  },
  TRANSACTION_HISTORY: {
    self: `/${ROUTE_NAME.TRANSACTION_HISTORY}`,
  },
  CENSOR_VEHICLE: {
    self: `/${ROUTE_NAME.CENSOR_VEHICLE}`,
    detail: (id: string) => `/${ROUTE_NAME.CENSOR_VEHICLE}/${id}`,
  },
};

export const DEFAULT_ROUTE = MY_ROUTE.LOGIN;
